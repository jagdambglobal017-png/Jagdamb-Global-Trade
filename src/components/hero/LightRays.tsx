import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

interface LightRaysProps {
  raysOrigin?: 'top-center' | 'top-left' | 'top-right' | 'center';
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  fadeDistance?: number;
  saturation?: number;
  className?: string;
}

export const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = '#e3ebec',
  raysSpeed = 1.5,
  lightSpread = 0.8,
  rayLength = 1.2,
  followMouse = true,
  mouseInfluence = 0.2,
  noiseAmount = 0.1,
  distortion = 0.05,
  fadeDistance = 1.6,
  saturation = 1.1,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.2 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Convert hex color to RGB normalized [0-1]
    const hexToRgb = (hex: string) => {
      const clean = hex.replace('#', '');
      const num = parseInt(clean, 16);
      return [
        ((num >> 16) & 255) / 255,
        ((num >> 8) & 255) / 255,
        (num & 255) / 255,
      ];
    };

    const rgbColor = hexToRgb(raysColor);

    const renderer = new Renderer({
      alpha: true,
      depth: false,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const canvas = gl.canvas;
    canvas.className = 'w-full h-full pointer-events-none block';
    container.appendChild(canvas);

    const geometry = new Triangle(gl);

    const vertexShader = /* glsl */ `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uColor;
      uniform float uSpread;
      uniform float uLength;
      uniform float uNoise;
      uniform float uDistortion;
      uniform float uFade;
      uniform float uSat;
      varying vec2 vUv;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        st.y = 1.0 - st.y;
        
        vec2 origin = ${
          raysOrigin === 'top-left' ? 'vec2(0.2, 0.0)' :
          raysOrigin === 'top-right' ? 'vec2(0.8, 0.0)' :
          raysOrigin === 'center' ? 'vec2(0.5, 0.5)' :
          'vec2(0.5, 0.0)'
        } + (uMouse - 0.5) * ${mouseInfluence.toFixed(2)};
        vec2 dir = st - origin;
        float dist = length(dir);
        float angle = atan(dir.x, dir.y);

        float rays = noise(vec2(angle * 8.0 * uSpread + uTime * 0.5, uTime * 0.2));
        rays += noise(vec2(angle * 16.0 * uSpread - uTime * 0.8, dist * 2.0)) * 0.5;
        
        float intensity = smoothstep(uLength, 0.0, dist);
        intensity *= pow(rays, 1.8);
        intensity *= smoothstep(uFade, 0.0, dist);

        vec3 finalColor = uColor * uSat;
        float alpha = intensity * 0.35;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.clientWidth, container.clientHeight] },
        uMouse: { value: [0.5, 0.2] },
        uColor: { value: rgbColor },
        uSpread: { value: lightSpread },
        uLength: { value: rayLength },
        uNoise: { value: noiseAmount },
        uDistortion: { value: distortion },
        uFade: { value: fadeDistance },
        uSat: { value: saturation },
      },
      transparent: true,
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!followMouse || !container) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current = { x, y };
    };

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    let animationFrameId: number;
    const render = (time: number) => {
      program.uniforms.uTime.value = time * 0.001 * raysSpeed;
      program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];
      renderer.render({ scene: mesh });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (followMouse) window.removeEventListener('mousemove', handleMouseMove);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    followMouse,
    mouseInfluence,
    noiseAmount,
    distortion,
    fadeDistance,
    saturation,
  ]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-10 pointer-events-none overflow-hidden ${className}`}
    />
  );
};

import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './StrokeText.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DEFAULT_TEXT = 'Draw Attention';

export interface StrokeTextProps {
  text?: string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  trigger?: 'mount' | 'hover' | 'scroll' | 'loop';
  fillMode?: 'fade' | 'wipe' | 'none';
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  reverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const StrokeText: React.FC<StrokeTextProps> = ({
  text = DEFAULT_TEXT,
  strokeColor = '#F97316',
  fillColor = '#F8FAFC',
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  ease = 'power2.out',
  trigger = 'mount',
  fillMode = 'wipe',
  fontSize = 128,
  fontWeight = 800,
  letterSpacing = -4,
  reverse = false,
  className = '',
  style = {}
}) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const strokeTextRef = useRef<SVGTextElement>(null);
  const wipeRectRef = useRef<SVGRectElement>(null);

  const [box, setBox] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

  const rawId = useId();
  const wipeId = `stroke-text-wipe-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const characters = useMemo(() => Array.from(String(text ?? '')), [text]);

  useLayoutEffect(() => {
    const el = strokeTextRef.current;
    if (!el) return;

    const measure = () => {
      try {
        const b = el.getBBox();
        setBox({
          x: Math.floor(b.x),
          y: Math.floor(b.y),
          width: Math.ceil(b.width),
          height: Math.ceil(b.height)
        });
      } catch {
        // Fallback for non-rendered SVG text
        setBox({ x: 0, y: 0, width: 400, height: 100 });
      }
    };

    measure();

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
  }, [text, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    if (!box) return;

    const root = rootRef.current;
    if (!root) return;

    const strokeTextEl = strokeTextRef.current;
    const wipe = wipeRectRef.current;

    const strokes = strokeTextEl ? Array.from(strokeTextEl.querySelectorAll<SVGTSpanElement>('.stroke-text__char--stroke')) : [];
    const fills = strokeTextEl ? Array.from(strokeTextEl.querySelectorAll<SVGTSpanElement>('.stroke-text__char--fill')) : [];

    const pad = Math.max(8, strokeWidth * 3);
    const strokeWidthEstimate = Math.max(1, strokeWidth * 0.75);
    const fontSizeNum = typeof fontSize === 'number' ? fontSize : parseFloat(String(fontSize)) || 100;
    const charWidth = fontSizeNum * 0.6;
    const dash = Math.ceil(2 * (charWidth + fontSizeNum) + strokeWidthEstimate * 8 + pad);

    const fillEnabled = fillMode !== 'none';
    const useWipe = fillEnabled && fillMode === 'wipe';
    const fillDuration = Math.max(0.4, drawDuration * 0.5);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const staggerConfig: any = reverse ? { each: stagger, from: 'end' } : stagger;
    const targets = [...strokes, ...fills, wipe].filter(Boolean);

    const setStart = () => {
      gsap.killTweensOf(targets);
      gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: dash });
      gsap.set(fills, { opacity: useWipe ? 1 : 0 });
      if (wipe) gsap.set(wipe, { attr: { width: 0 } });
    };

    const setEnd = () => {
      gsap.killTweensOf(targets);
      gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: 0 });
      gsap.set(fills, { opacity: fillEnabled ? 1 : 0 });
      if (wipe) gsap.set(wipe, { attr: { width: box.width } });
    };

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setEnd();
      return () => gsap.killTweensOf(targets);
    }

    const build = () => {
      setStart();
      const tl = gsap.timeline({
        paused: true,
        repeat: trigger === 'loop' ? -1 : 0,
        repeatDelay: trigger === 'loop' ? 0.9 : 0,
        defaults: { overwrite: 'auto' }
      });

      tl.to(strokes, { strokeDashoffset: 0, duration: drawDuration, ease, stagger: staggerConfig }, 0);

      if (useWipe && wipe) {
        tl.to(
          wipe,
          { attr: { width: box.width }, duration: fillDuration, ease: 'power2.inOut' },
          drawDuration + fillDelay
        );
      } else if (fillEnabled) {
        tl.to(
          fills,
          { opacity: 1, duration: fillDuration, ease: 'power2.out', stagger: staggerConfig },
          drawDuration + fillDelay
        );
      }

      return tl;
    };

    let timeline: gsap.core.Timeline | null = null;
    let scrollTrigger: ScrollTrigger | null = null;

    if (trigger === 'mount' || trigger === 'loop') {
      timeline = build();
      timeline.play();
    } else if (trigger === 'scroll') {
      timeline = build();
      scrollTrigger = ScrollTrigger.create({
        trigger: root,
        start: 'top 85%',
        once: true,
        onEnter: () => timeline?.play()
      });
    } else {
      setStart();
    }

    const handleMouseEnter = () => {
      if (trigger !== 'hover') return;
      if (!timeline) timeline = build();
      timeline.restart();
    };

    const handleMouseLeave = () => {
      if (trigger !== 'hover') return;
      if (timeline) timeline.reverse();
    };

    if (trigger === 'hover') {
      root.addEventListener('mouseenter', handleMouseEnter);
      root.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (trigger === 'hover') {
        root.removeEventListener('mouseenter', handleMouseEnter);
        root.removeEventListener('mouseleave', handleMouseLeave);
      }
      scrollTrigger?.kill();
      timeline?.kill();
      gsap.killTweensOf(targets);
    };
  }, [
    box,
    text,
    strokeWidth,
    drawDuration,
    fillDelay,
    stagger,
    ease,
    trigger,
    fillMode,
    reverse
  ]);

  const svgStyle = useMemo(
    () => ({
      '--stroke-color': strokeColor,
      '--fill-color': fillColor,
      '--stroke-width': `${strokeWidth}px`,
      '--font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
      '--font-weight': String(fontWeight),
      '--letter-spacing': typeof letterSpacing === 'number' ? `${letterSpacing}px` : letterSpacing
    }),
    [strokeColor, fillColor, strokeWidth, fontSize, fontWeight, letterSpacing]
  );

  const viewBox = box
    ? `${box.x - strokeWidth * 2} ${box.y - strokeWidth * 2} ${box.width + strokeWidth * 4} ${box.height + strokeWidth * 4}`
    : '0 0 100 100';

  return (
    <span
      ref={rootRef}
      className={`stroke-text ${trigger === 'hover' ? 'stroke-text--hoverable' : ''} ${className}`}
      style={{ ...svgStyle, ...style } as React.CSSProperties}
    >
      <svg
        className="stroke-text__svg"
        viewBox={viewBox}
        aria-hidden="true"
        preserveAspectRatio="xMinYMin meet"
      >
        {fillMode === 'wipe' && box && (
          <defs>
            <clipPath id={wipeId}>
              <rect
                ref={wipeRectRef}
                x={box.x - strokeWidth * 2}
                y={box.y - strokeWidth * 2}
                width={0}
                height={box.height + strokeWidth * 4}
              />
            </clipPath>
          </defs>
        )}

        <text
          ref={strokeTextRef}
          x="0"
          y="0"
          dominantBaseline="hanging"
          className="stroke-text__text"
        >
          {characters.map((char, index) => (
            <tspan
              key={index}
              className={`stroke-text__char stroke-text__char--fill ${
                fillMode === 'wipe' ? 'stroke-text__char--wiped' : ''
              }`}
              clipPath={fillMode === 'wipe' ? `url(#${wipeId})` : undefined}
            >
              {char}
            </tspan>
          ))}

          {characters.map((char, index) => (
            <tspan key={index} className="stroke-text__char stroke-text__char--stroke">
              {char}
            </tspan>
          ))}
        </text>
      </svg>

      <span className="stroke-text__sr">{text}</span>
    </span>
  );
};

export default StrokeText;

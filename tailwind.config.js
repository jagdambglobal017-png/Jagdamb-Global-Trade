/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // Vibrant Orange
          hover: '#EA580C',   // Deep Orange
          light: '#FFEDD5',   // Light Warm Orange Tint
        },
        slateDark: {
          950: '#020617', // Deep Slate / Charcoal
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        light: {
          50: '#FAF7F0',
          100: '#F5F2EB', // Warm Beige Background
          200: '#EBE5D8',
          300: '#DFD8C8',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'glass-hover': '0 30px 60px -12px rgba(249, 115, 22, 0.18)',
      },
    },
  },
  plugins: [],
}

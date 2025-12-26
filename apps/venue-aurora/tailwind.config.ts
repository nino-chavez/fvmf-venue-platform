import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Sunset orange - main brand
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        semantic: {
          success: '#10b981',
          error: '#ef4444',
          warning: '#f59e0b',
          info: '#3b82f6',
        },
        genre: {
          jazz: '#f59e0b',
          blues: '#6366f1',
          rock: '#ef4444',
          tribute: '#a855f7',
          bigband: '#10b981',
          other: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-sm': 'clamp(2.5rem, 5vw, 3rem)',
        'display-md': 'clamp(3rem, 6vw, 4rem)',
        'display-lg': 'clamp(4rem, 8vw, 6rem)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px -10px hsl(25 95% 53% / 0.6)',
        'glow-jazz': '0 0 30px -8px hsl(38 92% 50% / 0.5)',
        'glow-blues': '0 0 30px -8px hsl(239 84% 67% / 0.5)',
        'glow-rock': '0 0 30px -8px hsl(0 91% 71% / 0.5)',
        'glow-tribute': '0 0 30px -8px hsl(271 91% 65% / 0.5)',
        'glow-bigband': '0 0 30px -8px hsl(151 55% 42% / 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;

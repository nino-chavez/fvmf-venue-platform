import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vinyl: {
          blue: {
            deep: '#003366',
            bright: '#0066cc',
            electric: '#00a8ff',
          },
          gold: {
            warm: '#f59e0b',
            bright: '#fbbf24',
          },
          orange: {
            DEFAULT: '#f97316',
            bright: '#fb923c',
          },
          black: '#0a0a0a',
          cream: '#fef3c7',
        },
        semantic: {
          success: '#059669',
          error: '#dc2626',
          warning: '#d97706',
          info: '#2563eb',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas-neue)', 'Impact', 'sans-serif'],
        body: ['var(--font-ibm-plex-sans)', 'Helvetica Neue', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'Courier New', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}

export default config

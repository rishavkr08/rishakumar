import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--mono)', 'monospace'],
      },
      colors: {
        accent: 'var(--accent)',
        muted:  'var(--muted)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
}

export default config

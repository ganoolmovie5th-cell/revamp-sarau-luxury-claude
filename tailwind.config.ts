import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#2D6A4F', light: '#40916C', dark: '#1B4332', muted: '#52B788' },
        gold: { DEFAULT: '#A16207', light: '#CA8A04', muted: '#D4A853' },
        cream: { DEFAULT: '#FAFAF9', warm: '#F5F0E8', dark: '#E7E5E4' },
        bark: { DEFAULT: '#1C1917', light: '#292524' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.08)',
        'glass-lg': '0 20px 60px rgba(0,0,0,0.12)',
        forest: '0 20px 60px rgba(45,106,79,0.2)',
      },
    },
  },
  plugins: [],
}
export default config

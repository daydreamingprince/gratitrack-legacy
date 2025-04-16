import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js, ts, jsx, tsx}',
    '.components/**/*.{js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%' : { opacity: 0 },
          '100%' : { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
export default config
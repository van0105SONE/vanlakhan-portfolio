/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['noto-sans', 'sans-serif'],
        pacifico: ['pacifico', 'cursive']
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        slideLeft: 'slideLeft 0.5s ease-in-out forwards',
        slideRight: 'slideRight 0.5s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out forwards'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'lemonade']
  }
}

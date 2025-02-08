/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mt-blue': '#3490dc',
        'mt-green': '#38c172'
      },
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
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        slideRotateIn: {
          '0%': { transform: 'translateX(-100%) rotate(-90deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' }
        },
        slideRotateOut: {
          '0%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateX(100%) rotate(90deg)', opacity: '0' }
        }
      },
      animation: {
        slideLeft: 'slideLeft 0.5s ease-in-out forwards',
        slideRight: 'slideRight 0.5s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out forwards',
        slideRotateIn: 'slideRotateIn 0.7s ease-out forwards',
        slideRotateOut: 'slideRotateOut 0.7s ease-in forwards'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'lemonade']
  }
}

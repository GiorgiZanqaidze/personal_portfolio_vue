/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '700px',
      md: '1200px',
      lg: '1600px'
    },
    extend: {
      colors: {
        'regal-blue': '#00C2FF',
        'dark-blue': '#121212',
        'light-gray': '#96C4F8',
        'light-black': '#282828',
        gray: '#5e5c5c',
        yellow: '#EDCD7B',
        'border-light': 'rgba(255,255,255, 0.1);'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

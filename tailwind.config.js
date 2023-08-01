/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#222222',
          primary: '#00b4ff',
        }
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xl': '1.3125rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(158, 36%, 37%)',
        'background': 'hsl(30, 38%, 92%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
        'grayish-blue': 'hsl(228, 12%, 48%)'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'ui-sans-serif'],
        'fraunces': ['Fraunces', 'ui-sans-serif']
      }
    },
  },
  plugins: [],
}

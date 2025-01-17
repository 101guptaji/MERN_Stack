/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'serif'],
      },
      colors:{
        'cream': '#eab676',
      }
    },
  },
  plugins: [],
}


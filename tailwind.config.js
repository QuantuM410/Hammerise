/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    backgroundColor: theme => ({
      'primary': '#686B6A',
      'secondary': '#000300',
      'tertiary': '#db6221',
    }),

    extend: {
      screens: {
        '67': '67%',
      },

      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      },

    },
  },
  plugins: [],
}
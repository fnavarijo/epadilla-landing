/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      },
      gridTemplateRows: {
        'masonry': 'repeat(3, minmax(200px, 1fr))'
      },
      transitionTimingFunction: {
        'fast-in': 'cubic-bezier(0,.9,.35,.99)',
      },
      transitionProperty: {
        'position-opacity': 'top, bottom, left, right, opacity',
        'size': 'height, width'
      }
    },
  },
  plugins: [],
}

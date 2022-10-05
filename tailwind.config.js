/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif']
      },
      gridTemplateRows: {
        'masonry': 'repeat(3, minmax(200px, 1fr))',
        'viewer': '[close] 4rem [content] 1fr [controls] 4rem',

      },
      gridTemplateColumns: {
        'viewer': '1.5rem 1fr 1.5rem'
      },
      transitionTimingFunction: {
        'fast-in': 'cubic-bezier(0,.9,.35,.99)',
        'fast-in-bg': 'cubic-bezier(0, 0.46, 0, 1.07)'
      },
      transitionProperty: {
        'position-opacity': 'top, bottom, left, right, opacity',
        'size': 'height, width'
      }
    },
  },
  plugins: [],
}

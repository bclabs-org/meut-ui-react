/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  presets: [
    require('./meut-preset.cjs')
  ],
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({addComponents, theme}) {
      addComponents(({
        '.bg-gradient-buy': {
          background: 'linear-gradient(180deg, rgba(249, 250, 251, 0.5) 49.48%, rgba(209, 250, 229, 0.25) 100%)'
        },
        '.bg-gradient-buy-hover': {
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 49.48%, rgba(209, 250, 229, 0.25) 100%)'
        },
        '.bg-gradient-sell': {
          background: 'linear-gradient(180deg, rgba(249, 250, 251, 0.5) 49.48%, rgba(252, 231, 243, 0.5) 100%)'
        },
        '.bg-gradient-sell-hover': {
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 49.48%, rgba(252, 231, 243, 0.5) 100%)'
        },
      }))
    }),
  ]
};

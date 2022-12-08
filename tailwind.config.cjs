const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6CD28A',
          disabled: 'rgba(108, 210, 138, 0.4)',
        },
        secondary: {
          DEFAULT: '#8B63E4',
          disabled: 'rgba(139, 99, 228, 0.4)',
        },
        tertiary: {
          DEFAULT: '#4E73CF',
          disabled: 'rgba(78, 115, 207, 0.4)',
        },
        meut: {
          gray: {
            DEFAULT: '#E3E6EB',
            500: '#B6C0D2',
            600: '#475569',
            700: '#313C53',
            800: '#1C263C',
            900: '#020319',
          }
        },
        danger: '#D63384',
        warning: '#FACC15',
      }
    },
  },
  plugins: [
    plugin(function ({addComponents, theme}) {
      addComponents(({
        '.bg-primary-hover': {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${theme('colors.primary.DEFAULT')}`
        },
        '.bg-primary-active': {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${theme('colors.primary.DEFAULT')}`
        },
        '.bg-secondary-hover': {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ${theme('colors.secondary.DEFAULT')}`
        },
        '.bg-secondary-active': {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${theme('colors.secondary.DEFAULT')}`
        },
        '.bg-tertiary-hover': {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), ${theme('colors.tertiary.DEFAULT')}`
        },
        '.bg-tertiary-active': {
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)), ${theme('colors.tertiary.DEFAULT')}`
        }
      }))
    })
  ],
}
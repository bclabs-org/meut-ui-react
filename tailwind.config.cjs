const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
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
      },
      borderRadius: {
        100: '4px',
        200: '8px',
        300: '12px',
        400: '16px',
        500: '20px',
        600: '24px',
        700: '32px',
        800: '48px',
      },
      boxShadow: {
        'light-100': '0px 6px 6px rgba(0, 83, 125, 0.1)',
        'light-200': '0px 12px 12px rgba(0, 83, 125, 0.1)',
        'light-300': '0px 24px 24px rgba(0, 83, 125, 0.1)',
        'light-400': '0px 48px 48px rgba(0, 83, 125, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
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
        },
        '.text-input-border-hover': {
          outline: '3px solid rgba(108, 210, 138, 0.2)'
        },
        '.text-input-border-focus': {
          outline: 'none',
          border: `2px solid ${theme('colors.primary.DEFAULT')}`
        },
      }))
    }),
  ],
}

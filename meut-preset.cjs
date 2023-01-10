const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#10B981', // emerald-500
          disabled: 'rgba(16, 185, 129, 0.4)',
          hover: '#059669', // emerald-600
          focus: '#047857' // emerald-700
        },
        onPrimary: '#FFFFFF',
        secondary: {
          DEFAULT: '#ECFDF5', // emerald-50
          disabled: 'rgba(236, 253, 245, 0.4)',
          hover: '#D1FAE5', // emerald-100
          focus: '#A7F3D0' // emerald-200
        },
        onSecondary: '#047857', // emerald-700
        tertiary: {
          DEFAULT: '#F9FAFB', // gray-50
          disabled: 'rgba(249, 250, 251, 0.4)',
          hover: '#F3F4F6', // gray-100
          focus: '#E5E7EB' // gray-200
        },
        onNeutral: '#FFFFFF',
        neutral: {
          DEFAULT: '#6B7280', // gray-500
          disabled: 'rgba(107, 114, 128, 0.4)',
          hover: '#4B5563', // gray-600
          focus: '#374151' // gray-700
        },
        onTertiary: '#374151', // gray-700
        danger: '#D63384',
        warning: '#DB2777', // pink-600
        overlay: 'rgba(107, 114, 128, 0.75)'
      },
      boxShadow: {
        'light-100': '0px 6px 6px rgba(0, 83, 125, 0.1)',
        'light-200': '0px 12px 12px rgba(0, 83, 125, 0.1)',
        'light-300': '0px 24px 24px rgba(0, 83, 125, 0.1)',
        'light-400': '0px 48px 48px rgba(0, 83, 125, 0.1)',
      }
    },
  },
}

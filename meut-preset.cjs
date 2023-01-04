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
          DEFAULT: '#10B981',
          disabled: 'rgba(16, 185, 129, 0.4)',
          hover: '#059669',
          focus: '#047857'
        },
        onPrimary: '#FFFFFF',
        secondary: {
          DEFAULT: '#ECFDF5',
          disabled: 'rgba(236, 253, 245, 0.4)',
          hover: '#D1FAE5',
          focus: '#A7F3D0'
        },
        onSecondary: '#047857',
        tertiary: {
          DEFAULT: '#F9FAFB',
          disabled: 'rgba(249, 250, 251, 0.4)',
          hover: '#F3F4F6',
          focus: '#E5E7EB'
        },
        onNeutral: '#FFFFFF',
        neutral: {
          DEFAULT: '#6B7280',
          disabled: 'rgba(107, 114, 128, 0.4)',
          hover: '#4B5563',
          focus: '#374151'
        },
        onTertiary: '#374151',
        danger: '#D63384',
        warning: '#DB2777',
        overlay: 'rgba(107, 114, 128, 0.75)'
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
}

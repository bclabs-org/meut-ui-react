/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./meut-preset.cjs')
  ],
  plugins: [
    require('@tailwindcss/forms')
  ]
};

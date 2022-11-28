/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./app/**/*.{js,jsx}'],
  theme: { extend: {} },
  variants: {},
  plugins: [require('daisyui')],
}

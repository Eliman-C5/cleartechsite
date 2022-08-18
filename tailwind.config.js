/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        color03_black: '#010B39',
        color02_blue: '#4361EE',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

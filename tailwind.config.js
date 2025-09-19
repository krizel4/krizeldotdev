module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile': '460px',
        'tablet': '1024px',
        'laptop': '1535px',
      },
    },
  },
  presets: [require('./utils/tailwind-preset')],
};

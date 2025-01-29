/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        simpson: {
          red: '#AB0520',
          gold: '#FDB913'
        }
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        alex: ['Great Vibes', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        ballet: ['Ballet', 'cursive'],
        corinthia: ['Corinthia', 'cursive'],
        bodoni: ['Bodoni Moda', 'serif'],
        rajdhani: ['Rajdhani', 'serif']
      },
      gridTemplateRows: {
        'layout': '10vw 40vw'
      }
    },
  },
  plugins: [],
}

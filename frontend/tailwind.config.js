/** @type {import('tailwindcss').Config} */

const carta = '4S.png'

module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        mesa1: 'url(/src/assets/mesa1.png)',
        mesa2: 'url(/src/assets/mesa2.png)',
        mesa3: 'url(/src/assets/mesa3.png)',
        mesa4: 'url(/src/assets/mesa4.png)',
        frente: `url(https://deckofcardsapi.com/static/img/${carta})`,
        carta1: 'url(/src/assets/carta1.png)',
        carta2: 'url(/src/assets/carta2.png)',
        carta3: 'url(/src/assets/carta3.png)',
        carta4: 'url(/src/assets/carta4.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

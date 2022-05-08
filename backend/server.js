const { get } = require('axios')

const { retirarCarta, reembaralharCartas } = require('./controller/services')

//console.log(retirarCarta)
const URL_NEW_DECK = `https://deckofcardsapi.com/api/deck/new/`

async function novoDeck() {

   try {
      const numCartas = 4
      const result = await get(URL_NEW_DECK)
      console.log(result.data)

      retirarCarta(result.data.deck_id, numCartas)

   } catch (error) {
      console.error('Deu erro ao criar novo deck!', error);
   }

}

novoDeck()

//module.exports = {novoDeck}
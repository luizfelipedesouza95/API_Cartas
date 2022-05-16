const { get } = require('axios')

async function novoDeck() {

    const URL_NEW_DECK = `https://deckofcardsapi.com/api/deck/new/`

   try {
      console.log("Novo deck criado!")
      result = await get(URL_NEW_DECK)
      //console.log(result.data);
      return result.data

   } catch (error) {
      console.error('Erro ao criar novo deck!', error);
   }
}

module.exports = {novoDeck}
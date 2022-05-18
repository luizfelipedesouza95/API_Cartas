const { get } = require('axios')

async function devolverCartas(deck) {

    const deck_id = deck.deck_id

    const URL_DEVOLVE_CARTAS = `https://deckofcardsapi.com/api/deck/${deck_id}/return/`

   try {
      console.log("Cartas devolvidas!")
      const result = await get(URL_DEVOLVE_CARTAS)
      //console.log(result.data);
      return result.data

   } catch (error) {
      console.error('Erro ao devolver cartas!', error);
   }
}

module.exports = {devolverCartas}
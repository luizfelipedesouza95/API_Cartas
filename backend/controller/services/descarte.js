//DESCARTA ALGUMA CARTA QUE FOI TIRADA DO DECK
const { get } = require('axios')

async function descartarCartas(deck) {

    const deck_id = deck.deck_id

    const URL_DESCARTE_CARTAS = `https://deckofcardsapi.com/api/deck/${deck_id}/pile/descarte/add/?cards=6S`


   try {
      console.log("Cartas descartadas!")
      const result = await get(URL_DESCARTE_CARTAS)
      //console.log(result.data);
      return result.data

   } catch (error) {
      console.error('Erro ao descartar cartas!', error);
   }
}

module.exports = {descartarCartas}
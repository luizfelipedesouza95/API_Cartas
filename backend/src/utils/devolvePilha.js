//DEVOLVE AS CARTAS DA PILHA AO DECK
const { get } = require('axios')

async function devolvePilha(deck) {

    const deck_id = deck.deck_id

    const URL_DEV_PILHA = `https://deckofcardsapi.com/api/deck/${deck_id}/pile/descarte/return/`


   try {
      console.log("Cartas da pilha devolvidas ao deck!")
      const result = await get(URL_DEV_PILHA)
      //console.log(result.data);
      return result.data

   } catch (error) {
      console.error('Erro ao devolver cartas ao deck!', error);
   }
}

module.exports = {devolvePilha}
//EMBARALHA A PILHA DE CARTAS DESCARTADAS DO DECK
const { get } = require('axios')

async function embaralharPilha(deck) {

    const deck_id = deck.deck_id

    const URL_EMB_PILHA = `https://deckofcardsapi.com/api/deck/${deck_id}/pile/descarte/shuffle/`


   try {
      console.log("Pilha embaralhada!")
      const result = await get(URL_EMB_PILHA)
      //console.log(result.data);
      return result.data

   } catch (error) {
      console.error('Erro ao embaralhar pilha!', error);
   }
}

module.exports = {embaralharPilha}
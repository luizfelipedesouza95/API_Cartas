//CRIA UMA PILHA DE DESCARTE
const { get } = require('axios')

async function listarPilha(deck) {

    const deck_id = deck.deck_id

    const URL_LISTAR_PILHA = `https://deckofcardsapi.com/api/deck/${deck_id}/pile/descarte/list/`

   try {
      console.log("Mostrando cartas da pilha!")
      const result = await get(URL_LISTAR_PILHA)
      //console.log(result.data);
      return result.data

   } catch (error) {
      console.error('Erro ao listar pilha!', error);
   }
}

module.exports = {listarPilha}
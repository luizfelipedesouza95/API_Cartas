const { get } = require('axios')

async function reembaralharCartas(deck) {

    const deck_id = deck.deck_id

    const URL_EMB_CARTAS = (`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/?remaining=true`)

    try {
        console.log("Cartas embaralhadas!")
        const resultEmbCartas = await get(URL_EMB_CARTAS)
        //console.log(result.data);
        return resultEmbCartas.data

    } catch (error) {
        console.error('Erro ao reembaralhar cartas!', error);
    }
}

module.exports = { reembaralharCartas }
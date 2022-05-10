const { get } = require('axios')

async function reembaralharCartas(deck) {

    const deck_id = deck.deck_id

    try {
        console.log("Cartas embaralhadas!")
        const url_reembaralharCartas = (`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/?remaining=true`)
        const resultReembaralharCartas = await get(url_reembaralharCartas)

        return resultReembaralharCartas.data

    } catch (error) {
        console.error('Erro ao reembaralhar cartas!', error);
    }
}

module.exports = { reembaralharCartas }
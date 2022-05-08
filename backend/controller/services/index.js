const { get } = require('axios')

async function retirarCarta(deck_id, numCartas) {
    try {        
        const url_tirarCartas = (`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCartas}`)

        const resultCartas = await get(url_tirarCartas)
        //return resultCartas
        console.log(resultCartas.data)

        reembaralharCartas(resultCartas.data.deck_id)

    } catch (error) {
        console.error('Deu erro ao tirar cartas!', error);
    }
}

async function reembaralharCartas(deck_id) {
    try {
       
        const url_reembaralharCartas = (`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/?remaining=true`)

        const resultReembaralharCartas = await get(url_reembaralharCartas)
        console.log(resultReembaralharCartas.data)
        //return resultReembaralharCartas

    } catch (error) {
        console.error('Deu erro ao reembaralhar cartas!', error);
    }
}

module.exports = { retirarCarta, reembaralharCartas }
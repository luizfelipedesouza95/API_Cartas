const { get } = require('axios')

async function retirarCarta(tireCartas) {

    const numCartas = tireCartas.numCartas
    const deck_id = tireCartas.deck_id
    
    try {
        console.log(`${numCartas} cartas tiradas!`)
        const url_tirarCartas = (`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCartas}`)
        const resultCartas = await get(url_tirarCartas)
        
        return resultCartas.data

    } catch (error) {
        console.error('Erro ao tirar cartas!', error);
    }
}

module.exports = { retirarCarta }
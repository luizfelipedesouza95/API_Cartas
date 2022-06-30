//TIRA UMA QUANTIDADE DE CARTAS DO DECK
const { get } = require('axios')

async function retirarCarta(tireCartas) {

    const numCartas = tireCartas.numCartas
    const deck_id = tireCartas.deck_id
    
    const URL_TIRAR_CARTAS = (`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCartas}`)

    try {
        console.log(`${numCartas} cartas tiradas do deck!`)
        const resultCartas = await get(URL_TIRAR_CARTAS)
        //console.log(result.data);
        return resultCartas.data

    } catch (error) {
        console.error('Erro ao tirar cartas do deck!', error);
    }
}

module.exports = { retirarCarta }
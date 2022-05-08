//const axios = require('axios');
//const index = require('./../backend/controller/services/index');
const { get } = require('axios')

const URL_NEW_DECK = `https://deckofcardsapi.com/api/deck/new/`

/* const URL_TIRAR_CARTAS = `https://deckofcardsapi.com/api/deck/${NEW_DECK}/draw/?count=2` */

const numCartas = 3

async function novoDeck() {

   try {
      const url_Deck = `${URL_NEW_DECK}`
      const result = await get(url_Deck)
      console.log(result.data)
      const DECK = result.data.deck_id
      //console.log(DECK);
      //console.log(JSON.stringify(DECK))

      const url_tirarCartas = `https://deckofcardsapi.com/api/deck/${DECK}/draw/?count=${numCartas}`
      
      const resultCartas = await get(url_tirarCartas)
      console.log(resultCartas.data)

   } catch (error) {
      console.error('Deu erro!', error);
   }
   
}

novoDeck()

/* 
tirarCartas()

async function tirarCartas() {

   const tirar_Cartas = await axios.get(`https://deckofcardsapi.com/api/deck/${NEW_DECK}/draw/?count=2`)
   const results = tirar_Cartas.data

   console.log(results);

} */



/* const { get } = require('axios'); */
const { retirarCarta } = require('./services/retirarCartas');

async function buscaImg(busca) {

   const busca = await retirarCarta.resultCartas

   try {

      console.log(busca)
/*       const result = await get(URL_API)
      const resposta = result.data.results
      const APIfiltrada = resposta.map(({ id, original_title, overview, poster_path, title, vote_average }) => { return { id, original_title, overview, poster_path, title, vote_average } });
      return APIfiltrada */

   } catch (error) {
      console.error('Erro ao buscar dados!', error);
   }
}

buscaImg()
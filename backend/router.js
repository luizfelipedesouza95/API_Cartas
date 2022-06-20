const express = require("express");
const router = express.Router();

const newDeck = require("./controller/services/novoDeck");
const tirarCarta = require("./controller/services/retirarCartas")
const embCartas = require("./controller/services/embaralhar")
const devCartas = require("./controller/services/devolverCartas")
const descCartas = require("./controller/services/descarte")
const embPilha = require("./controller/services/embPilha")
const devCartasPilha = require("./controller/services/devolvePilha")

//ROTA DA PAGINA INICIAL
router.get("/", (_, res) => {
    res.render("./pages/main", { body: './layouts/index.ejs' })
});

//ROTA PARA CRIAR UM NOVO DECK
router.get("/novoDeck", async (_, res) => {
    const dados = await newDeck.novoDeck()
    res.send(dados)
  });

  //ROTA PARA TIRAR CARTAS DO DECK
  router.get("/tirarCartas/:deck_id", async (req, res) => {
    const {deck_id} = req.params; // Path parameter
    const {numCartas} = req.query // Query parameter
   
    if (!deck_id || !numCartas) {
      return res.send(`Bad request`, 400)
    }
   
    const tireCartas = await tirarCarta.retirarCarta({
        numCartas,
        deck_id
    });
    res.send(tireCartas)
  });

  //ROTA PARA EMBARALHAR O DECK
  router.get("/embCartas/:deck_id", async (req, res) => {
    const {deck_id} = req.params
    const deck = await embCartas.reembaralharCartas({deck_id});
    res.send(deck);
  });

  //ROTA PARA DEVOLVER CARTAS AO DECK
  router.get("/devolverCartas/:deck_id", async (req, res) => {
    const {deck_id} = req.params;
    const cartasDev = await devCartas.devolverCartas({deck_id});
    res.send(cartasDev);
  })

  //ROTA PARA DESCARTAR CARTAS
  router.get("/descartarCartas/:deck_id", async (req, res) => {
    const {deck_id} = req.params;
    const descarteCartas = await descCartas.descartarCartas({deck_id});
    res.send(descarteCartas);
  })
  
  //ROTA PARA EMBARALHAR PILHA
  router.get("/embPilha/:deck_id", async (req, res) => {
    const {deck_id} = req.params;
    const pilhaEmb = await embPilha.embaralharPilha({deck_id});
    res.send(pilhaEmb);
  })
  
  //ROTA PARA DEVOLVER CARTAS DA PILHA AO DECK
  router.get("/devolvePilha/:deck_id", async (req, res) => {
    const {deck_id} = req.params;
    const devPilha = await devCartasPilha.devolvePilha({deck_id});
    res.send(devPilha);
  })

module.exports = router;
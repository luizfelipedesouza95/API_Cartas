const express = require("express");
const router = express.Router();

const newDeck = require("./controller/services/novoDeck");
const tirarCarta = require("./controller/services/retirarCartas")
const embCartas = require("./controller/services/embaralhar")
const devCartas = require("./controller/services/devolverCartas")
const descCartas = require("./controller/services/descartarCarta")
const embPilha = require("./controller/services/embPilha")
const devCartasPilha = require("./controller/services/devolvePilha")
const listarPilha = require("./controller/services/listarPilha")

const deck = [
  "qetxpqsuy6ld"
]

/* async function imgCartas(req, res, next) {

  const IMG_CARTA = `https://deckofcardsapi.com/static/img/`

  if (!IMG_CARTA) {
    return res.status(400).json({ error: "Erro ao encontrar imagem!" });
  }

  req.IMG_CARTA = IMG_CARTA;

  return next();

} */

async function verifyDeck(req, res, next) {

  const deck_id = await deck

  if (!deck_id) {
    return res.status(400).json({ error: "Deck_Id not found" });
  }

  req.deck_id = deck_id;

  return next();

}

//ROTA DA PAGINA INICIAL
router.get("/", (_, res) => {
  res.render("./pages/main", { body: './layouts/index.ejs' })
});

//ROTA PARA CRIAR UM NOVO DECK
router.get("/novoDeck", async (_, res) => {
  const dados = await newDeck.novoDeck();

  const { deck_id } = dados;

  deck.push(
    deck_id
  )

  if ( !deck_id ) {
    return res.send(`Bad request`, 400)
  }

  return res.status(201).send(dados);

});

//ROTA PARA TIRAR CARTAS DO DECK
router.get("/tirarCartas", verifyDeck, async (req, res) => {

  const { deck_id } = await req;
  const { numCartas } = await req.query;

  if (!deck_id || !numCartas) {
    return res.send(`Bad request`, 400)
  }

  const tireCartas = await tirarCarta.retirarCarta({
    numCartas,
    deck_id
  });

  return res.status(200).send(tireCartas)

});

//ROTA PARA EMBARALHAR O DECK
router.get("/embCartas", verifyDeck, async (req, res) => {
  const { deck_id } = req;

  if ( !deck_id ) {
    return res.send(`Bad request`, 400)
  }

  const deck = await embCartas.reembaralharCartas({ deck_id });

  return res.status(200).send(deck)
});

//ROTA PARA DEVOLVER CARTAS AO DECK
router.get("/devolverCartas", verifyDeck, async (req, res) => {
  const { deck_id } = req;

    if ( !deck_id ) {
    return res.send(`Bad request`, 400)
  }

  const cartasDev = await devCartas.devolverCartas({ deck_id });

  return res.status(200).send(cartasDev)
})

//ROTA PARA DESCARTAR CARTAS
router.get("/descartarCartas", verifyDeck, async (req, res) => {
  const { carta } = await req.query;
  const { deck_id } = req;

  if ( !deck_id || !carta ) {
    return res.send(`Bad request`, 400)
  }

  const descarteCartas = await descCartas.descartarCartas({
    deck_id,
    carta
  });

  return res.status(200).send(descarteCartas)
})

//ROTA PARA EMBARALHAR PILHA
router.get("/embPilha", verifyDeck, async (req, res) => {
  const { deck_id } = req;

  if ( !deck_id ) {
    return res.send(`Bad request`, 400)
  }

  const pilhaEmb = await embPilha.embaralharPilha({ deck_id });
  return res.status(200).send(pilhaEmb)
})

//ROTA PARA DEVOLVER CARTAS DA PILHA AO DECK
router.get("/devolvePilha", verifyDeck, async (req, res) => {
  const { deck_id } = req;

  if ( !deck_id ) {
    return res.send(`Bad request`, 400)
  }

  const devPilha = await devCartasPilha.devolvePilha({ deck_id });

  return res.status(200).send(devPilha)
})

//ROTA PARA LISTAR PILHA
router.get("/listarPilha", verifyDeck, async (req, res) => {
  const { deck_id } = req;

  if ( !deck_id ) {
    return res.send(`Bad request`, 400)
  }

  const listPilha = await listarPilha.listarPilha({ deck_id });

  return res.status(200).send(listPilha)
})

module.exports = router;
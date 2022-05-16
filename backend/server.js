const express = require("express")
const app = express()
const newDeck = require("./controller/services/novoDeck")
const tirarCarta = require("./controller/services/retirarCartas")
const embCartas = require("./controller/services/reembaralhar")
const devCartas = require("./controller/services/devolverCartas")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
const PORT = 3003;

//ROTA PARA CRIAR UM NOVO DECK
app.get("/novoDeck", async (req, res) => {
   const dados = await newDeck.novoDeck()
   res.send(dados)
  })

//ROTA PARA TIRAR CARTAS DO DECK
app.get("/tirarCartas", async (req, res) => {
    const tireCartas = await tirarCarta.retirarCarta({
      numCartas: req.body.numCartas,
      deck_id: req.body.id
  });
    res.send(tireCartas);
})

//ROTA PARA EMBARALHAR O DECK
app.get("/embCartas", async (req, res) => {
   const deck = await embCartas.reembaralharCartas({
     deck_id: req.body.id
 });
   res.send(deck);
})

//ROTA PARA DEVOLVER CARTAS AO DECK
app.get("/devolverCartas", async (req, res) => {
  const cartasDev = await devCartas.devolverCartas({
    deck_id: req.body.id
});
  res.send(cartasDev);
})

app.listen(PORT, () => { console.log(`SERVIDOR ONLINE --> http://localhost:${PORT}/`)
})
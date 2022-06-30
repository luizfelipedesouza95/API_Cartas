require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path');
const bodyParser = require("body-parser")
const routes = require("./router.js");
const PORT = process.env.ROTA

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../frontend/src'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors());
  next();
})

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(routes);

app.listen(PORT, () => {
  console.log(`SERVIDOR ONLINE --> http://localhost:${PORT}/`)
  console.log('[HTTP] Listen => Press CTRL+C to stop it');
})
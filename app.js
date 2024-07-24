require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('client'))

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
res.send('<h1>Hola</h1>')
})


app.use("/api/products/", require('./routes/products'))

app.listen(port, () => {
  console.log(`Escuchando localhost:${port}`);
});

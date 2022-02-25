const express = require('express')

const app = express();

require('./database');

app.use(require('./routes/index.routes'))

app.listen(3000);
console.log('Server on port:', 3000)

const frutas = ["banana", "banana", "pera", "banana"];

frutas.forEach((fruta) => {
  console.count(fruta);
});
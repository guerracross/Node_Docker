const express = require('express')

const app = express();

require('./database');

app.use(require('./routes/index.routes'))

export const PUERTO_LOCAL = process.env['LOCAL_PORT'];
app.set('PORT', process.env.PORT || PUERTO_LOCAL);

app.listen(app.get('PORT'));
console.log('Server on port:', app.get('PORT'))

const frutas = ["banana", "banana", "pera", "banana"];

frutas.forEach((fruta) => {
  console.count(fruta);
});
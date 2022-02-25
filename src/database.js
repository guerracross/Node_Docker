const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase')
.then(db => console.log('Conectado a la BD :',db.connection.host))
.catch(err => console.err(err));
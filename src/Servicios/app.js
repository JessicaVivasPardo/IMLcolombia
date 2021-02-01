//Conector e inicializar el servidor
const express = require ('express');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');
const app = express();



app.use(bodyParser.json());
app.use('/api',serviceRoutes);


module.exports = app;
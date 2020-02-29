const express = require('express');
const { PORT, MONGO_URL } = require('config');
const mongoose = require('mongoose');

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const horoRoutes = require('./lib/routes/horoRoutes');
const statementRoutes = require('./lib/routes/statementRoutes');

const app = express();

app.use(horoRoutes);
app.use(statementRoutes);

const listener = app.listen(PORT, () => console.log('Server started at ', listener.address().port));

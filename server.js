'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const File = require('./file.js');

const app = express();
app.use(cors());

app.get('/', handleHome);

function handleHome(req, res) {
  res.send('Hello World');
}

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

// import data file and save to mongoDB
app.get('/import', (request, response) => {
  File.importData(response);
}
)

app.listen(PORT, () => console.log(`listening on ${PORT}`));

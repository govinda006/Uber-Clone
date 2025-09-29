const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cosrs = require('cors');
const app = express();

app.use(cosrs());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


module.exports = app;
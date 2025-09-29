const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cosrs = require('cors');
const app = express();
const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
connectToDB();

app.use(cosrs());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);

module.exports = app;
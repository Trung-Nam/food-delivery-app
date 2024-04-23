const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT || port, () => console.log(`Foodly backend app listen on port ${process.env.PORT}!`));
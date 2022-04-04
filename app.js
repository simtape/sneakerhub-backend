require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sneakers = require('./routes/sneakers');

app.use('/sneakers', sneakers);

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, async()=>{
    console.log('connected')
});

app.listen(process.env.PORT || 3000);

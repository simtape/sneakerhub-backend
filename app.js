require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sneakers = require('./routes/sneakers');
const user = require('./routes/users')
const cors = require('cors');

app.use(bodyParser.json());

app.use('/sneakers', sneakers);
app.use('/users', user);
app.use(cors())


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, async()=>{
    console.log('connected')
});

app.listen(process.env.PORT || 3000);

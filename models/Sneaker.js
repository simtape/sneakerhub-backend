const mongoose = require('mongoose');

const Sneaker = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    retail: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Sneaker', Sneaker);
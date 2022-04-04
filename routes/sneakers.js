const express = require('express');
const router = express.Router();
const Sneaker = require('../models/Sneaker');

//endpoints
router.get('/allshoes', async (req, res) => {
    try {
        const sneakers = await Sneaker.find();
        res.json({ sneakers });
        console.log(sneakers);

    } catch (err) {
        console.log(res.body);
        res.json({ message: err });

    }
});

router.post('/insshoes',  async(req, res) => {
    const sneaker = new Sneaker({
        name: req.body.name,
        retail: req.body.retail

    });
    try {
        const savedSneaker = await sneaker.save();
        res.json(savedSneaker);

    } catch(err) {
        console.log(err)
        res.json({ message: err });

    }


});


module.exports = router;


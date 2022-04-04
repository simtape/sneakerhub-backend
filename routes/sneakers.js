const express = require('express');
const router = express.Router();
const Sneaker = require('../models/Sneaker');

//endpoints
router.get('/allshoes', async (req, res) => {
    try {
        const sneakers = await (await Sneaker.find()).sort({ name: 1 });
        res.json({ sneakers });
        console.log(sneakers);

    } catch (err) {
        console.log(res.body);
        res.json({ message: err });

    }
});

router.post('/insshoes', async (res, req) => {
    const sneaker = new Sneaker({
        name: req.body.name,
        retail: req.body.retail

    })

    try {
        const savedSneaker = await post.save();
        res.json(savedSneaker);

    } catch (err) {
        res.json({message: err});

    }
});


module.exports = router;


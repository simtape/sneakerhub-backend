const express = require('express');
const router = express.Router();
const User = require('../models/User');

//endpoints
router.post('/login', async (req, res) => {
    
    var email = req.body.email;
    var pw  = req.body.password;
    console.log(req.body)
    User.findOne({email: email})
        .then(user =>{
            if(user)
            {
                if(req.body.password == user.password){
                    res.json({
                        user
                    })
                }
                else{
                    res.json({
                        message: "Password sbagliata"
                    })
                }
            } else{
                res.json({
                    message: "Utente sbagliato"
                })
            }
        })
    try {

    } catch (err) {

    }
});

router.post('/sign-up', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        name : req.body.name,
        surname : req.body.surname,
        password: req.body.password,
      });
    try {
        user.save();

    } catch (err) {
        res.status(500).send({ message: err });

    }
});

module.exports = router;


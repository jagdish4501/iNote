const express = require('express')
const User = require('../Modell/User')
const rout = express.Router();
const { body, validationResult } = require('express-validator');
rout.get('/', [body('name').isLength({ min: 3 }), body('email').isEmail(), body('password').isLength({ min: 5 })], (req, res) => {
    const user = User(req.body);
    res.send(user);
    user.save();
    console.log(user);
})
module.exports = rout;
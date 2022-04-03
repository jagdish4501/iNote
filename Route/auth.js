const express = require('express')
const User = require('../Modell/User')
const rout = express.Router();
rout.get('/', (req, res) => {
    const user = User(req.body);
    res.send(user);
    user.save();
    console.log(user);
})
module.exports = rout;
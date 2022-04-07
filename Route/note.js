const express = require('express')
const rout = express.Router();
const { body, validationResult } = require('express-validator');
rout.get('/', (req, res) => {
    const note = require('../Modell/Note')(req.body);
    note.save();
    res.send(note);
    console.log(note);
})
module.exports = rout;
const express = require('express')
const User = require('../Modell/User')
const rout = express.Router();
const { body, validationResult } = require('express-validator');
rout.get('/',
    [body('name', 'like : jagdish kumar').isLength({ min: 3 }), body('email', 'Example@gmail.com').isLength({ min: 3 }), body('password', '1234@#ab').isLength({ min: 3 })], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            const user = User(req.body);
            res.send(user);
            user.save();
            console.log(user);
        }
    }
)
module.exports = rout;
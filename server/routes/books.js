const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const validateToken = require('../middleware/validateJwtToken');

router.get('/', validateToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const book = {
            name: "The Fellowship of the Ring",
            genre: "Fantasy",
            author: "J.R.R Tolkien",
            price: 17.99,
        }

        return res.json(book)
    });
})

module.exports = router;
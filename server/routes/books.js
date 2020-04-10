const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Book = require('../models/Book');
const validateToken = require('../middleware/validateJwtToken');

router.get('/', validateToken, (req, res) => {
    jwt.verify(req.token, req.app.get('app_secret'), (err, user) => {
        if (err) {
            return res.sendStatus(401);
        }

        console.log(req.app.get('app_secret'))
        return res.json('test')
    });
});

// Get a specific book
router.get('/:id', validateToken, (req, res) => {
    jwt.verify(req.token, req.app.get('app_secret'), async (err, user) => {
        if (err) {
            return res.sendStatus(401);
        }

        const book = await Book.findOne({where: {id: req.params.id}});

        if (book === null) {
            return res.sendStatus(404);
        }

        return res.json(book)
    });
});

module.exports = router;
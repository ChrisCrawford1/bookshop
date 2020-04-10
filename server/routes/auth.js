const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
router.post('/register', async (req, res) => {
    const data = req.body;

    const userExists = await User.count()
        .then((count) => {
            return count > 0;
        });

    if (userExists) {
        return res.json({
            message: `User with the email ${data.email} already exists`
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = User.build({
            name: data.name,
            email: data.email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date()
        });


        newUser.save()
            .then(user => {
                return res.json(user);
            });

    } catch (err) {
        return res.json({
            error: err
        });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const data = req.body;

    const user = await User.findOne({
        where: {
            email: data.email
        }
    });

    if (user === null) {
        return res.status(404).json({
            error: 'No user could be found!'
        })
    }

    const passwordsMatch = await bcrypt.compare(data.password, user.password);

    if (passwordsMatch) {
        // set token to expire in 5 minutes
        const token = jwt.sign({user}, req.app.get('app_secret'), {expiresIn: '300s'});

        return res.json({
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            token: token
        }); 
    }

    return res.status(401).json({
        message: 'Invalid password!'
    })
});

module.exports = router;
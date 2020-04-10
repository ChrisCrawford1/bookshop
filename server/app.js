require('dotenv').config();

const express = require('express');
const app = express();
const db = require('./config/database');
const secret = require('./helpers/secret');

db.authenticate()
    .then(() => {
        console.log('Database Connected...');
    })
    .catch(err => {
        console.log(err);
    });

secret.then(res => app.set('app_secret', res));


/** Middlewares */
// Body Parser
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

app.use('/auth', require('./routes/auth'));
app.use('/books', require('./routes/books'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
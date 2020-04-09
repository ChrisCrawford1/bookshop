const express = require('express');
const app = express();
const db = require('./config/database');

db.authenticate()
    .then(() => {
        console.log('Database Connected...');
    })
    .catch(err => {
        console.log(err);
    });

/** Middlewares */
// Body Parser
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

app.use('/auth/', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
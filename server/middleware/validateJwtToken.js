const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const jwtToken = bearer[1];
        req.token = jwtToken;

        return next();
    }

    return res.sendStatus(401);
}

module.exports = verifyToken;

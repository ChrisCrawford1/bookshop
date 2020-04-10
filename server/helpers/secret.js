const bcrypt = require('bcryptjs');

const generateAppSecret = async () => {
    return await bcrypt.hash(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), 10);
}

module.exports = generateAppSecret();
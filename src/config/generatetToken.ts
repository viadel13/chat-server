const jwt = require('jsonwebtoken');

const TokenGenerate = (id: any) => {
    return jwt.sign({ id }, process.env.JWT_SECURE, {
        expiresIn: "30d"
    });
}

module.exports = TokenGenerate;

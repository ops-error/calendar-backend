const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;
const InvalidAuthError = require('../errors/invalid-auth.err');

module.exports = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.replace('Bearer ', '');
        console.log(jwt.verify(token, JWT_SECRET));
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch {
        next(new InvalidAuthError('Invalid auth token'));
    }
}
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const signin = (req, res, next) => {
    const { username, password } = req.body;

    User.findOne({ username }).select('+password')
    .orFail(next)
    .then((user) => Promise.all([user, bcrypt.compare(password, user.password)]))
    .then(([user, matched]) => {
        const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'super-secret-key', { expiresIn: '30d' })
        res.status(200).send({ token })
    })
    .catch(next);
}

const signup = (req, res, next) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10)
    .then((hash) => User.create({
        username, password: hash
    }))
    .then(() => res.send("Успешно"))
    .catch(next);
}

module.exports = {
    signin,
    signup
}
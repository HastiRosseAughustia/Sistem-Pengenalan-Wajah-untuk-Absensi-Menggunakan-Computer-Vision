const jwt = require('jsonwebtoken');
const keys = require('../config/keys'); // Menyesuaikan dengan lokasi file keys.js

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, keys.jwtSecret);
        req.user = decoded; // Menyimpan informasi pengguna yang terdecode ke dalam request object
        next(); // Melanjutkan ke middleware berikutnya atau rute yang diminta
    } catch (error) {
        res.status(400).send({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;


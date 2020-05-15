'use strict';

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).json({
        title: 'Hello Word',
        message: 'Aplicação Node.js rodadando.',
        version: '1.0.2'
    })
});

module.exports = route;
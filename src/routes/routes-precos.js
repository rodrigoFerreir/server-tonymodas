'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/precos-controllers');

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/preco', controller.getById);
router.get('/forvalues', controller.getByValor);


module.exports = router;
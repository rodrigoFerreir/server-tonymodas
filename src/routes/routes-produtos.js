'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtos-controllers');

router.post('/', controller.post);
router.get('/', controller.get);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/precos', controller.getPrecos);
router.post('/precos', controller.postPreco);


module.exports = router;
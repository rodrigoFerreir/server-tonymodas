'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/lotes-controllers');

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/referencia', controller.getForReferencia);
//router.put('/:id', controller.put);
//router.delete('/:id', controller.delete);


module.exports = router;
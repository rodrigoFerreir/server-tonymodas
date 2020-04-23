'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/precos-controllers');

router.post('/', controller.post);
router.get('/', controller.get);
//router.put('/:id', controller.put);
//router.delete('/:id', controller.delete);


module.exports = router;
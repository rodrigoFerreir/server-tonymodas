'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtos-controllers');

router.post('/', controller.post);
router.get('/', controller.getAll);
router.get('/produto', controller.getId);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientes-controllers');

router.post('/', controller.post);
router.post('/cadastro', controller.postCliente);
router.get('/', controller.getAll);
router.get('/cliente', controller.getById);
router.get('/clientecpf', controller.returnIdByCPF);
router.put('/', controller.put);
router.delete('/', controller.delete);


module.exports = router;
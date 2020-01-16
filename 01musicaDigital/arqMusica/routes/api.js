const express = require('express');
const router = express.Router();
const { listar, detalhes, tipos } = require('../controllers/obras');

router.get('/api/obras', listar);
router.get('/api/obras/:id', detalhes);
router.get('/api/tipos', tipos);

module.exports = router;
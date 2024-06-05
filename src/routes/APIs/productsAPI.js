const express = require('express');
let router = express.Router();

const productsApi = require('../../controllers/APIs/apiProducts');

router.get('/:id', productsApi.detail);

module.exports = router;
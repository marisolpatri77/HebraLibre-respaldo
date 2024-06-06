const express = require('express');
let router = express.Router();

const productApiController = require('../../controllers/APIs/apiProductos');

router.get('/', productApiController.list);
router.get('/:id', productApiController.detail);


module.exports = router;
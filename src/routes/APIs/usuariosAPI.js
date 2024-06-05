const express = require('express');
let router = express.Router();

const userApiController = require('../../controllers/APIs/apiUsuarios');

router.get('/', userApiController.list);
router.get('/:id', userApiController.detail)    

module.exports = router;

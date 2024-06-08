const express = require('express');
let router = express.Router();

const categoryApiController = require('../../controllers/APIs/apiCategory');

router.get('/', categoryApiController.list);
    

module.exports = router;
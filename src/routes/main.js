const express = require('express');
let router = express.Router();

let controller = require("../controllers/main")

router.get('/', controller.home)

router.get('/contact', controller.contact)



module.exports = router
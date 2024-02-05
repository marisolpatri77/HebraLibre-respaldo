const express = require('express');
let router = express.Router();

let controllerUsuarios = require("../controllers/usuarios")

router.get('/register', controllerUsuarios.register)

router.get('/login', controllerUsuarios.login)




module.exports = router
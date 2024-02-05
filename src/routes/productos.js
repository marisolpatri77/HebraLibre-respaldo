const express = require('express');
let router = express.Router();

let controllerProductos = require("../controllers/productos")

router.get('/producto', controllerProductos.producto)

router.get('/carrito', controllerProductos.carrito)

router.get('/catalogo', controllerProductos.catalogo)

module.exports = router
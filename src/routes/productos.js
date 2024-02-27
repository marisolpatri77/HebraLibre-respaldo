const express = require('express');
let router = express.Router();

let controllerProductos = require("../controllers/productos")

//router.get('/producto', controllerProductos.producto)

router.get('/carrito', controllerProductos.carrito)
router.get('/producto/carrito', controllerProductos.carrito)

router.get('/catalogo', controllerProductos.catalogo)

router.get('/detalle/:id', controllerProductos.detalle)

router.get('/create', controllerProductos.create);
router.post('/create', controllerProductos.update);
router.get('/edit/:id', controllerProductos.edit)

module.exports = router
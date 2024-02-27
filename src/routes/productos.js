const express = require('express');
let router = express.Router();
const multer = require('multer');
const path = require('path');
let controllerProductos = require("../controllers/productos");

const storage = multer.diskStorage({

    destination : function(req, file, cb){
     
       // console.log("la data del archivo es destination " , file);
        let folder = path.join(__dirname, '../../public/img/');
        cb(null, folder);        
    },
    filename : function(req, file, cb){
       
        let ImageName = 'group-' + Date.now() + path.extname(file.originalname);
        cb(null, ImageName);
    }
});

 const fileUpload = multer({storage});

//router.get('/producto', controllerProductos.producto)

router.get('/carrito', controllerProductos.carrito)
router.get('/producto/carrito', controllerProductos.carrito)

router.get('/catalogo', controllerProductos.catalogo)

router.get('/detalle/:id', controllerProductos.detalle)


router.delete('/delete/:id' , controllerProductos.delete);
router.get('/create', controllerProductos.create);
router.post('/create',fileUpload.single('img'), controllerProductos.update);
router.get('/edit/:id', controllerProductos.edit)

module.exports = router
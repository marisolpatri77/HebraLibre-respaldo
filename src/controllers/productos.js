
const data = require('../Models/productos.json');


const controllerProductos = {
   
    carrito: (req, res) =>{
        res.render('carrito',{data});
    },
    catalogo: (req, res) =>{
        res.render('catalogo',{data:data});
    },
    
   detalle: (req, res) =>{

    let idProducto= req.params.id;
    let idBuscado= data.find(indice=>indice.id === idProducto);
   
        res.render('producto',{idBuscado});
    }

}

module.exports = controllerProductos



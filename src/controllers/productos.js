
const data = require('../Models/productos.json');


const controllerProductos = {
   
    carrito: (req, res) =>{
        res.render('carrito',{data});
    },
    catalogo: (req, res) =>{
        let visited = data.filter(indice=>indice.category === "visited");     
         let inSale = data.filter(indice=>indice.category === "in-sale");
         res.render('catalogo',{visited : visited , inSale: inSale});
    },
    
   detalle: (req, res) =>{

    let idProducto= req.params.id;
    let idBuscado= data.find(indice=>indice.id === idProducto);
   
        res.render('producto',{idBuscado});
    }

}

module.exports = controllerProductos



const fs = require('fs');
const data = require('../Models/productos.json');
const path = require('path');

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
    },

    create: (req, res) =>{

        res.render('formAltaProducto')
    }, 

    update: (req, res)=>{  

        let nuevoId = data.at(-1).id+1;

        let nuevoProducto = {
            id: nuevoId,
            price: req.body.price,
            descuont: req.body.descuont,
            title: req.body.title,
            descripcion: req.body.descripcion
        }

        data.push(nuevoProducto);
        fs.writeFileSync(
            path.join(__dirname, '../Models/productos.json'),
            JSON.stringify(data, null, 4),
            {
                encoding: 'utf-8'
            }
        )
       res.redirect('/productos/catalogo');
    }
}

module.exports = controllerProductos



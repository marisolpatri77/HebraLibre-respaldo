const fs = require('fs');
const data = require('../Models/productos.json');
const path = require('path');

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
    },

    edit: (req, res) =>{

        let idProducto= req.params.id;
        let idBuscado= data.find(indice=>indice.id === idProducto);
       
            res.render('formEdicionProducto',{idBuscado});
        },

    create: (req, res) =>{

        res.render('formAltaProducto')
    }, 

    update: (req, res)=>{  

        let nuevoId = data.at(-1).id+1;

        let nuevoProducto = {
            id: nuevoId,
            img: req.file.filename,
            price: req.body.price,
            category: req.body.category,
            descuont: req.body.descuont,
            title: req.body.title,
            descripcion: req.body.descripcion
            
        }
  console.log(nuevoProducto);
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



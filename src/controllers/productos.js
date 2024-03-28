const fs = require('fs');
const data = require('../Models/productos.json');
const path = require('path');
const productPath = path.join(__dirname, '../Models/productos.json');

const { validationResult } = require('express-validator')


const controllerProductos = {
   
    carrito: (req, res) =>{
        res.render('carrito',{data});
    },
    generateId:()=>{
       
        let lastUser = data[data.length - 1];
        if(lastUser){
            let nextId = parseInt(lastUser.id, 10) + 1;
        return nextId; 
        }
        return 1;
    },
    catalogo: (req, res) =>{
        let visited = data.filter(indice=>indice.category === "visited");     
         let inSale = data.filter(indice=>indice.category === "in-sale");
         res.render('catalogo',{visited : visited , inSale: inSale});
    },
    
   detalle: (req, res) =>{

    let idProducto= req.params.id;
    let idBuscado= data.find(indice=>indice.id === idProducto);
    let color= data.filter(indice=>indice.colors === idBuscado.colors && indice.id !== idBuscado.id);
    console.log(color)
   
        res.render('producto',{idBuscado,color});
    },

    edit: (req, res) =>{

        let idProducto= req.params.id;
        let idBuscado= data.find(indice=>indice.id === idProducto);
       
            res.render('formEdicionProducto',{idBuscado});
        },
    create: (req, res) =>{

        res.render('formAltaProducto')
    }, 
    store: (req, res)=>{  

         //Validacion en producto prueba
        
         let errors = validationResult(req);

         if (errors.isEmpty()) {
            let nuevoId = controllerProductos.generateId().toString();
            let nuevoProducto = {
                id: nuevoId,
                img: req.file.filename,
                price: req.body.price,
                category: req.body.category,
                colors: req.body.colors,
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

        } else {
            
            /*console.log('Errores de validación:', errors.array());
            console.log('Datos antiguos:', req.body);*/

            res.render('formAltaProducto', {
                errors : errors.mapped(),
                oldData: req.body,
                idBuscado : req.body
            });

        } 
    },

    update: (req, res) => {
        let errors = validationResult(req);
        let idProducto = req.params.id;
        let idBuscado = data.find(indice => indice.id === idProducto);

        if (errors.isEmpty()) {
            let id = req.params.id;
            let {price, category, title, descripcion} = req.body;
            data.forEach(prod =>{
                if (prod.id == id) {
                    prod.img = req.file.filename;
                    prod.price = price;
                    prod.category = category;
                    prod.title = title;
                    prod.descripcion = descripcion;
                }
            });
            fs.writeFileSync(
                path.join(__dirname, '../Models/productos.json'),
                JSON.stringify(data, null, 4),
                {
                    encoding: 'utf-8'
                }
            )
            res.redirect('/productos/catalogo');
            
        } else{

            res.render('formEdicionProducto', {
                errors: errors.mapped(),
                oldData: req.body,
                idBuscado: idBuscado 
            });

        }
       
    },

    delete: (req, res) =>{
        let idProduct= req.params.id
        let indexDelete= data.findIndex(product=> product.id === idProduct);
        data.splice(indexDelete, 1);
        fs.writeFileSync(productPath, JSON.stringify(data, null, 2));
console.log(idProduct);
        return res.redirect('/productos/catalogo');
    }
}

module.exports = controllerProductos



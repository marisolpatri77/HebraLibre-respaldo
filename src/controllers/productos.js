const fs = require('fs');
const data = require('../Models/productos.json');
const path = require('path');
const productPath = path.join(__dirname, '../Models/productos.json');
const db = require('../database/models')

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
        // let visited = data.filter(indice=>indice.category === "visited");     
        //  let inSale = data.filter(indice=>indice.category === "in-sale");
        //  res.render('catalogo',{visited : visited , inSale: inSale});
        db.Product.findAll()
        .then(function(productos){
            return res.render('catalogo', {productos: productos})
        })
    },
    
   detalle: (req, res) =>{
    // let idProducto= req.params.id;
    // let idBuscado= data.find(indice=>indice.id === idProducto);
    // let color= data.filter(indice=>indice.colors === idBuscado.colors && indice.id !== idBuscado.id);  
    //     res.render('producto',{idBuscado,color});
    db.Product.findByPk(req.params.id, {
        include: [{association: "Category"}]
    })
    .then(function(producto){
        res.render('producto', {producto: producto})
    })
    },

    edit: (req, res) =>{
        // let idProducto= req.params.id;
        // let idBuscado= data.find(indice=>indice.id === idProducto);
        //     res.render('formEdicionProducto',{idBuscado});
        let pedidoProducto = db.Product.findByPk(req.params.id);
        let pedidoCategory = db.Category.findAll();
        Promise.all([pedidoProducto, pedidoCategory])
        .then(function([producto, categorias]) {
            res.render('formEdicionProducto', {producto: producto, categorias: categorias});
        })
    },
    create: (req, res) =>{
        db.Category.findAll()
        .then(function(categorias){
            res.render('formAltaProducto', {categorias: categorias})
        })
    }, 
    store: (req, res)=>{  
    //     let nuevoId = controllerProductos.generateId().toString();
    //     let nuevoProducto = {
    //         id: nuevoId,
    //         img: req.file.filename,
    //         price: req.body.price,
    //         category: req.body.category,
    //         colors: req.body.colors,
    //         descuont: req.body.descuont,
    //         title: req.body.title,
    //         descripcion: req.body.descripcion           
    //     }

    //     data.push(nuevoProducto);
    //     fs.writeFileSync(
    //         path.join(__dirname, '../Models/productos.json'),
    //         JSON.stringify(data, null, 4),
    //         {
    //             encoding: 'utf-8'
    //         }
    //     )
    //    res.redirect('/productos/catalogo');
        db.Product.create({
            title: req.body.title,
            description: req.body.descripcion,
            img: req.file.filename,
            categories_id: req.body.category,
            price: req.body.price,
            colors: req.body.colors,
            discount: req.body.discount
        })
        res.redirect('/productos/catalogo')
    },

    update: (req, res) => {
        // let id = req.params.id;
        // let {price, category, title, descripcion} = req.body;
        // data.forEach(prod =>{
        //     if (prod.id == id) {
        //         prod.img = req.file.filename;
        //         prod.price = price;
        //         prod.category = category;
        //         prod.title = title;
        //         prod.descripcion = descripcion;
        //     }
        // });
        // fs.writeFileSync(
        //     path.join(__dirname, '../Models/productos.json'),
        //     JSON.stringify(data, null, 4),
        //     {
        //         encoding: 'utf-8'
        //     }
        // )
        // res.redirect('/productos/catalogo');
        db.Product.update({
            title: req.body.title,
            description: req.body.descripcion,
            img: req.file.filename,
            category: req.body.category,
            price: req.body.price,
            colors: req.body.colors,
            discount: req.body.descount
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/productos/detalle/' + req.params.id)
    },

    delete: (req, res) =>{
        // let idProduct= req.params.id
        // let indexDelete= data.findIndex(product=> product.id === idProduct);
        // data.splice(indexDelete, 1);
        // fs.writeFileSync(productPath, JSON.stringify(data, null, 2));
        // console.log(idProduct);
        // return res.redirect('/productos/catalogo');
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/productos/catalogo')
    }
}

module.exports = controllerProductos



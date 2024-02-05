const controllerProductos = {
    producto: (req, res) =>{
        res.render('producto');
    },
    carrito: (req, res) =>{
        res.render('carrito');
    },
    catalogo: (req, res) =>{
        res.render('catalogo');
    }
}

module.exports = controllerProductos
const db = require('../../database/models');


const controllerAPIProductos = {
       
    list:async(req, res) => {
        try {
            const products = await db.Product.findAll({include:['Category']})
            const response = {
                products,
                status: 200,
                count: products.length
            }
            res.send(response)
        } catch (error) {
            res.status(500).send(error)
        } 
           
    },
    detail:async(req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id,{include:['Category']})
            const response = {
                product,
                status: 200,
                
            }
            res.send(response)
        } catch (error) {
            res.status(500).send(error)
        } 
           
    }
}
    
module.exports = controllerAPIProductos
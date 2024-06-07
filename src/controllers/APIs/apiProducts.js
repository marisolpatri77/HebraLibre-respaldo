const db = require('../../database/models');

const controllerAPIProduct = {        
    detail:async(req, res) =>{
        try {
            const product= await db.Product.findByPk(req.params.id,{include:['Category'],attributes:{exclude:['password']}})
            
            if(!product){
                return res.status(400).json({error:"Producto no encontrado"})
            }                   
                return res.status(200).json({
                    title: product.title,
                    price: product.price,
                    color: product.color,
                    url:`${req.protocol}://${req.get('host')}${req.baseUrl}/${product.img}`,   
                    relacion:[{id_category: product.categories_id}],               
                    status: 200,               
                })
                          
        } catch (error) {
            res.status(500).send(error)
        } 
    }
}
    
module.exports = controllerAPIProduct
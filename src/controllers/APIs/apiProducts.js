const db = require('../../database/models');

const controllerAPIProduct = {
    list: async (req, res) => {
        try {
            const products = await db.Product.findAll({ include: ['Category'] });
            const countByCategory = {};
            products.forEach(product => {
                const categoryName = product.Category.name;
                if (countByCategory[categoryName]) {
                    countByCategory[categoryName]++;
                } else {
                    countByCategory[categoryName] = 1;
                }
            });

            const response = {
                count: products.length,
                countByCategory,
                products: products.map(product => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    categories: product.categories,
                    detail: `${req.protocol}://${req.get('host')}${req.baseUrl}/${product.id}`
                })),
                status: 200

            };

            res.json(response)
        } catch (error) {
            console.error("Error al obtener la lista de productos", error);
            res.status(500).json({error: "No se pudo obtener la lista de productos"});
        }

    },
    detail: async (req, res) => {
        try {
            const product= await db.Product.findByPk(req.params.id,{include:['Category'],attributes:{exclude:['password']}})
            
            if(!product){
                return res.status(400).json({error:"Producto no encontrado"})
            }                   
                return res.status(200).json({
                    title: product.title,
                    price: product.price,
                    color: product.color,
                    url: `${req.protocol}://${req.get('host')}${req.baseUrl}/${product.img}`,   
                    relacion:[{id_category: product.categories_id}],               
                    status: 200,               
                })
                          
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

module.exports = controllerAPIProduct
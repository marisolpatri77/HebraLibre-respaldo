const db = require('../../database/models');


const controllerAPICategories = {
       
    list:async(req, res) => {
        try {
            const categories = await db.Category.findAll()
            const response = {
                categories,
                status: 200,
                count: categories.length
            }
            res.send(response)
        } catch (error) {
            res.status(500).send(error)
        }
    }}

module.exports = controllerAPICategories
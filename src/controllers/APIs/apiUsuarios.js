const db = require('../../database/models');


const controllerAPIUsuarios = {
       
    list:async(req, res) => {
        try {
            const users = await db.User.findAll({include:['Rol'],attributes:{exclude:['password']}})
            const usersWithImageUrl = users.map(user => {
                const userData = user.toJSON();
                userData.imageUrl = user.image ? `${req.protocol}://${req.get('host')}/img/${user.image}` : null; // Ajusta la ruta y la extensión según sea necesario
                return userData;
            });
            const response = {
                users: usersWithImageUrl,
                status: 200,
                count: users.length
            }
            res.send(response)
        } catch (error) {
            res.status(500).send(error)
        } 
           
    },
    detail:async(req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id,{include:['Rol'],attributes:{exclude:['password']}})
            const response = {
                user,
                status: 200,
                
            }
            res.send(response)
        } catch (error) {
            res.status(500).send(error)
        } 
           
    }
}
    
module.exports = controllerAPIUsuarios
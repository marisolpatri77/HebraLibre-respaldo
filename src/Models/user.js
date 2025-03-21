const fs =require('fs');
const { all } = require('../routes/usuarios');
const { log } = require('console');


const user = {
    fileName: "./src/Models/users.json",
   
   getData: function(){
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
   },
   generateId: function(){
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser){
    return lastUser.id + 1;
   }
   return 1;
},

   findAll: function(){
    return this.getData();
   },
//Buscar a un usuario por su ID
   findByPk: function(id){
    let allUsers= this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id === id);
    return userFound;
   },
//Buscar un usuario por cualquier campo
   findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
   },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
    }

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

// console.log(user.findByField('email', 'agustincastellon06@gmail.com'));
module.exports = user;
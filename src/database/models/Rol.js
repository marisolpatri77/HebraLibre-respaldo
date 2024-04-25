module.exports = (sequelize, DataTypes) => {
    let alias = "Rol" //llamando al modelo
       let cols = {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
         },
         name: {
           type: DataTypes.STRING,
           allowNull: false
         },
         description: {
           type: DataTypes.STRING,
           allowNull: false
         }
    }
   let config= {
       tableName:"roles",
       timestamps: false,
   }
   //falta las relaciones//
   const Rol = sequelize.define(alias, cols, config)
   //escribir aca las relaciones//
   Rol.associate=function(models){
    Rol.hasMany(models.User, {
        as: "User",
        foreignKey:"roles_id"
    })
   }
     return Rol;
   };
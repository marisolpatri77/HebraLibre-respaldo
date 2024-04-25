const { BelongsTo } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
 let alias = "User" //llamando al modelo
    let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roles_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      }
 }
let config= {
    tableName:"users",
    timestamps: false,
}
//falta las relaciones//
const User = sequelize.define(alias, cols, config)
//escribir aca las relaciones//
User.associate = function(models){
    User.belongsTo(models.Rol, {
        as: "Rol",
        foreignKey: "roles_id" //indicas a través de que columna se utiliza como clave foranea para hacer una consulta a la tabla de roles
    })
}
  return User;
};
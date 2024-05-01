module.exports = (sequelize, DataTypes) => {
    let alias = "Category" //llamando al modelo
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
       tableName:"categories",
       timestamps: false,
   };
  //falta las relaciones//
  const Category = sequelize.define(alias, cols, config)
  //escribir aca las relaciones//
  Category.associate=function(models){
  Category.hasMany(models.Product, {
         as: "products",
         foreignKey:"categories_id"
     })
    }
     return Category;
   };
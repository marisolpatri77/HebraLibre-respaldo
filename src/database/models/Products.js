module.exports = (sequelize, DataTypes) => {
    let alias = "Products" //llamando al modelo
       let cols = {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
         },
         title: {
           type: DataTypes.STRING,
           allowNull: false
         },
         description: {
           type: DataTypes.STRING,
           allowNull: false
         },
         img: {
            type: DataTypes.STRING,
            allowNull: false
          },
          price: {
            type: DataTypes.STRING,
            allowNull: false
          },
          categories_id: {
            type: DataTypes.STRING,
            allowNull: false
          },
          colors: {
            type: DataTypes.STRING,
            allowNull: false
          },
          discount: {
            type: DataTypes.STRING,
            allowNull: false
          }
    }
   let config= {
       tableName:"products",
       timestamps: false,
   }
   //falta las relaciones//
   const Products = sequelize.define(alias, cols, config)
   //escribir aca las relaciones//
   Products.associate=function(models){
    Products.hasMany(models.User, {
        as: "User",
        foreignKey:"categories_id"
    })
   }
     return Products;
   };
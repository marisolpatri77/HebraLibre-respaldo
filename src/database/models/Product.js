module.exports = (sequelize, DataTypes) => {
    let alias = "Product" //llamando al modelo
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
            type: DataTypes.DECIMAL(2,0),
            allowNull: false
          },
          categories_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          colors: {
            type: DataTypes.STRING,
            allowNull: false
          },
          discount: {
            type: DataTypes.DOUBLE,
            allowNull: false
          }
    }
   let config= {
       tableName:"products",
       timestamps: false,
   }
   //falta las relaciones//
   const Product = sequelize.define(alias, cols, config)
   //escribir aca las relaciones//
   Product.associate=function(models){
    Product.belongsTo(models.Category, {
        as: "Category",
        foreignKey:"categories_id"
    })
    Product.hasMany(models.OrderDetail, {
      as: "OrderDetail",
      foreignKey: "products_id"
    })
   }
     return Product;
   };
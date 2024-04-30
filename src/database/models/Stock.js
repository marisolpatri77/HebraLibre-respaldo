module.exports = (sequelize, DataTypes) => {
    let alias = "Stock" //llamando al modelo
       let cols = {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
         },
         products_id: {
           type: DataTypes.INTEGER,
           allowNull: false
         },
         quantity: {
           type: DataTypes.INTEGER,
           allowNull: false
         }
    }
   let config= {
       tableName:"stocks",
       timestamps: false,
   };
  //falta las relaciones//
  const Stock = sequelize.define(alias, cols, config)
  //escribir aca las relaciones//
  Stock.associate=function(models){
  Stock.belongsTo(models.Product, {
         as: "product",
         foreignKey:"products_id"
     })
    }
     return Stock;
   };
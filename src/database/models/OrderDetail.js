const { Sequelize } = require("sequelize");

module.exports = (sequelize, Datatypes) =>{
    let alias = 'OrderDetail'
    
    let cols = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orders_id:{
            type: Datatypes.INTEGER,
            allowNull: false
        },
        products_id:{
            type: Datatypes.INTEGER,
            allowNull: false
        },
        quantity:{
            type: Datatypes.INTEGER,
            allowNull: false
        },
        price:{
            type: Datatypes.DOUBLE,
            allowNull: false
        },
        discount:{
            type: Datatypes.DOUBLE,
            allowNull: false
        }
    }
    let config = {
        tableName:"orders_detail",
        timestamps: false
    }
    const OrderDetail = sequelize.define(alias, cols, config);

    OrderDetail.associate = function(models){
        OrderDetail.belongsTo(models.Order, {
            as: "Order",
            foreignKey: "orders_id"
        })
        OrderDetail.belongsTo(models.Product, {
            as: "Products",
            foreingKey: "products_id"
        })
    }
    return OrderDetail;
}
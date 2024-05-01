const { Sequelize } = require("sequelize");

module.exports = (sequelize, Datatypes) =>{
    let alias = 'Order'
    
    let cols = {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        users_id:{
            type: Datatypes.INTEGER,
            allowNull: false
        },
        order_date:{
            type: Datatypes.DATE,
            allowNull: false
        },
        payment_method:{
            type: Datatypes.STRING,
            allowNull: false
        },
        status:{
            type: Datatypes.STRING,
            allowNull: false
        },
        adress_order:{
            type: Datatypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName:"orders",
        timestamps: false
    }
    const Order = sequelize.define(alias, cols, config);

    Order.associate = function(models){
        Order.belongsTo(models.User, {
            as: "Order",
            foreignKey: "users_id"
        })
        Order.hasMany(models.OrderDetail, {
            as: "OrderDetail",
            foreignKey: "orders_id"
        })
    }
    return Order;
}
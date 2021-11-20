import Sequelize from "sequelize";

const orderModel = (sequelize) => {
    const order = sequelize.define("order", {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        product: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        deliveredAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return order;
}

export default orderModel;
import Sequelize from "sequelize";

const orderModel = (sequelize) => {
    const product = sequelize.define("order", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        trending: {
            type: Sequelize.BOOLEAN
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return product;
}

export default orderModel;
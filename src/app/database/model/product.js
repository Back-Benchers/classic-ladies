import Sequelize from "sequelize";

const productModel = (sequelize) => {
    const product = sequelize.define("product", {
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
            type: Sequelize.NUMBER,
            allowNull: false
        }
    });

    return product;
}

export default productModel;
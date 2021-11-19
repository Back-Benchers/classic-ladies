import Sequelize from "sequelize";

const productModel = (sequelize) => {
    const product = sequelize.define("product", {
        id: {
            type: Sequelize.UUID,
            allowNull: true
        },
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        metadata: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // manufractureDetail: {
        //     type: Sequelize.STRING,
        //     allowNull: false
        // },
        trending: {
            type: Sequelize.BOOLEAN
        },
        stockQuantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        soldQuantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        salePrice: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        sizes: {
            type: Sequelize.ARRAY,
            allowNull: false,
        },
        categories: {
            type: Sequelize.ARRAY,
            allowNull: false,
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });

    return product;
}

export default productModel;
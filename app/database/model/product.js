import Sequelize from "sequelize";

const productModel = (sequelize) => {
    const product = sequelize.define("product", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        url: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: true
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        metadata: {
            type: Sequelize.STRING,
            allowNull: true
        },
        // manufractureDetail: {
        //     type: Sequelize.STRING,
        //     allowNull: true
        // },
        trending: {
            type: Sequelize.BOOLEAN
        },
        stockQuantity: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        soldQuantity: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        salePrice: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        sizes: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: true,
        },
        categories: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: true,
        },
        rating: {
            type: Sequelize.FLOAT,
            allowNull: true,
        }
    });

    return product;
}

export default productModel;
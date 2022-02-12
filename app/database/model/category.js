import Sequelize from "sequelize";

const categoryModel = (sequelize) => {
    const category = sequelize.define("category", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });

    return category;
}

export default categoryModel;
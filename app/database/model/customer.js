import Sequelize from "sequelize";

const customerModel = (sequelize) => {
    const customer = sequelize.define("customer", {
        id: {
            type: Sequelize.UUID,
            allowNull: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.UUID,
            allowNull: false
        },
        number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING
        },
        adminStatus: {
            type: Sequelize.INTEGER
        }
    });

    return customer;
}

export default customerModel;
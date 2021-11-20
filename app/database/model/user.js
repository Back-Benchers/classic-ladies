import Sequelize from "sequelize";

const userModel = (sequelize) => {
    const user = sequelize.define("user", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            primarKey: true
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

    return user;
}

export default userModel;
import Sequelize from "sequelize";

const offerModel = (sequelize) => {
    const offer = sequelize.define("offer", {
        code: {
            type: Sequelize.STRING,
            allowNull: false,
            primarKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        expiry: {
            type: Sequelize.DATE
        },
        startDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        amount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        categories: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return offer;
}

export default offerModel;
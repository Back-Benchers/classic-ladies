import sequelize from "sequelize";
import dbConfig from "./config";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const product = sequelize.define("product", {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    trending: {
        type: Sequelize.BOOLEAN
    },
    amount: {
        type: Sequelize.NUMBER
    }
});

const table = {};

table.Sequelize = Sequelize;
table.sequelize = sequelize;

table.product = product;

export default table;
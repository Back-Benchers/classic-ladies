import Sequelize from "sequelize";
import config from "../config";

const sequelize = new Sequelize(config.dbConfig.DB, config.dbConfig.USER, config.dbConfig.PASSWORD, {
    host: config.dbConfig.HOST,
    port: config.dbConfig.PORT,
    dialect: config.dbConfig.dialect,

    pool: {
        max: config.dbConfig.pool.max,
        min: config.dbConfig.pool.min,
        acquire: config.dbConfig.pool.acquire,
        idle: config.dbConfig.pool.idle
    }
});

export default { sequelize };
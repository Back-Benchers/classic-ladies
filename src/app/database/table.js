import productModel from "./model/product";
import sequel from "./sequel";

const table = {};

table.sequelize = sequel.sequelize;

table.product = productModel(table.sequelize);

export default table;
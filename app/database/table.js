import orderModel from "./model/order";
import productModel from "./model/product";
import sequel from "./sequel";

const table = {};

table.sequelize = sequel.sequelize;

table.product = productModel(table.sequelize);
table.order = orderModel(table.sequelize);

export default table;
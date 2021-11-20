import categoryModel from "./model/category";
import offerModel from "./model/offer";
import orderModel from "./model/order";
import productModel from "./model/product";
import userModel from "./model/user";
import sequel from "./sequel";

const table = {};

table.sequelize = sequel.sequelize;

table.product = productModel(table.sequelize);
table.order = orderModel(table.sequelize);
table.offer = offerModel(table.sequelize);
table.user = userModel(table.sequelize);
table.category = categoryModel(table.sequelize);

export default table;
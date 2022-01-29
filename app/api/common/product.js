import product from "../../database/controller/product";

class ProductsRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get("/", this.testFunction.bind(this));
    this.router.get("/products", this.getProducts.bind(this));
    this.router.get("/product/:id", this.getProductsByid.bind(this));
  }

  getProducts(req, res, next) {
    product.findAll(req, res);
  }

  testFunction(req, res, next) {
    res.send("Test for Common routes \n Remove before prod");
  }
  getProductsByid(req, res, next) {
    product.findOne(req, res);
  }
}

export default ProductsRoute;

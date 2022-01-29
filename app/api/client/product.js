import product from "../../database/controller/product";

class ProductsRoute {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
      /*   this.router.get(
            '/v1/products',
            this.getProducts.bind(this)
        );*/
        this.router.post(
            '/v1/products',
            this.insertProducts.bind(this)
        );
    }

    /* getProducts(req, res, next) {
        product.findAll(req,res)
    } */
    insertProducts(req, res, next) {
//         product.createOne(req,res);
      res.send("Not Allowed");
    }
}

export default ProductsRoute;
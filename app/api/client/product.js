import product from "../../database/controller/product";

class ProductsRoute {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get(
            '/v1/products',
            this.getProducts.bind(this)
        );
        this.router.post(
            '/v1/products',
            this.insertProducts.bind(this)
        );
    }

    getProducts(req, res, next) {
        res.send('Get prod:client');
    }
    
    insertProducts(req, res, next) {
        // res.send('Insert prod:client');
        product.createOne(req, res);
    }
}

export default ProductsRoute;
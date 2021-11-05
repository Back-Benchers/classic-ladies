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
    }

    getProducts(req, res, next) {
        res.send('Hello prod:client');
    }
}

export default ProductsRoute;
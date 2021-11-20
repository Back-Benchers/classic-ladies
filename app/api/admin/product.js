import product from "../../database/controller/product";
import fileOp from "../../filesUtil/fileOperation";

class ProductsRoute {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get(
            '/v1/products/:id',
            // security.checkUserScope.bind(this, security.scope.READ_PRODUCTS),
            this.getProducts.bind(this)
        );

        this.router.post(
            '/v1/products',
            // security.checkUserScope.bind(this, security.scope.READ_PRODUCTS),
            this.postProducts.bind(this)
        );

        this.router.put(
            '/v1/products/:id',
            // security.checkUserScope.bind(this, security.scope.READ_PRODUCTS),
            this.postProducts.bind(this)
        );

        this.router.delete(
            '/v1/products/:id',
            // security.checkUserScope.bind(this, security.scope.READ_PRODUCTS),
            this.deleteProducts.bind(this)
        );

        this.router.post(
            '/v1/upload',
            // security.checkUserScope.bind(this, security.scope.WRITE_PRODUCTS),
            this.uploadImages.bind(this)
        );
    }

    getProducts(req, res, next) {
        product.findOne(req, res);
    }

    postProducts(req, res, next) {
        product.createOne(req, res);
    }

    updateProducts(req, res, next) {
        product.updateOne(req, res);
    }

    deleteProducts(req, res, next) {
        product.deleteOne(req, res);
    }

    uploadImages(req, res, next) {
        // fileOp.s3Upload(req,res);
        fileOp.upload(req, res, (err) => {
            if (err) {
                res.sendStatus(500);
            }
            res.send(req.file);
        });
    }
}

export default ProductsRoute;
import product from "../../database/controller/product";
import fileUpload from "../../filesUtil/fileUpload";
import upload from "../../filesUtil/fileUpload";

class ProductsRoute {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get(
            '/v1/products',
            // security.checkUserScope.bind(this, security.scope.READ_PRODUCTS),
            this.getProducts.bind(this)
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

    uploadImages(req, res, next) {
        // fileUpload.s3Upload(req,res);
        fileUpload.upload(req, res, (err) => {
            if (err) {
                res.sendStatus(500);
            }
            res.send(req.file);
        });
    }
}

export default ProductsRoute;
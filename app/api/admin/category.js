import category from "../../database/controller/category";
import fileOp from "../../filesUtil/fileOperation";

class CategoryRoute {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get(
            '/v1/category/:id',
            // security.checkUserScope.bind(this, security.scope.READ_CategoryS),
            this.getCategory.bind(this)
        );

        this.router.post(
            '/v1/category',
            // security.checkUserScope.bind(this, security.scope.READ_CategoryS),
            this.postCategory.bind(this)
        );

        this.router.put(
            '/v1/category/:id',
            // security.checkUserScope.bind(this, security.scope.READ_CategoryS),
            this.postCategory.bind(this)
        );

        this.router.delete(
            '/v1/category/:id',
            // security.checkUserScope.bind(this, security.scope.READ_CategoryS),
            this.deleteCategory.bind(this)
        );

        this.router.post(
            '/v1/upload',
            // security.checkUserScope.bind(this, security.scope.WRITE_CategoryS),
            this.uploadImages.bind(this)
        );
    }

    getCategory(req, res, next) {
        category.findOne(req, res);
    }

    postCategory(req, res, next) {
        category.createOne(req, res);
    }

    updateCategory(req, res, next) {
        category.updateOne(req, res);
    }

    deleteCategory(req, res, next) {
        category.deleteOne(req, res);
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

export default CategoryRoute;
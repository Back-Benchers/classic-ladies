import offer from "../../database/controller/offer";
import fileOp from "../../filesUtil/fileOperation";

class OffersRoute {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get(
            '/v1/offers/:id',
            // security.checkUserScope.bind(this, security.scope.READ_OfferS),
            this.getOffers.bind(this)
        );

        this.router.post(
            '/v1/offers',
            // security.checkUserScope.bind(this, security.scope.READ_OfferS),
            this.postOffers.bind(this)
        );

        this.router.put(
            '/v1/offers/:id',
            // security.checkUserScope.bind(this, security.scope.READ_OfferS),
            this.postOffers.bind(this)
        );

        this.router.delete(
            '/v1/offers/:id',
            // security.checkUserScope.bind(this, security.scope.READ_OfferS),
            this.deleteOffers.bind(this)
        );

        this.router.post(
            '/v1/upload',
            // security.checkUserScope.bind(this, security.scope.WRITE_OfferS),
            this.uploadImages.bind(this)
        );
    }

    getOffers(req, res, next) {
        offer.findOne(req, res);
    }

    postOffers(req, res, next) {
        offer.createOne(req, res);
    }

    updateOffers(req, res, next) {
        offer.updateOne(req, res);
    }

    deleteOffers(req, res, next) {
        offer.deleteOne(req, res);
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

export default OffersRoute;
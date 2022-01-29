import offer from "../../database/controller/offer";

class OffersRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
      this.router.get("/offers", this.getOffers.bind(this));
      this.router.get("/offer/:id", this.getOfferById.bind(this));
  }

  getOfferById(req, res, next) {
    offer.findOne(req, res);
  }
  getOffers(req, res, next) {
    offer.findAll(req, res);
  }
}

export default OffersRoute;

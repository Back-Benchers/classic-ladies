import category from "../../database/controller/category";

class CategoryRoute {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get("/category/:id", this.getCategoryById.bind(this));
    this.router.get("/categorys", this.getCategory.bind(this));
  }

  getCategoryById(req, res, next) {
    category.findOne(req, res);
  }

  getCategory(req, res, next) {
    category.findAll(req, res);
  }
}

export default CategoryRoute;

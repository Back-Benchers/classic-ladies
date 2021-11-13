import basicType from "../../structure/basic";

class ComponentRoutes {
    constructor(router) {
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get(
            '/v1/basic',
            this.getMenu.bind(this)
        );
    }

    getMenu(req, res, next) {
        res.send(basicType);
    }
}

export default ComponentRoutes;
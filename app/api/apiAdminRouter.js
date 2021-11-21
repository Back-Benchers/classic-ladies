import express from 'express';
import CategoryRoute from './admin/category';
import OffersRoute from './admin/offer';
import ProductsRoute from './admin/product';

const apiAdmin = express.Router();

new ProductsRoute(apiAdmin);
new OffersRoute(apiAdmin);
new CategoryRoute(apiAdmin);

export default apiAdmin;
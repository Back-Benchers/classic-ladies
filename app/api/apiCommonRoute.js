import express from 'express';
import ProductsRoute from './common/product';
import OffersRoute from './common/offer';

const apiCommon = express.Router();

new ProductsRoute(apiCommon);
new OffersRoute(apiCommon);

export default apiCommon;
import express from 'express';
import ComponentRoutes from './components/componentRoutes';

const component = express.Router();

new ComponentRoutes(component);

export default component;
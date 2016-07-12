import './products.less';
import ProductsController from './products.controller';
import hero from '../../components/hero';
import productCard from '../../components/product-card';
const module = angular.module('app.pages.products', [
    hero.name,
    productCard.name
]).controller(ProductsController.name, ProductsController);

export default module.name;

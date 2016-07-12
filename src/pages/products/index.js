import './products.less';
// 依赖组件
import hero from '../../components/hero';
import productCard from '../../components/product-card';
import filterList from '../../components/filter-list';

import ProductsController from './products.controller';
const module = angular.module('app.pages.products', [
    hero.name,
    productCard.name,
    filterList.name
]).controller(ProductsController.name, ProductsController);

export default module.name;

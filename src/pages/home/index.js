import './home.less';
import HomeController from './home.controller';
import hero from '../../components/hero';
import learnMore from '../../components/learn-more';
import productCard from '../../components/product-card';
const module = angular.module('app.pages.home', [
    hero.name,
    learnMore.name,
    productCard.name
]).controller(HomeController.name, HomeController);

export default module.name;

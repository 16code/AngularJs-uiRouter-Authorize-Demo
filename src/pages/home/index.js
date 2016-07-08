import './home.less';
import HomeController from './home.controller';
import hero from '../../components/hero';
import learnMore from '../../components/learn-more';
const module = angular.module('app.pages.home', [
    hero.name,
    learnMore.name
]).controller(HomeController.name, HomeController);

export default module.name;

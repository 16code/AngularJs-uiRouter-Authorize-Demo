import './home.less';
import HomeController from './home.controller';
import hero from '../../components/hero-box';
const module = angular.module('app.pages.home', [
    hero.name
])
    .controller(HomeController.name, HomeController);

export default module.name;

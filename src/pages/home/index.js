import HomeController from './home.controller';
const module = angular.module('app.pages.home', [])
    .controller(HomeController.name, HomeController);
    
export default module.name;

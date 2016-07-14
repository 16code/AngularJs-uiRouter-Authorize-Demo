// base style
import './styles/ui.less';

// 全局依赖模块
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import ngResource from 'angular-resource';
import ngAnimate from 'angular-animate';
// pages
import layoutModule from './components/_layout';
import homeRouter from './pages/home/home.router';
import moviesRouter from './pages/movies/movies.router';

// 模块
const modules = [
    uiRouter,
    oclazyload,
    ngResource,
    ngAnimate,
    layoutModule.name,
    homeRouter.name,
    moviesRouter.name
];

// global __APP_NAME__:true
export default angular.module(__APP_NAME__, modules);

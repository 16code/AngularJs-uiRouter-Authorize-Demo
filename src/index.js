// base style
import './styles/ui.less';

// 全局依赖模块
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import ngResource from 'angular-resource';
// pages
import layoutModule from './components/_layout';
import homeRouter from './pages/home/home.router';
import productsRouter from './pages/products/products.router';

// 模块
const modules = [
    uiRouter,
    oclazyload,
    ngResource,
    layoutModule.name,
    homeRouter.name,
    productsRouter.name
];

// global __APP_NAME__:true
export default angular.module(__APP_NAME__, modules);

// base style
import './styles/ui.less';

// 全局依赖模块
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';

// pages
import layoutModule from './components/_layout';
import homeRouter from './pages/home/home.router';

// 模块
const modules = [
    uiRouter,
    oclazyload,
    layoutModule.name,
    homeRouter.name
];

// global __APP_NAME__:true
export default angular.module(__APP_NAME__, modules);

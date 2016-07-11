import RouterHelperProvider from '../services/router-helper.provider';
import LoginResolveService from '../services/user-resolve.service';
import CategoryService from '../services/categories.service';
import ProductsService from '../services/products.service';
// config
import appConfig from './config';
// run
import appRun from './run';
export default angular.module('app.common', [])
    .service('LoginResolve', LoginResolveService)
    .service('CategoryApi', CategoryService)
    .service('ProductsApi', ProductsService)
    .provider('RouterHelper', RouterHelperProvider)
    .config(appConfig)
    .run(appRun);

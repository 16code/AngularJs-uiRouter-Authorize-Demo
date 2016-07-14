import RouterHelperProvider from '../services/router-helper.provider';
import LoginResolveService from '../services/user-resolve.service';
import MoviesService from '../services/movies.service';
import HttpInterceptor from '../services/http-interceptor.service';
import loadingBar from '../loading-bar';
import uiButterbar from '../ui-butterbar';
// config
import appConfig from './config';
// constant
import appConstant from './constant.config';
// run
import appRun from './run';

export default angular.module('app.common', [appConstant.name, loadingBar.name, uiButterbar.name])
    .service('LoginResolve', LoginResolveService)
    .service('MoviesApi', MoviesService)
    .factory('HttpInterceptor', HttpInterceptor)
    .provider('RouterHelper', RouterHelperProvider)
    .config(appConfig)
    .run(appRun);

import RouterHelperProvider from '../services/router-helper.provider';
import LoginResolveService from '../services/user-resolve.service';
// config
import appConfig from './config';
// run
import appRun from './run';
export default angular.module('app.common', [])
    .service('LoginResolve', LoginResolveService)
    .provider('RouterHelper', RouterHelperProvider)
    .config(appConfig)
    .run(appRun);

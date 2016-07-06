import commonModule from '../_common';
import appLayoutRouter from './layout.router';
import { headerModule } from './header';
import { footerModule } from './footer';
export default angular.module('app.layout', [
    commonModule.name,
    headerModule.name,
    footerModule.name
]).run(appLayoutRouter);

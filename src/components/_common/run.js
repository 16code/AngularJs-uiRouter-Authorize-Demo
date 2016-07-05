function appRun ($rootScope) {
    'ngInject';
    // IE hack
    $rootScope.isIEBrowser = /MSIE|Trident/.test(window.navigator.userAgent) ? 'ie' : 'not-ie';
    $rootScope.transparentHeader = true;
}

export default appRun;

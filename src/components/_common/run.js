export default function appRun($rootScope, IMAGE_URI) {
    'ngInject';
    // IE hack
    $rootScope.isIEBrowser = /MSIE|Trident/.test(window.navigator.userAgent) ? 'ie' : 'not-ie';
    $rootScope.transparentHeader = true;
    $rootScope.image_uri = IMAGE_URI;
}

function appConfig(RouterHelperProvider, $resourceProvider, $httpProvider) {
    'ngInject';
    RouterHelperProvider.configure({mainTitle: 'AngularJs Movie App'});
    // 请求的资源去掉末尾反斜杠
    $resourceProvider.defaults.stripTrailingSlashes = true;
    // http 拦截注入
    $httpProvider.interceptors.push('HttpInterceptor');
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

export default appConfig;

function HttpInterceptor($q, API_KEY) {
    'ngInject';
    return {
        request(config) {
            if (angular.isObject(config)) {
                config.params = config.params || {};
                config.params.api_key = API_KEY;
                config.params.language = 'zh';
            }
            return config || $q.when(config);
        },
        requestError(rejection) {
            // do something on error
            console.log('requestError');
            return $q.reject(rejection);
        },
        response(response) {
            // do something on success
            return response;
        },
        responseError(rejection) {
            // do something on error
            rejection = rejection || {};
            switch (rejection.status) {
                case 401:
                    console.log('用户未登录');
                    break;
                case 403:
                    console.log('用户已登录，但是不具备操作权限');
                    break;
                case 404:
                    console.warn('请求的资源文件不存在', rejection.data);
                    break;
                case 408:
                case -1:
                    rejection.errMessage = '数据请求超时';
                    // alert('连接超时, 请刷新页面');
                    console.warn('connection timed out');
                    break;
                default:
            }
            return $q.reject(rejection);
        }
    };
}
export default HttpInterceptor;

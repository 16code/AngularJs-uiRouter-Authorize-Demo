class ProductsService {
    constructor($resource, $q, API) {
        'ngInject';
        Object.assign(this, {$resource, $q, API});
        this.products = [];
    }
    // 最新电影
    $topRated(page) {
        return this.$sourceByList({movie_type: 'top_rated', page});
    }
    // 获取电影数据库上已上线电影
    $nowPlaying(page) {
        return this.$sourceByList({movie_type: 'now_playing', page});
    }
    // 获取电影数据库上流行的电影列表
    $popular(page) {
        return this.$sourceByList({movie_type: 'popular', page});
    }
    // 即将上线
    $upComing(page) {
        return this.$sourceByList({movie_type: 'upcoming', page});
    }
    // 单个电影详情
    $profile(params) {
        return this.$sourceByOne(params);
    }
    $sourceByOne(params) {
        const api = this.$resource(`${this.API}/movie/:id/:type`, {}, {
            get: {
                cache: true
            }
        });
        const deferred = this.$q.defer();
        const promise = api.get(params).$promise;
        promise.then((resp) => {
            deferred.resolve(resp);
        }, () => {
            deferred.reject('数据请求失败');
        });
        return deferred.promise;
    }
    // api数据处理
    $sourceByList(movieType) {
        const api = this.$resource(`${this.API}/movie/:movie_type`, {}, {
            get: {
                cache: true
            }
        });
        const deferred = this.$q.defer();
        const promise = api.get(movieType).$promise;
        promise.then((resp) => {
            deferred.resolve(resp);
        }, () => {
            deferred.reject('数据请求失败');
        });
        return deferred.promise;
    }
}

export default ProductsService;

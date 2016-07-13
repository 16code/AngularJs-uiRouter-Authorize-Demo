class ProductsService {
    constructor($resource, $q, API) {
        'ngInject';
        Object.assign(this, {$resource, $q, API});
        this.products = [];
    }
    // 最新电影
    $topRated() {
        return this.$source({movie_type: 'top_rated'});
    }
    // 获取电影数据库上已上线电影
    $nowPlaying() {
        return this.$source({movie_type: 'now_playing'});
    }
    // 获取电影数据库上流行的电影列表
    $popular() {
        return this.$source({movie_type: 'popular'});
    }
    // 即将上线
    $upComing() {
        return this.$source({movie_type: 'upcoming'});
    }
    // api数据处理
    $source(movieType) {
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

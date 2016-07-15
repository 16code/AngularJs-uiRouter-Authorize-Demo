function apppMovieProfileRun(RouterHelper) {
    'ngInject';
    RouterHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'root.layout.movieProfile',
            config: {
                url: '/movice/:id-:name',
                views: {
                    'main@root': {
                        templateProvider: ['$q', ($q) => {
                            return $q((resolve) => {
                                require.ensure([], () => {
                                    resolve(require('./movie-profile.html'));
                                }, 'movieProfile');
                            });
                        }],
                        controller: 'MovieProfileController as vm'
                    }
                },
                data: {
                    title: '影视资料',
                    className: 'profile'
                },
                resolve: {
                    loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                $ocLazyLoad.load({name: require('./index').default});
                                resolve();
                            }, 'movieProfile');
                        });
                    }],
                    movieProfile: ['$q', '$stateParams', 'MoviesApi', ($q, $stateParams, MoviesApi) => {
                        const deferred = $q.defer();
                        if (!$stateParams.id) return deferred.reject('id 错误');
                        $q.all({
                            profile: MoviesApi.$profile({id: $stateParams.id}),
                            credits: MoviesApi.$profile({id: $stateParams.id, type: 'credits'})
                        }).then((resp) => {
                            deferred.resolve(resp);
                        }, (err) => {
                            deferred.reject(err);
                        });
                        return deferred.promise;
                    }]
                }
            }
        }
    ];
}

export default angular.module('app.routes.movieProfile', [])
    .run(apppMovieProfileRun);

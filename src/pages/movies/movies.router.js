function apppMoviesRun(RouterHelper) {
    'ngInject';
    RouterHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'root.layout.movies',
            config: {
                url: '/movies',
                abstract: false,
                redirectTo: 'root.layout.movies.upcoming'
            }
        },
        {
            state: 'root.layout.movies.upcoming',
            config: {
                url: '/upcoming?page',
                views: {
                    'main@root': {
                        templateProvider: ['$q', ($q) => {
                            return $q((resolve) => {
                                require.ensure([], () => {
                                    resolve(require('./upcoming/upcoming.html'));
                                }, 'upcomingMovies');
                            });
                        }],
                        controller: 'upComingMoviesController as vm'
                    }
                },
                data: {
                    title: '即将上映',
                    className: 'upcoming'
                },
                resolve: {
                    loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                $ocLazyLoad.load({name: require('./index').default});
                                resolve();
                            }, 'upcomingMovies');
                        });
                    }]
                }
            }
        },
        {
            state: 'root.layout.movies.popular',
            config: {
                url: '/popular?page',
                views: {
                    'main@root': {
                        templateProvider: ['$q', ($q) => {
                            return $q((resolve) => {
                                require.ensure([], () => {
                                    resolve(require('./popular/popular.html'));
                                }, 'popularMovies');
                            });
                        }],
                        controller: 'popularMoviesController as vm'
                    }
                },
                data: {
                    title: '推荐电影',
                    className: 'popular'
                },
                resolve: {
                    loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                $ocLazyLoad.load({name: require('./index').default});
                                resolve();
                            }, 'popularMovies');
                        });
                    }]
                }
            }
        }
    ];
}

export default angular.module('app.routes.movies', [])
    .run(apppMoviesRun);

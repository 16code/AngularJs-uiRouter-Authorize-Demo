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
                abstract: true
            }
        },
        {
            state: 'root.layout.movies.upcoming',
            config: {
                url: '/upcoming',
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
        }
    ];
}

export default angular.module('app.routes.movies', [])
    .run(apppMoviesRun);

function apppProductsRun(RouterHelper) {
    'ngInject';
    RouterHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'root.layout.products',
            config: {
                url: '/products',
                views: {
                    'main@root': {
                        templateProvider: ['$q', ($q) => {
                            return $q((resolve) => {
                                require.ensure([], () => {
                                    resolve(require('./products.html'));
                                }, 'products');
                            });
                        }],
                        controller: 'ProductsController as vm'
                    }
                },
                data: {
                    title: 'Products',
                    className: 'products'
                },
                resolve: {
                    loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                $ocLazyLoad.load({name: require('./index').default});
                                resolve();
                            }, 'products');
                        });
                    }]
                }
            }
        }
    ];
}

export default angular.module('app.routes.products', [])
    .run(apppProductsRun);

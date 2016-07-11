class HomeController {
    constructor(CategoryApi, ProductsApi) {
        'ngInject';
        Object.assign(this, {CategoryApi, ProductsApi});
        this.heroData = {
            background: require('../../assets/images/hero.jpg'),
            subject: 'Webpack + Angular + UiRouter + ES6最佳实践!',
            intro: '简单、高效、快捷的构建你的Angular应用程序'
        };
        this.ads = [
            require('../../assets/images/ad-1.jpg'),
            require('../../assets/images/ad-2.jpg')
        ];
        this.activate();
    }
    activate() {
        const CategoryPromise = this.CategoryApi.$get();
        CategoryPromise.then((data) => {
            this.categories = data;
        });
        this.getProducts();
    }
    getProducts() {
        const ProductsPromise = this.ProductsApi.$hot();
        ProductsPromise.then((data) => {
            this.products = data;
        });
    }
}

export default HomeController;

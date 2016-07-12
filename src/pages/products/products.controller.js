class ProductsController {
    constructor(CategoryApi, ProductsApi) {
        'ngInject';
        Object.assign(this, {CategoryApi, ProductsApi});
        this.heroData = {
            background: require('../../assets/images/product.jpg'),
            subject: 'Shopping List'
        };
        this.activate();
    }
    activate() {
        this.getCategories();
        this.getProducts();
    }
    getCategories() {
        const CategoryPromise = this.CategoryApi.$get();
        CategoryPromise.then((data) => {
            this.categories = data;
        });
    }
    getProducts() {
        const ProductsPromise = this.ProductsApi.$get();
        ProductsPromise.then((data) => {
            this.products = data;
        });
    }
}

export default ProductsController;

class ProductsService {
    constructor($q) {
        'ngInject';
        Object.assign(this, {$q});
        this.products = [];
    }
    $get() {
        let i = 1;
        while (i <= 24) {
            const product = {
                id: i,
                name: `Product ${i}`,
                price: Math.round(Math.random() * 1000).toFixed(2),
                thumbnail: require(`../../assets/images/${i}.jpg`)
            };
            this.products.push(product);
            i++;
        }
        return this.$q.resolve(this.products);
    }
    $hot() {
        this.$get();
        return this.$q.resolve(this.products.slice(0, 8));
    }
}

export default ProductsService;

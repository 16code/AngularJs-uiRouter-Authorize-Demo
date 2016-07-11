class ProductController {
    constructor() {
        this.activate();
    }
    activate() {
        if (!this.product) {
            delete this.product;
        }
    }
    addToCart(product) {
        console.log(product);
    }
}

export default ProductController;

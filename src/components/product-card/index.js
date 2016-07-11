// 商品列表组件
import './product-card.less';
import productHtml from './product-card.html';
import ProductCardController from './product-card.controller';
const ProductCardComponent = {
    bindings: {
        product: '<'
    },
    transclude: {
        handle: '?handle'
    },
    template: productHtml,
    controller: ProductCardController,
    controllerAs: 'vm'
};

export default angular.module('app.components.productCard', [])
    .component('productCard', ProductCardComponent);

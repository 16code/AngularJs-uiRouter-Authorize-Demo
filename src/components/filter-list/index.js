import './filter.less';
import filterHtml from './filter.html';
const FilterListComponent = {
    bindings: {
        product: '<'
    },
    template: filterHtml,
    controllerAs: 'vm'
};

export default angular.module('app.components.listFilter', [])
    .component('listFilter', FilterListComponent);

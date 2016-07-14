import './bar.less';
export default angular.module('app.components.pageTransformBar', [])
    .component('butterBar', {
        template: require('./bar.html'),
        controller: class transformBarComponent {
            constructor($scope, $element, $attrs, $http) {
                'ngInject';
                Object.assign(this, {$scope, $element, $attrs, $http});
                this.$scope.isLoading = () => {
                    return this.$http.pendingRequests.length > 0;
                };
                this.$scope.$watch(this.$scope.isLoading, (v) => {
                    if (v) {
                        $element.addClass('butterbar active');
                    } else {
                        $element.removeClass('butterbar active');
                    }
                });
            }
        }
    });

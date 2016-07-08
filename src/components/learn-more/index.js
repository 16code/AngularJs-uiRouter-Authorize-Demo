import learnMoreHtml from './learn-more.html';
import './learn-more.less';

const learnMoreComponent = {
    bindings: {
        title: '<'
    },
    template: learnMoreHtml,
    controller: class learnMoreController {
        constructor($scope, $element, $attrs) {
            'ngInject';
            Object.assign(this, {
                $scope,
                $element,
                $attrs
            });
            this.btnText = this.$attrs.btnText || 'Repository';
            this.description = this.$attrs.description || '简单、高效、快捷的构建你的Angular应用程序, 获取代码';
            this.uri = this.$attrs.uri || 'https://github.com/16code/angular-webpack-es6-demo';
        }
    },
    controllerAs: 'vm'
};
export default angular.module('app.components.learnMore', [])
    .component('learnMore', learnMoreComponent);

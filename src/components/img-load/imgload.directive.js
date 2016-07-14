import './imgload.less';
function lazyLoadDirective($timeout) {
    'ngInject';
    return {
        restrict: 'A',
        scope: {
            imgload: '@'
        },
        link: ($scope, $element) => {
            $element.bind('load', onLoad);
            $scope.$watch('imgload', () => {
                $element[0].setAttribute('src', $scope.imgload);
            });
        }
    };
    function onLoad() {
        const img = this;
        const imgSrc = img.getAttribute('src');
        const imgWrapper = img.parentNode;
        img.setAttribute('img-loaded', true);
        $timeout(() => {
            img.style.opacity = 0;
            imgWrapper.classList.add('loaded');
            imgWrapper.style.backgroundImage = `url(${imgSrc})`;
        }, 1000);
    }
}
export default lazyLoadDirective;

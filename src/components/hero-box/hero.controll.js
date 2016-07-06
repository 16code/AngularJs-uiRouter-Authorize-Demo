class HeroController {
    constructor($scope, $element, $attrs, $rootScope, $timeout) {
        'ngInject';
        Object.assign(this, {
            $scope,
            $element,
            $attrs,
            $rootScope,
            $timeout
        });
        this.activate();
    }
    activate() {
        // 如果没有传入数据，那么就展示默认
        this.heroData = this.heroData || {
            background: require('../../assets/images/hero.jpg'),
            subject: 'Webpack + Angular + UiRouter + ES6最佳实践!',
            intro: '用户登录验证以及路由访问权限控制演示程序'
        };
        if (!this.heroData) {
            console.log('heroData is required');
        }
        this.parallaxScroll();
    }
    parallaxScroll() {
        const self = this;
        const html = document.documentElement;
        const header = document.querySelector('#page-header');
        const effectEle = this.$element[0].querySelector('.intro');
        const pageHeight = html.scrollHeight;
        const requestAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame;
        let lastScrollTop = -1;
        if (requestAnimationFrame) {
            loop();
        }

        function loop() {
            const scrollTop = window.pageYOffset || html.scrollTop;
            if (lastScrollTop === scrollTop) {
                self.$timeout(requestAnimationFrame(loop));
            } else {
                lastScrollTop = scrollTop;
                const scrollingStyle = `translate3d(0, ${-((scrollTop * 1000) / pageHeight)}px, 0)`;
                effectEle.style.transform = header.style.transform = scrollingStyle;
                if (scrollTop >= effectEle.offsetHeight) {
                    self.$rootScope.transparentHeader = false;
                } else {
                    self.$rootScope.transparentHeader = true;
                }
                self.$timeout(requestAnimationFrame(loop));
            }
        }
    }
}
export default HeroController;

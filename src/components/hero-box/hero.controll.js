class HeroController {
    constructor($scope, $element, $attrs) {
        'ngInject';
        Object.assign(this, {
            $scope,
            $element,
            $attrs
        });
        this.activate();
    }
    activate() {
        HeroController.parallaxScroll(this.$element[0]);
    }
    static parallaxScroll(el) {
        const $window = window;
        const html = document.documentElement;
        const body = document.body;
        const effectEle = el.querySelector('.intro');
        const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight);
        const requestAnimationFrame = $window.requestAnimationFrame || $window.msRequestAnimationFrame;
        let lastScrollTop = -1;
        if (requestAnimationFrame) {
            loop();
        }

        function loop() {
            const scrollTop = $window.pageYOffset || html.scrollTop || body.scrollTop;
            if (lastScrollTop === scrollTop) {
                requestAnimationFrame(loop);
            } else {
                lastScrollTop = scrollTop;
                const scrollingPercentage = -(scrollTop * 1000 / pageHeight);
                effectEle.style.transform = `translate3d(0, ${scrollingPercentage}px, 0)`;
                requestAnimationFrame(loop);
            }
        }
    }
}
export default HeroController;

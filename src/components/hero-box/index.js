import heroHtml from './hero.html';
import './hero.less';
import HeroControll from './hero.controll';

const HeroComponent = {
    bindings: true,
    template: heroHtml,
    controller: HeroControll,
    controllerAs: 'vm'
};
export default angular.module('app.components.hero', [])
    .component('heroBox', HeroComponent);

// 商品列表组件
import './movie-card.less';
import movieCardHtml from './movie-card.html';
import MovieCardController from './movie-card.controller';
const MovieCardComponent = {
    bindings: {
        movie: '<'
    },
    transclude: {
        handle: '?handle'
    },
    template: movieCardHtml,
    controller: MovieCardController,
    controllerAs: 'vm'
};

export default angular.module('app.components.movieCard', [])
    .filter('voteFilter', () => {
        return (vote) => {
            const result = Number(vote);
            return result.toFixed(1);
        };
    })
    .component('movieCard', MovieCardComponent);

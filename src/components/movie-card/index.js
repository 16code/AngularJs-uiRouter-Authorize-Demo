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
    .filter('parseGenre', () => {
        const originGenres = [
            {
                id: 28,
                name: '动作'
            },
            {
                id: 12,
                name: '冒险'
            },
            {
                id: 16,
                name: '动画'
            },
            {
                id: 35,
                name: '喜剧'
            },
            {
                id: 80,
                name: '犯罪'
            },
            {
                id: 99,
                name: '纪录'
            },
            {
                id: 18,
                name: '剧情'
            },
            {
                id: 10751,
                name: '家庭'
            },
            {
                id: 14,
                name: '奇幻'
            },
            {
                id: 10769,
                name: '外语'
            },
            {
                id: 36,
                name: '历史'
            },
            {
                id: 27,
                name: '恐怖'
            },
            {
                id: 10402,
                name: '音乐'
            },
            {
                id: 9648,
                name: '悬疑'
            },
            {
                id: 10749,
                name: '爱情'
            },
            {
                id: 878,
                name: '科幻'
            },
            {
                id: 10770,
                name: '电视电影'
            },
            {
                id: 53,
                name: '惊悚'
            },
            {
                id: 10752,
                name: '战争'
            },
            {
                id: 37,
                name: '西部'
            }
        ];
        return (genres) => {
            const result = [];
            for (const genre of genres) {
                originGenres.forEach((origin) => {
                    if (origin.id === genre) {
                        result.push(origin.name);
                    }
                });
            }
            return result.slice(0, 3).join(', ');
        };
    })
    .component('movieCard', MovieCardComponent);

// 依赖组件
import movieCard from '../../components/movie-card';
import pagination from '../../components/pagination';

import upComingMoviesController from './upcoming/upcoming.controller';
const module = angular.module('app.pages.movies', [movieCard.name, pagination.name])
    .controller(upComingMoviesController.name, upComingMoviesController);

export default module.name;

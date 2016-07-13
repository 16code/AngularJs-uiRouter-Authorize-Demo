// 依赖组件
import movieCard from '../../components/movie-card';

import upComingMoviesController from './upcoming/upcoming.controller';
const module = angular.module('app.pages.movies', [movieCard.name])
    .controller(upComingMoviesController.name, upComingMoviesController);

export default module.name;

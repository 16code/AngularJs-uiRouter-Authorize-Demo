class HomeController {
    constructor($q, MoviesApi) {
        'ngInject';
        Object.assign(this, {$q, MoviesApi});
        this.activate();
    }
    activate() {
        this.getPopularMovies();
    }
    getPopularMovies() {
        const popularMoviesPromise = this.MoviesApi.$popular();
        popularMoviesPromise.then((resp) => {
            this.popularMovies = resp.results.slice(0, 10);
            this.upComingMovies = resp.results.slice(10, 20);
            this.getTopRatedMovies();
        }, (err) => {
            console.log(err);
        });
    }
    getTopRatedMovies() {
        const topMoviesPromise = this.MoviesApi.$topRated();
        topMoviesPromise.then((resp) => {
            this.topRatedMovies = resp.results.slice(0, 10);
        }, (err) => {
            console.log(err);
        });
    }
}

export default HomeController;

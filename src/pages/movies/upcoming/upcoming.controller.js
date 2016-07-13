class upComingMoviesController {
    constructor($q, MoviesApi) {
        'ngInject';
        Object.assign(this, {$q, MoviesApi});
        this.activate();
    }
    activate() {
        this.getPopularMovies();
    }
    getPopularMovies() {
        const popularMoviesPromise = this.MoviesApi.$upComing();
        popularMoviesPromise.then((resp) => {
            this.upComingMovies = resp.results;
            this.totalResults = resp.total_results;
        }, (err) => {
            console.log(err);
        });
    }
}

export default upComingMoviesController;

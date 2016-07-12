class HomeController {
    constructor($q, MoviesApi) {
        'ngInject';
        Object.assign(this, {$q, MoviesApi});
        this.activate();
    }
    activate() {
        const popularMoviesPromise = this.MoviesApi.$popular();
        const upComingMoviesPromise = this.MoviesApi.$upComing();
        const topRatedMoviesPromise = this.MoviesApi.$topRated();
        return this.$q.all({
            popularMovies: popularMoviesPromise,
            upComingMovies: upComingMoviesPromise,
            topRatedMovies: topRatedMoviesPromise
        }).then((resp) => {
            console.log(resp);
            this.popularMovies = resp.popularMovies.slice(0, 8);
            this.upComingMovies = resp.upComingMovies.slice(0, 8);
            this.topRatedMovies = resp.topRatedMovies.slice(0, 8);
        }, (err) => {
            console.log(err);
        });
    }
}

export default HomeController;

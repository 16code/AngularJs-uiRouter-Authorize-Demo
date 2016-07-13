class upComingMoviesController {
    constructor($q, $state, MoviesApi) {
        'ngInject';
        Object.assign(this, {$q, $state, MoviesApi});
        this.paginationConfig = {
            currentPage: this.$state.params.page || 1,
            itemsPerPage: 20,
            pagesLength: 9,
            pageOnChange: () => {
                // this.$upComingMovies();
                this.$state.go($state.current, {page: this.paginationConfig.currentPage});
            }
        };
        this.activate();
    }
    activate() {
        this.$upComingMovies();
    }
    $upComingMovies() {
        const popularMoviesPromise = this.MoviesApi.$upComing(this.paginationConfig.currentPage);
        popularMoviesPromise.then((resp) => {
            this.upComingMovies = resp.results;
            this.totalResults = resp.total_results;
            // 更新分页
            this.paginationConfig.totalItems = resp.total_results;
            this.paginationConfig.currentPage = resp.page;
        }, (err) => {
            console.log(err);
        });
    }
}

export default upComingMoviesController;

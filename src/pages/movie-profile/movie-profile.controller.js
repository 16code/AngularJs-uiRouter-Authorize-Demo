class MovieProfileController {
    constructor(movieProfile) {
        'ngInject';
        this.movie = movieProfile.profile;
        this.credits = movieProfile.credits;
        console.log(this.movie, this.credits);
    }
}
export default MovieProfileController;

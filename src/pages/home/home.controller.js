class HomeController {
    constructor() {
        console.log('HomeController is working');
        this.heroData = {
            background: require('../../assets/images/hero.jpg'),
            subject: 'Webpack + Angular + UiRouter + ES6最佳实践!',
            intro: '简单、高效、快捷的构建你的Angular应用程序'
        };
    }
}

export default HomeController;

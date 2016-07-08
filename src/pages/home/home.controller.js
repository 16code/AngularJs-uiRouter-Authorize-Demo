class HomeController {
    constructor() {
        this.heroData = {
            background: require('../../assets/images/hero.jpg'),
            subject: 'Webpack + Angular + UiRouter + ES6最佳实践!',
            intro: '简单、高效、快捷的构建你的Angular应用程序'
        };
        this.ads = [
            require('../../assets/images/ad-1.jpg'),
            require('../../assets/images/ad-2.jpg')
        ];
        this.products = [
            require('../../assets/images/1.jpg'),
            require('../../assets/images/2.jpg'),
            require('../../assets/images/3.jpg'),
            require('../../assets/images/4.jpg'),
            require('../../assets/images/5.jpg'),
            require('../../assets/images/6.jpg'),
            require('../../assets/images/7.jpg'),
            require('../../assets/images/8.jpg')
        ];
        this.categories = [
            {
                name: '包包',
                thumbnail: 'bag',
                router: 'root.layout.home'
            },
            {
                name: '礼服',
                thumbnail: 'dress',
                router: 'root.layout.home'
            },
            {
                name: '眼镜',
                thumbnail: 'glasses',
                router: 'root.layout.home'
            },
            {
                name: 'POLO衫',
                thumbnail: 'polo',
                router: 'root.layout.home'
            },
            {
                name: 'T恤(男)',
                thumbnail: 'shirt',
                router: 'root.layout.home'
            },
            {
                name: '裙子',
                thumbnail: 'skirt',
                router: 'root.layout.home'
            },
            {
                name: '袜子',
                thumbnail: 'sock',
                router: 'root.layout.home'
            },
            {
                name: '裤子',
                thumbnail: 'trousers',
                router: 'root.layout.home'
            },
            {
                name: '背心',
                thumbnail: 'vest',
                router: 'root.layout.home'
            },
            {
                name: 'T恤(女)',
                thumbnail: 'women',
                router: 'root.layout.home'
            },
        ];
    }
}

export default HomeController;

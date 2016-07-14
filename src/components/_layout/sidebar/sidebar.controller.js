class SidebarController {
    constructor() {
        this.navigations = [
            {
                name: '仪表盘',
                icon: 'speedometer',
                uri: 'root.layout.home'
            },
            {
                name: '推荐电影',
                icon: 'fire',
                uri: 'root.layout.movies.popular'
            },
            {
                name: '即将上映',
                icon: 'calendar',
                uri: 'root.layout.movies.upcoming'
            },
            {
                name: '所有电影',
                icon: 'film',
                uri: 'root.layout.movies.all'
            },
            {
                name: '收藏夹',
                icon: 'star',
                uri: 'root.layout.movies.bb'
            },
            {
                name: '浏览历史',
                icon: 'chart',
                uri: 'root.layout.movies.aa'
            }
        ];
    }
}
export default SidebarController;

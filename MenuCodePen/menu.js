app.component('menui', {
    template:
    /*html*/
    `
    <div class="container" :class=active>
        <div class="menu-items" v-for="item in items">
            <div class='menu' :class=' item.active ' @mouseover='showStyle(item.active)'>
                <img :src="item.image" alt="">
            </div>
            <div class='menu-text'>
                <h3>{{item.name}}</h3>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            active: "",
            items: [
                { name: 'Home', url: '', image: '/assets/home.svg', active: 'green' },
                { name: 'Profile', url: '', image: 'assets/profile.svg', active: 'blue' },
                { name: 'Tasks', url: '', image: 'assets/tasks.svg', active: 'pink' },
                { name: 'Settings', url: '', image: 'assets/settings.svg', active: 'yellow' },
                { name: 'Exit', url: '', image: 'assets/exit.svg', active: 'brown' },
            ]
        }
    },
    methods: {
        showStyle(itemStyle) {
            this.active = itemStyle;
        }
    }
});

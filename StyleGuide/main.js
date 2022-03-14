const app = Vue.createApp({
    data(){
        return{
            currentBackground: '',
            currentSize: '',
            currentHeight: '',
            currentColor: '',
            backgrounds: ['base-1', 'base-2','base-3','base-4','base-primary','base-secondary'],
            colors: ['primary','secondary','tertiary','onprimary','onsecondary','onbackground'],
            sizes: ['header-1', 'header-2', 'header-3', 'header-4', 'body', 'small'],
            heights: ['elevate-1', 'elevate-2', 'elevate-3', 'elevate-4', 'elevate-5'],
        }
    },
        methods: {
            changeBackground(background){
                this.currentBackground = background;
            },
            changeSize(size){
                this.currentSize = size;
            },
            changeHeight(height){
                this.currentHeight = height;
            },
            changeColor(color){
                this.currentColor = color;
            }
    }
})
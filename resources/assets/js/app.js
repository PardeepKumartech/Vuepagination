window.Vue = require('vue');
import axios from 'axios';

Vue.component('pagination', require('./components/PaginationComponent.vue'));

const app = new Vue({
    el: '#app',

    data: {
        posts: {},
        pagination: {
            'current_page': 1
        }
    },

    methods: {
        fetchPosts() {
            axios.get('posts?page=' + this.pagination.current_page)
                .then(response => {
                    this.posts = response.data.data.data;
                    this.pagination = response.data.pagination;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
    },

    mounted() {
        this.fetchPosts();
    }
});
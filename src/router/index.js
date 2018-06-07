import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import YingYangYumm from '../pages/projects/YingYangYumm.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/projects/yingyangyumm',
			name: 'YingYangYumm',
			component: YingYangYumm
		}
	]
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';

const messages = {
	es: require('./assets/i18n/es.json')
};

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'es',
	messages
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	i18n,
	components: {App},
	template: '<App/>'
});

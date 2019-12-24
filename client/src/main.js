import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueApollo);

const defaultClient = new ApolloClient({
  uri: process.env.VUE_APP_BACKEND_URI
});

const apolloProvider = new VueApollo({
  defaultClient
});

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount('#app');

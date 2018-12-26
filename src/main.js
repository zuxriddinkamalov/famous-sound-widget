import Vue from 'vue';
/* ============
 * Plugins
 * ============
 *
 * Import plugins.
 */
import './plugins/vuex';
import './plugins/font-awesome';
import './plugins/element-ui';
import './plugins/vuex-router-sync';
import './plugins/vue-ramda';
import { router } from './plugins/vue-router';

/* ============
 * Styles
 * ============
 *
 * Import styles.
 */

import './scss/index.scss';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import App from './App';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

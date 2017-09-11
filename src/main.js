import 'static/scss/base.scss';
import 'vue-xui/css/xui.min.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import xui from 'vue-xui';
import 'es6-promise/auto';
import sourceCode from 'components/source-code.vue';
import apiTable from 'components/api-table.vue';

Vue.config.productionTip = false;

// 类型
Vue.prototype.$types = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'dark'
];

// 大小
Vue.prototype.$size = [
  'large',
  'default',
  'small',
  'mini'
];

// api props keys
Vue.prototype.$propsKeys = [
  {
    label: '名称',
    name: 'attribute'
  },
  {
    label: '说明',
    name: 'explain'
  },
  {
    label: '类型',
    name: 'type'
  },
  {
    label: '可选值',
    name: 'values'
  },
  {
    label: '默认',
    name: 'default'
  }
];

// api events keys
Vue.prototype.$eventKeys = [
  {
    label: '名称',
    name: 'events'
  },
  {
    label: '说明',
    name: 'explain'
  },
  {
    label: '参数',
    name: 'params'
  }
];

Vue.use(xui);

// 全局引入sourceCode
Vue.component('sourceCode', sourceCode);
Vue.component('apiTable', apiTable);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

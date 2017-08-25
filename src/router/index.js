import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component (resolve) {
        require(['views/index.vue'], resolve);
      }
    },
    {
      path: '/doc',
      component (resolve) {
        require(['views/doc.vue'], resolve);
      },
      children: [
        // 安装
        {
          path: '/',
          name: 'install',
          component (resolve) {
            require(['views/doc/install.vue'], resolve);
          }
        },
        // 快速上手
        {
          path: 'quickstart',
          name: 'quickstart',
          component (resolve) {
            require(['views/doc/quickstart.vue'], resolve);
          }
        },
        // 按钮
        {
          path: 'button',
          name: 'button',
          component (resolve) {
            require(['views/doc/button.vue'], resolve);
          }
        },
        // icon
        {
          path: 'icon',
          name: 'icon',
          component (resolve) {
            require(['views/doc/icon.vue'], resolve);
          }
        }
      ]
    }
  ]
});

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   return savedPosition || { x: 0, y: 0 };
  // },
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
      name: 'doc',
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
        // 组件
        {
          path: 'components',
          name: 'components',
          redirect: '/doc/x-button'
        },
        // 按钮
        {
          path: 'x-button',
          name: 'x-button',
          component (resolve) {
            require(['views/doc/components/x-button.vue'], resolve);
          }
        },
        // 图标
        {
          path: 'x-icon',
          name: 'x-icon',
          component (resolve) {
            require(['views/doc/components/x-icon.vue'], resolve);
          }
        },
        // quote
        {
          path: 'x-quote',
          name: 'x-quote',
          component (resolve) {
            require(['views/doc/components/x-quote.vue'], resolve);
          }
        },
        // 标签
        {
          path: 'x-tag',
          name: 'x-tag',
          component (resolve) {
            require(['views/doc/components/x-tag.vue'], resolve);
          }
        },
        // 徽章
        {
          path: 'x-badge',
          name: 'x-badge',
          component (resolve) {
            require(['views/doc/components/x-badge.vue'], resolve);
          }
        },
        // 折叠面板
        {
          path: 'x-collapse',
          name: 'x-collapse',
          component (resolve) {
            require(['views/doc/components/x-collapse.vue'], resolve);
          }
        },
        // 进度条
        {
          path: 'x-progress',
          name: 'x-progress',
          component (resolve) {
            require(['views/doc/components/x-progress.vue'], resolve);
          }
        },
        // 选项卡
        {
          path: 'x-tabs',
          name: 'x-tabs',
          component (resolve) {
            require(['views/doc/components/x-tabs.vue'], resolve);
          }
        },
        // 分页
        {
          path: 'x-page',
          name: 'x-page',
          component (resolve) {
            require(['views/doc/components/x-page.vue'], resolve);
          }
        },
        // 滑动条
        {
          path: 'x-slider',
          name: 'x-slider',
          component (resolve) {
            require(['views/doc/components/x-slider.vue'], resolve);
          }
        },
        {
          path: 'x-input',
          name: 'x-input',
          component (resolve) {
            require(['views/doc/components/x-input.vue'], resolve);
          }
        }
      ]
    }
  ]
});

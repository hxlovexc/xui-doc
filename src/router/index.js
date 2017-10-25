import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routers = new Router({
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
        // 导航菜单
        {
          path: 'x-menu',
          name: 'x-menu',
          component (resolve) {
            require(['views/doc/components/x-menu.vue'], resolve);
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
        // 文本输入框
        {
          path: 'x-input',
          name: 'x-input',
          component (resolve) {
            require(['views/doc/components/x-input.vue'], resolve);
          }
        },
        // 计数器
        {
          path: 'x-counter',
          name: 'x-counter',
          component (resolve) {
            require(['views/doc/components/x-counter.vue'], resolve);
          }
        },
        // 文本域
        {
          path: 'x-textarea',
          name: 'x-textarea',
          component (resolve) {
            require(['views/doc/components/x-textarea.vue'], resolve);
          }
        },
        // 单选框
        {
          path: 'x-radio',
          name: 'x-radio',
          component (resolve) {
            require(['views/doc/components/x-radio.vue'], resolve);
          }
        },
        // 多选框
        {
          path: 'x-checkbox',
          name: 'x-checkbox',
          component (resolve) {
            require(['views/doc/components/x-checkbox.vue'], resolve);
          }
        },
        // 开关
        {
          path: 'x-switch',
          name: 'x-switch',
          component (resolve) {
            require(['views/doc/components/x-switch.vue'], resolve);
          }
        },
        // 选择器
        {
          path: 'x-select',
          name: 'x-select',
          component (resolve) {
            require(['views/doc/components/x-select.vue'], resolve);
          }
        },
        // 表单
        {
          path: 'x-form',
          name: 'x-form',
          component (resolve) {
            require(['views/doc/components/x-form.vue'], resolve);
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
        // 表格
        {
          path: 'x-table',
          name: 'x-table',
          component (resolve) {
            require(['views/doc/components/x-table.vue'], resolve);
          }
        },
        {
          path: 'x-alert',
          name: 'x-alert',
          component (resolve) {
            require(['views/doc/components/x-alert.vue'], resolve);
          }
        },
        {
          path: 'x-message',
          name: 'x-message',
          component (resolve) {
            require(['views/doc/components/x-message.vue'], resolve);
          }
        },
        // 对话框
        {
          path: 'x-dialog',
          name: 'x-dialog',
          component (resolve) {
            require(['views/doc/components/x-dialog.vue'], resolve);
          }
        },
        // 模态框
        {
          path: 'x-modal',
          name: 'x-modal',
          component (resolve) {
            require(['views/doc/components/x-modal.vue'], resolve);
          }
        },
        // 侧边栏
        {
          path: 'x-sidebar',
          name: 'x-sidebar',
          component (resolve) {
            require(['views/doc/components/x-sidebar.vue'], resolve);
          }
        },
        // 通知信息
        {
          path: 'x-notice',
          name: 'x-notice',
          component (resolve) {
            require(['views/doc/components/x-notice.vue'], resolve);
          }
        },
        // 文字提示
        {
          path: 'x-tooltip',
          name: 'x-tooltip',
          component (resolve) {
            require(['views/doc/components/x-tooltip.vue'], resolve);
          }
        },
        // 弹出层
        {
          path: 'x-popover',
          name: 'x-popover',
          component (resolve) {
            require(['views/doc/components/x-popover.vue'], resolve);
          }
        }
      ]
    }
  ]
});

routers.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  next();
});

export default routers;

<template>
  <div class="doc">
    <!--菜单按钮-->
    <div class="doc-nav-list">
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
          :class="{
            'open': curNav === index
          }"
        >
          <!-- <router-link exact :to="{ name: item.name }">{{item.title}}</router-link> -->
          <!--sub-nav-->
          <div v-if="item.subMenu">
            <ul
              class="sub-nav"
              :key="subIndex"
              v-for="(sub, subIndex) in item.subMenu"
            >
              <div class="head">{{sub.title}}</div>
              <li v-for="components in sub.components" :key="components.title">
                <router-link exact :to="{ name: components.name }">{{components.title}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!--mask-->
    <div class="mask"></div>
    <div class="doc-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'docname',
    data () {
      return {
        navList: 25,
        curNav: '',
        // 菜单
        menu: [
          {
            title: '安装',
            name: 'doc'
          },
          {
            title: 'hello word',
            name: 'quickstart'
          },
          {
            title: '更新日志',
            name: 'change-log'
          },
          {
            title: '组件',
            name: 'components',
            subMenu: [
              {
                title: '基础组件',
                components: [
                  {
                    title: 'button 按钮',
                    name: 'x-button'
                  },
                  {
                    title: 'icon 图标',
                    name: 'x-icon'
                  },
                  {
                    title: 'quote 引用块',
                    name: 'x-quote'
                  },
                  {
                    title: 'tag 标签',
                    name: 'x-tag'
                  },
                  {
                    title: 'badge 徽章',
                    name: 'x-badge'
                  },
                  {
                    title: 'collapse 折叠面板',
                    name: 'x-collapse'
                  },
                  {
                    title: 'tabs 选项卡',
                    name: 'x-tabs'
                  }
                ]
              },
              {
                title: '表单',
                components: [
                  {
                    title: 'input 输入框',
                    name: 'x-input'
                  },
                  {
                    title: 'counter 计数器',
                    name: 'x-counter'
                  },
                  {
                    title: 'textarea 文本域',
                    name: 'x-textarea'
                  },
                  {
                    title: 'radio 单选框',
                    name: 'x-radio'
                  },
                  {
                    title: 'checkbox 多选框',
                    name: 'x-checkbox'
                  },
                  {
                    title: 'switch 开关',
                    name: 'x-switch'
                  },
                  {
                    title: 'select 选择器',
                    name: 'x-select'
                  },
                  {
                    title: 'slider 滑动条',
                    name: 'x-slider'
                  },
                  {
                    title: 'form 表单',
                    name: 'x-form'
                  }
                ]
              },
              {
                title: '数据组件',
                components: [
                  {
                    title: 'page 分页',
                    name: 'x-page'
                  },
                  {
                    title: 'progress 进度条',
                    name: 'x-progress'
                  },
                  {
                    title: 'table 表格',
                    name: 'x-table'
                  }
                ]
              },
              {
                title: '试图弹窗',
                components: [
                  {
                    title: 'alert 警告提示',
                    name: 'x-alert'
                  },
                  {
                    title: 'dialog 对话框',
                    name: 'x-dialog'
                  },
                  {
                    title: 'modal 模态框',
                    name: 'x-modal'
                  },
                  {
                    title: 'sidebar 侧边栏',
                    name: 'x-sidebar'
                  },
                  {
                    title: 'notice 通知提醒',
                    name: 'x-notice'
                  },
                  {
                    title: 'tooltip 文字提示',
                    name: 'x-tooltip'
                  },
                  {
                    title: 'popover 弹出层',
                    name: 'x-popover'
                  }
                ]
              }
            ]
          }
        ]
      };
    },
    methods: {
      showNav (index) {
        this.curNav = this.curNav === index ? '' : index;
      }
    }
  };
</script>


<style lang="scss" scoped>
  @import '../static/scss/var.scss';

  // pc
  @media screen and (min-width: $mobile-width) {
    $link-padding: 10px;

    .doc {
      padding: $view-padding $view-padding 0 0;
      display: flex;

      // 隐藏遮罩
      .mask {
        display: none;
      }

      // 导航
      .doc-nav-list {
        width: $pc-menu-width;
        position: fixed;
        top: $header-height + $view-padding;
        left: 0;
        bottom: 0;
        border-right: 1px solid #eef4f5;
        overflow-y: auto;
        box-sizing: border-box;

        & > ul {
          padding: 0 8px 8px 8px;
        }

        a {
          color: #333;
          display: block;
        }

        // 激活
        .router-link-active {
          color: $color-min;
          background: #eff1f3;
        }

        a, .head {
          height: 40px;
          line-height: 40px;

          &:hover {
            color: $color-min;
          }
        }

        & > ul > li > a {
          padding-left: $view-padding - $link-padding;
          font-size: 16px;
        }

        // 二级菜单
        .sub-nav {
          .head {
            color: #666;
            font-size: 12px;
            padding-left: $view-padding + 10 - $link-padding;
          }

          li > a{
            padding-left: $view-padding + 20 - $link-padding;
          }
        }
      }

      // 子路由
      .doc-content {
        flex: 1;
        padding-left: $pc-menu-width + $view-padding;
      }
    }
  }
  // 移动端
  @media screen and (max-width: $mobile-width) {
    .doc {
      .doc-nav-list,
      .mask {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
      }

      .mask {
        display: block;
        width: 100%;
        position: fixed;
        display: none;
      }

      .doc-nav-list {
        display: none;
        width: 80%;
        background: $color-min;
        z-index: 100;
        overflow-y: auto;

        &,
        a {
          color: #fff;
        }
      }

      .doc-content {
        margin: 0 18px;
      }
    }
  }
</style>

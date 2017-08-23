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
          <router-link exact :to="item.link">{{item.name}}</router-link>
          <!--sub-nav-->
          <div v-if="item.subMenu">
            <ul
              class="sub-nav"
              :key="subIndex"
              v-for="(sub, subIndex) in item.subMenu"
            >
              <div class="head">{{sub.name}}</div>
              <li v-for="components in sub.components" :key="components.name">
                <router-link exact :to="components.link">{{components.name}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="doc-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: 25,
        curNav: '',
        // 菜单
        menu: [
          {
            name: '安装',
            link: '/doc/'
          },
          {
            name: 'hello word',
            link: '/doc/quickstart'
          },
          {
            name: '更新日志',
            link: '/change-log'
          },
          {
            name: '组件',
            link: '/doc/components',
            subMenu: [
              {
                name: '基础组件',
                components: [
                  {
                    name: '按钮',
                    link: '/doc/button'
                  },
                  {
                    name: '图标',
                    link: '/doc/icon'
                  }
                ]
              },
              {
                name: '表单',
                components: [
                  {
                    name: '按钮',
                    link: '/doc/form'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      showNav (index) {
        this.curNav = this.curNav === index ? '' : index
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../assets/scss/var.scss';

  // pc
  @media screen and (min-width: $mobile-width) {
    $link-padding: 10px;

    .doc {
      padding: $view-padding $view-padding 0 0;
      display: flex;

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
          padding: 0 8px;
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
    
  }
</style>

<template>
  <div id="app" @click="isElClick">
    <header>
      <!--侧边栏-->
      <!-- <div class="sidebar-button">
        <i class="x-icon-menu"></i>
      </div> -->
      <div class="logo">
        <router-link to="/">XUI</router-link>
      </div>
      <nav class="pc-nav">
        <router-link v-for="item in nav" :exact="item.link === '/'" :key="item.name" :to="item.link">{{item.name}}</router-link>
      </nav>
      <transition name="scale">
        <nav class="m-nav" ref='m-nav' v-show="showNav">
          <router-link v-for="item in nav" :exact="item.link === '/'" :key="item.name" :to="item.link">{{item.name}}</router-link>
        </nav>
      </transition>
      <!--移动端显示菜单按钮-->
      <div class="toggle-menut" @click.stop="toggleNav">
        <i class="x-icon-more-horizontal"></i>
      </div>
    </header>
     <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        showNav: false,
        nav: [
          {
            name: '首页',
            link: '/'
          },
          {
            name: '文档',
            link: '/doc'
          },
          {
            name: '贡献',
            link: '/doca'
          },
          {
            name: '反馈',
            link: '/docs'
          }
        ]
      }
    },
    methods: {
      isElClick ({ target }) {
        if (this.showNav && this.$refs['m-nav'].contains(target) === false) {
          this.toggleNav()
        }
      },
      toggleNav () {
        this.showNav = !this.showNav
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/var.scss';
  // pc高度
  $pc-header-height: $header-height;
  // 移动端高度
  $m-header-height: 50px;

  #app {
    width: 100%;

    header {
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background: $color-min;
      color: #fff;
      box-sizing: border-box;
      display: flex;
      z-index: 99;

      // logo
      .logo {
        // padding-left: 20px;
        font-family: 'circle';
      }

      a {
        color: #fff;
      }
    }
  }

  // pc端
  @media screen and (min-width: $mobile-width) {
    #app {
      padding-top: $pc-header-height;

      header {
        height: $pc-header-height;
        line-height: $pc-header-height;
        padding: 0 $view-padding;

        // logo
        .logo a {
          font-size: 52px;
          line-height: 55px;
        }

        .pc-nav {
          flex: 1;
          display: block;
          text-align: right;

          a {
            font-size: 16px;
            display: inline-block;
            padding: 0 20px;
            position: relative;
            opacity: 0.9;
            transition: opacity 0.1s;

            &::after {
              content: '';
              width: 100%;
              transition: all 0.3s;
              position: absolute;
              left: 0;
              bottom: 0;
              height: 2px;
              background: #fff;
              display: block;
              transform: scaleX(0);
            }

            &:hover,
            &.router-link-active {
              opacity: 1;

              &::after {
                transform: scaleX(1);
              }
            }
          }
        }

        .m-nav,
        .sidebar-button {
          display: none;
        }

        .toggle-menut {
          display: none;
        }
      }
    }
  }

  // 移动端
  @media screen and (max-width: $mobile-width) {
    $header-padding: 20px;

    #app {
      padding-top: $m-header-height;

      header {
        height: $m-header-height;
        line-height: $m-header-height;
        padding: 0 $header-padding;

        .pc-nav {
          display: none;
        }

        .m-nav {
          position: fixed;
          right: $header-padding + 10;
          top: $m-header-height + 5;
          display: inline-block;
          background: #fff;
          border-radius: 2px;
          box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);

          a {
            padding: 15px 30px;
            display: block;
            color: $color-min;
            line-height: 1;
            font-size: 15px;

            // 选中和按下
            &:active,
            &.active{
              background: #eee;
            }
          }
        }

        // 显示侧边栏按钮
        .sidebar-button {
          margin-right: 25px;
        }

        // 显示菜单按钮
        .sidebar-button,
        .toggle-menut {
          display: block;
          font-size: 28px;
        }

        .logo {
          padding-left: 0;
          font-size: 50px;
          flex: 1;
          text-align: left;
          line-height: 1;
          position: relative;
          top: -6px;
        }
      }
    }
  }

  // 过渡
  .scale-enter-active, .scale-leave-active {
    transition: transform 0.25s;
    transform-origin: 100% 0 0;
  }

  .scale-enter, .scale-leave-to {
    transform: scale(0);
  }
</style>

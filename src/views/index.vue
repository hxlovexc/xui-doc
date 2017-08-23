<template>
  <div class="index-box">
    <div class="hello-box">
      <div class="logo">vue xui</div>
      <p>基于 Vue.js 2.0 轻量 简洁 的 PC端UI 组件库</p>
      <router-link class="hello-link" :to="{ name: 'install' }">立即上手</router-link>
      <!--版本-->
      <span class="version">当前版本：0.1.0-Beta</span>
    </div>
    <!--快速开始-->
    <div class="install">
      <h3 class="x-text-c">npm 安装</h3>
      <source-code class="code" :show-copy="false">npm install xui-vue --save</source-code>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/var.scss';

  .hello-box {
    background: $color-min;
    text-align: center;
    color: #fff;
    // background: url('../assets/images/166809.jpg') no-repeat;
    background: $color-min;
    background-size: cover;
    position: relative;

    & > * {
      position: relative;
      z-index: 9;
    }

    // &::after {
    //   content: '';
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: rgba(0, 0, 0, 0.5);
    // }

    .logo {
      color: #fff;
      font-family: 'circle';
      line-height: 1;
      margin: 0 auto;
    }

    // 按钮
    .hello-link {
      display: inline-block;
      border-radius: 2px;
      transition: border 0.3s, background 0.3s,color 0.3s;
      background: #fff;
      color: $color-min;

      i {
        vertical-align: middle;
        &:before {
          vertical-align: middle;
        }
      }

      span{
        display: inline-block;
        vertical-align: middle;
      }

      &:hover {
        background: #fff;
        color: $color-min;
      }
    }

    // 版本
    .version {
      display: block;
      font-size: 13px;
      margin-top: 10px;
      opacity: 0.85;
    }
  }

  .install {
    h3{
      padding-bottom: 15px;
    }
    
    width: 320px;
    margin: 0 auto;
    padding: 35px 0;
    text-align: center;
  }

  // pc端
  @media screen and (min-width: $mobile-width) {
    .hello-box {
      width: 100%;
      padding: 30px 0;
    }

    .logo {
      padding-top: 25px;
      font-size: 110px;
      font-weight: 500;
    }

    p {
      padding: 25px 0;
      font-size: 16px;
    }

    // 按钮
    .hello-link {
      padding: 0 32px;
      line-height: 45px;
      margin-top: 5px;
      font-size: 16px;

      i{
        font-size: 28px;
        margin-right: 6px;
      }

      span{
        display: inline-block;
        vertical-align: middle;
      }

      &:hover {
        background: #fff;
        color: $color-min;
      }
    }
  }

  // 移动端
  @media screen and (max-width: $mobile-width) {
    .hello-box {
      padding-bottom: 30px;

      .logo {
        padding-top: 0;
        font-size: 80px;
      }

      & > p{
        padding: 25px 20px;
      }
      // 按钮
      .hello-link {
        padding: 8px 25px;
        margin-top: 5px;
        font-size: 14px;

        i {
          font-size: 22px;
          margin-right: 4px;
        }
      }
    }

    .install {
      width: 100%;
      box-sizing: border-box;
      padding: 20px 25px;

      h2 {
        font-size: 30px;
        line-height: 1;
        padding-left: 15px;
        margin-bottom: 20px;
        border-left: 5px solid $color-min;
      }
    }
  }
</style>

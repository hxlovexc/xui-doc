<template>
  <div class="icon">
    <div class="row">
      <h3 class="row-title">icon 图标</h3>
      <p>图标只需要添加对应的 class 就能使用, 所有图标以 x-icon- 开头</p>
      <x-quote>
        <source-code type="html" class="margin-top-10">{{iconDemo}}</source-code>
      </x-quote>
    </div>
    <!--集合-->
    <div class="row">
      <h3 class="row-title">列表</h3>
      <p>点击图标可以复制到剪贴板</p>
      <x-quote>
        <!--列表-->
        <ul class="x-clear-float">
          <li class="icons" @click="copy(item)" v-for="item in icons" :key="item">
            <span>
              <div class="icon-box">
                <i :class="item"></i>
              </div>
              <p>{{item}}</p>
            </span>
          </li>
        </ul>
      </x-quote>
    </div>
  </div>
</template>

<script>
  // icon案例
  import icons from './icon.js';
  import Copy from 'clipboard';
  
  const iconDemo = `<i class="x-icon-alert-circled"></i>`;

  export default {
    data () {
      return {
        icons,
        iconDemo
      };
    },
    methods: {
      copy (item) {
        const clipboard = new Copy('.icons', {
          text () {
            return item;
          }
        });
        // 复制成功
        clipboard.on('success', () => {
          // 销毁
          clipboard.destroy();
          this.$toastr('复制成功!', {
            type: 'success'
          });
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  ul {
    text-align: center;

    li {
      display: inline-block;
      font-size: 12px;
      width: 14.285%;
      height: 120px;
      text-align: center;
      color: #5c6b77;
      cursor: pointer;
      // border: 1px solid #eee;
      // margin-right: -1px;
      // margin-top: -1px;

      &:hover {
        background: #eee;
      }

      &::after,
      & > span {
        content: '';
        display: inline-block;
        vertical-align: middle;
      }

      &::after {
        content: '';
        height: 100%;;
      }

      .icon-box {
        font-size: 30px;
      }

      p {
        margin: 0 6px;
        padding-top: 5px;
      }
    }
  }
</style>


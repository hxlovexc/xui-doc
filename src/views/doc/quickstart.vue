<template>
  <div>
    <div class="row">
      <h3 class="row-title">hello world</h3>
      <h4>在使用 xui 之前，我们已经假设您已经使用过 Vue, 如果没有使用过可以先访问 <a target="_blank" href="https://cn.vuejs.org/"> Vue</a>官网进行学习</h4>
    </div>
    <!--快速上手-->
    <div class="row" v-if="global">
      <!--demo-->
      <h4>demo</h4>
      <source-code>{{demoCode}}</source-code>
    </div></br>

    <!--webpack中使用-->
    <div class="row">
      <h3 class="row-title">webpack中使用</h3>
      <!--引入-->
      <h4>引入vue和xui</h4>
      <source-code>import Vue  from 'vue'
import xui from 'xui-vue'</source-code>
      <!--引入组件库样式-->
      <h4>引入组件库样式</h4>
      <source-code>import 'xui-vue/css/xui.css'</source-code>
      <!--demo-->
      <h4>demo</h4>
      <source-code type="javascript">import Vue  from 'vue'
import xui from 'xui-vue'
import 'xui-vue/css/xui.css'

// 安装
Vue.use(xui);</source-code>
      <p>Vue.use(xui)之后使用组件不在需要进行手动安装</p>
    </div>

    <!--webpack中按需引入-->
    <div class="row" v-if="demand">
      <h3 class="row-title">webpack中按需引入</h3>
      <!--引入-->
      <h4>引入vue</h4>
      <source-code>import Vue  from 'vue'</source-code>
      <!--引入组件库样式-->
      <h4>引入组件库样式</h4>
      <source-code>import 'xui-vue/css/xui.css'</source-code>
      <!--demo-->
      <h4>demo</h4>
      <source-code type="javascript">// 引入需要使用的组件
import xButton from 'xui-vue/src/components/x-button'</source-code>
      <p>所有的组件都在xui-vue/src/components/目录下 - 按需引入需要手动安装</p>
    </div></br>
  </div>
</template>

<script>
  const demoCode =
`<html>
  <head>
  <meta charset="utf-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="//unpkg.com/xui-vue/dist/styles/xui.css">
  </head>
  <body>
    <div id="app">
      <x-quote>{{msg}}</x-quote>
    </div>
    <!-- 先引入 Vue -->
    <script src="//unpkg.com/vue"><\/script>
    <!-- 引入组件库 -->
    <script src="//unpkg.com/xui-vue/dist/xui.min.js"><\/script>
    <script>
      new Vue({
        el:'#app',
        data: {
          // msg
          msg: 'hello world'
        }
      })
    <\/script>
  </body>
</html>`;

  export default {
    data () {
      return {
        demoCode: demoCode,
        demand: false,
        global: false
      };
    }
  };
</script>

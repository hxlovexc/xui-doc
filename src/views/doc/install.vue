<template>
  <div class="install">
    <div class="row">
      <h3 class="row-title">安装</h3>
      <h4>npm or yarn安装</h4>
      <source-code>npm install xui-vue --save or yarn add xui-vue</source-code>
      <p class="margin-b-35">推荐使用 npm 来安装，这样能够更好的使用webpack来配合</p>
      <!--CDN引入-->
      <h4>CDN引入</h4>
      <source-code>{{cdnInstall}}</source-code>
      <p>CDN引入时, 必须在引入xui.js之前先引入Vue2.0</p>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  const cdnInstall =
`<!-- 引入css -->
<link rel="stylesheet" href="//unpkg.com/xui-vue/dist/styles/xui.css">
<!-- 引入xui组件库 -->
<script src="//unpkg.com/xui-vue/dist/xui.min.js"><\/script>`
  
  export default {
    data () {
      return {
        cdnInstall: cdnInstall
      }
    }
  }
</script>

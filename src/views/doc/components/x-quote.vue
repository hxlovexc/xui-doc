<template>
  <div>
    <div class="row">
      <h3 class="row-title">quote 引用</h3>
      <p>引用块</p>
    </div>
    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <x-quote>这个一个默认的引用块</x-quote>
      <source-code type="html" class="margin-top-10">{{base}}</source-code>
    </div>
    <!--颜色分类-->
    <div class="row">
      <!--基础用法-->
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置引用的颜色， 引用有六种类型:
        <span class="highlighted">default, primary, success, warning, danger, dark</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote v-for="item in $types" :key="item" :type="item">类型为 {{item}} 的引用</x-quote>
      <source-code type="html" class="margin-top-10">{{typesQuote}}</source-code>
    </div>
    <!--圆角-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>可以通过 radius 设置引用是否圆角 - 默认<span class="highlighted">false</span></p>
      <x-quote v-for="item in $types" :key="item" radius :type="item">这个一个引用块</x-quote>
      <source-code type="html" class="margin-top-10">{{radiusQuote}}</source-code>
    </div>
    <!--显示背景-->
    <div class="row">
      <h3 class="row-title">显示背景</h3>
      <p>可以通过 show-bg 设置引用是显示背景色 - 默认<span class="highlighted">false</span></p>
      <x-quote v-for="item in $types" :key="item" show-bg :type="item">这个一个引用块</x-quote>
      <source-code type="html" class="margin-top-10">{{showBgQuote}}</source-code>
    </div>

    <!--props-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>props</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-quote>这个一个默认的引用块</x-quote>`;
  // 颜色分类的引用
  const typesQuote =
`<x-quote type="default">类型为 default 的引用</x-quote>
<x-quote type="primary">这个一个的引用块</x-quote>
<x-quote type="success">类型为 success 的引用</x-quote>
<x-quote type="warning">类型为 warning 的引用</x-quote>
<x-quote type="danger">类型为 danger 的引用</x-quote>
<x-quote type="dark">类型为 dark 的引用</x-quote>`;
  // 圆角
  const radiusQuote =
`<x-quote radius type="default">这个一个的引用块</x-quote>
<x-quote radius type="primary">这个一个的引用块</x-quote>
<x-quote radius type="success">这个一个的引用块</x-quote>
<x-quote radius type="warning">这个一个的引用块</x-quote>
<x-quote radius type="danger">这个一个的引用块</x-quote>
<x-quote radius type="dark">这个一个的引用块</x-quote>`;
  // 背景色
  const showBgQuote =
`<x-quote show-bg type="default">这个一个的引用块</x-quote>
<x-quote show-bg type="primary">这个一个的引用块</x-quote>
<x-quote show-bg type="success">这个一个的引用块</x-quote>
<x-quote show-bg type="warning">这个一个的引用块</x-quote>
<x-quote show-bg type="danger">这个一个的引用块</x-quote>
<x-quote show-bg type="dark">这个一个的引用块</x-quote>`;

  export default {
    data () {
      return {
        base,
        typesQuote,
        radiusQuote,
        showBgQuote,
        apiData: [
          {
            attribute: 'type',
            explain: '设置引用类型',
            type: 'String',
            values: 'default | primary | success | warning | danger | dark',
            default: 'default'
          },
          {
            attribute: 'radius',
            explain: '设置引用圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'show-bg',
            explain: '显示引用背景色',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ]
      };
    }
  };
</script>


<template>
  <div>
    <div class="row">
      <h3 class="row-title">badge 徽章</h3>
      <p>用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理</p>
    </div>
    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <x-quote>
        <x-badge>1</x-badge>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置徽章的颜色， 徽章有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span>
      </p>
      <x-quote>
        <div>
          <x-badge class="margin-10" v-for="item in $types" :key="item" :type="item" v-if="item !== 'default'">1</x-badge>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--size分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置徽章的大小， 徽章只有两种大小:
        <span class="highlighted">large(最大), default(默认)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div>
          <x-badge class="margin-10" size="large">1</x-badge>
          <x-badge class="margin-10" size="default">1</x-badge>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{size}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>props</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-badge>1</x-badge>`;

  // 颜色分类
  const types =
`<x-badge type="primary">1</x-badge>
<x-badge type="success">1</x-badge>
<x-badge type="warning">1</x-badge>
<x-badge type="danger">1</x-badge>
<x-badge type="dark">1</x-badge>`;
  
  // 大小分类
  const size =
`<x-badge size="large">1</x-badge>
<x-badge size="default">1</x-badge>`;

  export default {
    data () {
      return {
        base,
        types,
        size,
        apiData: [
          {
            attribute: 'type',
            explain: '设置徽章类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'primary'
          },
          {
            attribute: 'size',
            explain: '设置徽章大小',
            type: 'String',
            values: 'large | default',
            default: 'default'
          }
        ]
      };
    }
  };
</script>


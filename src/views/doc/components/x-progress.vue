<template>
  <div>
    <div class="row">
      <h3 class="row-title">progress 进度条</h3>
      <p>用于展示操作的进度</p>
    </div>

    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <x-quote>
        <x-progress :percentage="60"></x-progress>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--环形进度条-->
    <div class="row">
      <h3 class="row-title">环形进度条</h3>
      <p>可以通过 radius 设置进度条是否圆角 - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <x-progress circle :percentage="60"></x-progress>
        <source-code type="html" class="margin-top-10">{{circle}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置进度条的颜色， 标签有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span>
      </p>
      <x-quote>
        <div v-for="item in $types" :key="item" v-if="item !== 'default'" class="margin-top-10">
          <x-progress :type="item" :percentage="60"></x-progress>
        </div>
        <h4>环形</h4>
        <div>
          <x-progress class="margin-10" :type="item" v-for="item in $types" :key="item" v-if="item !== 'default'" circle :percentage="60"></x-progress>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>可以通过 radius 设置进度条是否圆角 - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <x-progress radius :percentage="60"></x-progress>
        <source-code type="html" class="margin-top-10">{{radius}}</source-code>
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
  // 基础用法
  const base = `<x-progress :percentage="60"></x-progress>`;

  // 颜色分类
  const types =
`<x-progress type="primary" :percentage="60"></x-progress>
<x-progress type="success" :percentage="60"></x-progress>
<x-progress type="warning" :percentage="60"></x-progress>
<x-progress type="danger" :percentage="60"></x-progress>
<x-progress type="dark" :percentage="60"></x-progress>
<!--环形-->
<x-progress type="primary" :percentage="60"></x-progress>
<x-progress type="success" :percentage="60"></x-progress>
<x-progress type="warning" :percentage="60"></x-progress>
<x-progress type="danger" :percentage="60"></x-progress>
<x-progress type="dark" :percentage="60"></x-progress>`;

  // 圆角
  const radius = `<x-progress radius :percentage="60"></x-progress>`;

  // 环形
  const circle = `<x-progress circle :percentage="60"></x-progress>`;

  export default {
    data () {
      return {
        base,
        types,
        radius,
        circle,
        apiData: [
          {
            attribute: 'percentage',
            explain: '设置进度条进度(可以动态修改)',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'circle',
            explain: '设置进度条为环形',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'type',
            explain: '设置标签类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'primary'
          },
          {
            attribute: 'radius',
            explain: '设置进度条为圆角(环形进度条上无效)',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ]
      };
    }
  };
</script>

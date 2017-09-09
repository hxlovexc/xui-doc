<template>
  <div>
    <div class="row">
      <h3 class="row-title">tooltip 文字提示</h3>
      <p>文字提示, 框类 html 中的 title 属性，当鼠标悬浮在元素上时，出现一个文字提示框</p>
      <p>v-tooltip指令又两个可选修饰符, 第一个为方向, 第二个为类型</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>默认方向为 top</p>
      <x-quote>
        <x-button v-tooltip="'我是一个tip'">default</x-button>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">方向分类</h3>
      <p>tooltip提供了四个方向, top, right, bottom, left - 默认top</p>
      <x-quote>
        <x-button v-tooltip.top="'top'">top</x-button>
        <x-button v-tooltip.right="'right'">right</x-button>
        <x-button v-tooltip.bottom="'bottom'">bottom</x-button>
        <x-button v-tooltip.left="'left'">left</x-button>
        <source-code type="html" class="margin-top-10">{{direction}}</source-code>
      </x-quote>
    </div>

    <!--类型-->
    <div class="row">
      <h3 class="row-title">不同类型的tooltip</h3>
      <p>tooltip提供了六种颜色类型, default(不传就是default), primary, success, warning, danger, dark - 默认default</p>
      <x-quote>
        <x-button v-tooltip="'default'">default</x-button>
        <x-button v-tooltip.primary="'primary'">primary</x-button>
        <x-button v-tooltip.success="'success'">success</x-button>
        <x-button v-tooltip.warning="'warning'">warning</x-button>
        <x-button v-tooltip.danger="'danger'">danger</x-button>
        <x-button v-tooltip.dark="'dark'">dark</x-button>
        <source-code type="html" class="margin-top-10">{{direction}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>params</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-button v-tooltip="'我是一个tip'">default</x-button>`;

  // 方向分类
  const direction =
`<x-button v-tooltip.top="'top'">top</x-button>
<x-button v-tooltip.right="'right'">right</x-button>
<x-button v-tooltip.bottom="'bottom'">bottom</x-button>
<x-button v-tooltip.left="'left'">left</x-button>`;

export default {
    data () {
      return {
        base,
        direction,
        apiData: [
          {
            attribute: '.方向',
            explain: '方向可以不传 - 默认 top, 如果传了必须为第一位',
            type: '---',
            values: 'top | right | bottom | left',
            default: 'top'
          },
          {
            attribute: '.类型',
            explain: '通知的标题',
            type: '---',
            values: 'default | primary | success | warning | danger | dark',
            default: 'default'
          }
        ]
      };
    }
  };
</script>

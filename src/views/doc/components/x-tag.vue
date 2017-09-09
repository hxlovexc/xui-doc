<template>
  <div>
    <div class="row">
      <h3 class="row-title">tag 标签</h3>
      <p>对不同事物的属性进行标记和分类</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <x-quote>
        <x-tag>tag</x-tag>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置标签的颜色， 标签有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span>
      </p>
      <x-quote>
        <div>
          <x-tag class="margin-10" v-for="item in $types" :key="item" :type="item" v-if="item !== 'default'">{{item}}</x-tag>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <h3 class="row-title">取消圆角</h3>
      <p>可以通过设置 radius 为 false 取消标签的圆角</p>
      <x-quote>
        <x-tag :radius="false">tag</x-tag>
        <source-code type="html" class="margin-top-10">{{noRadius}}</source-code>
      </x-quote>
    </div>

    <!--size分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置标签的大小， 标签只有两种大小:
        <span class="highlighted">large(最大), default(默认)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div>
          <x-tag class="margin-10" size="large">大的</x-tag>
          <x-tag class="margin-10" size="default">默认</x-tag>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{size}}</source-code>
      </x-quote>
    </div>

    <!--空心-->
    <div class="row">
      <h3 class="row-title">空心</h3>
      <p>可以通过 hollow 设置标签为空心 - 默认false</p>
      <x-quote>
        <div>
          <x-tag class="margin-10" hollow v-for="item in $types" :key="item" :type="item" v-if="item !== 'default'">{{item}}</x-tag>
        </div>
        <source-code type="html" class="margin-top-10">{{hollow}}</source-code>
      </x-quote>
    </div>

    <!--可关闭-->
    <div class="row">
      <h3 class="row-title">可关闭</h3>
      <p>
        可以通过设置 closable 让标签可以关闭, 点击后会执行<span class="highlighted">close</span>事件</p>
      <x-quote>
        <div>
          <x-tag class="margin-10" @close="tagClick(item)" closable v-for="item in $types" :key="item" :type="item" v-if="item !== 'default'">{{item}}</x-tag>
        </div>
        <source-code type="html" class="margin-top-10">{{closable}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>props</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>
      <!--events-->
      <h4>events</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-tag>tag</x-tag>`;

  // 颜色分类
  const types =
`<x-tag type="default">default</x-tag>
<x-tag type="primary">primary</x-tag>
<x-tag type="success">success</x-tag>
<x-tag type="warning">warning</x-tag>
<x-tag type="danger">danger</x-tag>
<x-tag type="dark">dark</x-tag>`;

  // 取消圆角
  const noRadius = `<x-tag :radius="false">tag</x-tag>`;

  // 大小分类
  const size =
`<x-tag size="large">大的</x-tag>
<x-tag size="default">默认</x-tag>`;

  // 空心分类
  const hollow =
`<x-tag type="default" hollow>default</x-tag>
<x-tag type="primary" hollow>primary</x-tag>
<x-tag type="success" hollow>success</x-tag>
<x-tag type="warning" hollow>warning</x-tag>
<x-tag type="danger" hollow>danger</x-tag>
<x-tag type="dark" hollow>dark</x-tag>`;

  // 显示关闭标签
  const closable =
`<x-tag closable @close="close" type="default">default</x-tag>
<x-tag closable @close="close" type="primary">primary</x-tag>
<x-tag closable @close="close" type="success">success</x-tag>
<x-tag closable @close="close" type="warning">warning</x-tag>
<x-tag closable @close="close" type="danger">danger</x-tag>
<x-tag closable @close="close" type="dark">dark</x-tag>`;

  export default {
    data () {
      return {
        base,
        size,
        types,
        hollow,
        closable,
        noRadius,
        apiData: [
          {
            attribute: 'type',
            explain: '设置标签类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'primary'
          },
          {
            attribute: 'radius',
            explain: '设置标签为圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'size',
            explain: '设置标签大小',
            type: 'String',
            values: 'large | default',
            default: 'default'
          },
          {
            attribute: 'hollow',
            explain: '设置标签为空心',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'closable',
            explain: '让标签可关闭',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'close',
            explain: '标签点击关闭执行的事件(使用这个事件时closable必须为true)',
            params: 'event'
          }
        ]
      };
    },
    methods: {
      tagClick (type) {
        alert(type);
      }
    }
  };
</script>


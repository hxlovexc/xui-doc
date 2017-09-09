<template>
  <div>
    <div class="row">
      <h3 class="row-title">alert 警告提示</h3>
      <p>用于展示页面中需要提示用户关注的信息</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <x-quote>
        <x-alert>警告: 赶紧修复bug 不然下不了班</x-alert>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--分类-->
    <div class="row">
      <h3 class="row-title">分类</h3>
      <p>可以通过 type 属性设置不同类型 总共有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $types" :key="item" v-if="item !== 'default'">
          <x-alert :type="item">警告: 赶紧修复bug 不然下不了班</x-alert>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--隐藏图标-->
    <div class="row">
      <h3 class="row-title">隐藏图标</h3>
      <p>可以通过  show-icon 属性隐藏图标</p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $types" :key="item" v-if="item !== 'default'">
          <x-alert :show-icon="false" :type="item">警告: 赶紧修复bug 不然下不了班</x-alert>
        </div>
        <source-code type="html" class="margin-top-10">{{hideIcon}}</source-code>
      </x-quote>
    </div>

    <!--自定义图标-->
    <div class="row">
      <h3 class="row-title">自定义图标</h3>
      <p>可以通过  icon 属性设置图标</p>
      <x-quote>
        <x-alert icon="x-icon-fireball">警告: 赶紧修复bug 不然下不了班</x-alert>
        <source-code type="html" class="margin-top-10">{{icon}}</source-code>
      </x-quote>
    </div>

    <!--带标题的警告-->
    <div class="row">
      <h3 class="row-title">带标题的警告</h3>
      <p>可以通过  title 属性设置弹窗标题</p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $types" :key="item" v-if="item !== 'default'">
          <x-alert title="一级警告" :type="item">警告: 赶紧修复bug 不然下不了班</x-alert>
        </div>
        <source-code type="html" class="margin-top-10">{{title}}</source-code>
      </x-quote>
    </div>

    <!--可关闭的警告提示-->
    <div class="row">
      <h3 class="row-title">可关闭的警告</h3>
      <p>可以通过 closable 属性开启关闭按钮</p>
      <x-quote>
        <div class="margin-top-10">
          <x-alert closable>警告: 赶紧修复bug 不然下不了班</x-alert>
        </div>
        <div class="margin-top-10">
          <x-alert closable title="一级警告" >警告: 赶紧修复bug 不然下不了班</x-alert>
        </div>
        <source-code type="html" class="margin-top-10">{{closable}}</source-code>
      </x-quote>
    </div>

    <!--关闭事件-->
    <div class="row">
      <h3 class="row-title">关闭事件</h3>
      <p>close事件, 在点击关闭的时候执行</p>
      <x-quote>
        <div class="margin-top-10">
          <x-alert closable @close="close">警告: 赶紧修复bug 不然下不了班</x-alert>
        </div>
        <source-code type="html" class="margin-top-10">{{closeDemo}}</source-code>
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
  const base = `<x-alert>警告: 赶紧修复bug 不然下不了班</x-alert>`;

  // 类型
  const types =
`<x-alert type="primary">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="success">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="warning">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="danger">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="dark">警告: 赶紧修复bug 不然下不了班</x-alert>`;

  // 隐藏图标
  const hideIcon =
`<x-alert type="primary" :show-icon="false">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="success" :show-icon="false">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="warning" :show-icon="false">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="danger" :show-icon="false">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="dark" :show-icon="false">警告: 赶紧修复bug 不然下不了班</x-alert>`;

  // 自定义图标
  const icon = `<x-alert icon="x-icon-fireball">警告: 赶紧修复bug 不然下不了班</x-alert>`;

  // 带标题
  const title =
`<x-alert type="primary" title="一级警告">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="success" title="一级警告">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="warning" title="一级警告">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="danger" title="一级警告">警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert type="dark" title="一级警告">警告: 赶紧修复bug 不然下不了班</x-alert>`;

  // 可以关闭
  const closable =
`<x-alert closable>警告: 赶紧修复bug 不然下不了班</x-alert>
<x-alert closable title="一级警告" >警告: 赶紧修复bug 不然下不了班</x-alert>`;

  // 关闭
  const closeDemo =
`<template>
  <x-alert closable @close="close">警告: 赶紧修复bug 不然下不了班</x-alert>
</template>

<script>
  export default {
    methods: {
      close () {
        alert('点击了关闭');
      }
    }
  };
<\/script>`;
  
  export default {
    data () {
      return {
        base,
        types,
        hideIcon,
        icon,
        title,
        closable,
        closeDemo,
        apiData: [
          {
            attribute: 'type',
            explain: '设置警告框类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'primary'
          },
          {
            attribute: 'show-icon',
            explain: '显示图标',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'icon',
            explain: '自定义图标 - 图标的class',
            type: 'String',
            values: '----',
            default: '----'
          },
          {
            attribute: 'title',
            explain: '警告框的标题',
            type: 'String',
            values: '----',
            default: '----'
          },
          {
            attribute: 'closable',
            explain: '让警告框可关闭',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'close',
            explain: '警告框关闭时执行的事件(使用这个事件时closable必须为true)',
            params: 'event'
          }
        ]
      };
    },
    methods: {
      close () {
        alert('点击了关闭');
      }
    }
  };
</script>

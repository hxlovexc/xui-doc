<template>
  <div>
    <div class="row">
      <h3 class="row-title">textarea 文本域</h3>
      <p>textarea输入框，用于输入多行文本</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>基础输入框，默认宽度 100%</p>
      <x-quote>
        <x-textarea placeholder="请输入内容"></x-textarea>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--行内textarea-->
    <div class="row">
      <h3 class="row-title">行内textarea</h3>
      <p>可以通过 inline 属性设置textarea为行内元素 - 默认宽度420px</p>
      <x-quote>
        <x-textarea inline placeholder="请输入内容"></x-textarea>
        <source-code type="html" class="margin-top-10">{{inline}}</source-code>
      </x-quote>
    </div>

    <!--最大数量限制-->
    <div class="row">
      <h3 class="row-title">限制文字数量</h3>
      <p>可以通过 max 属性限制textarea字数</p>
      <x-quote>
        <x-textarea :max="10" placeholder="请输入内容"></x-textarea>
        <source-code type="html" class="margin-top-10">{{max}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置textarea的颜色， input有六种类型:
        <span class="highlighted">default, primary, success, warning, danger, dark</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $types" :key="item">
          <x-textarea :type="item" placeholder="请输入内容"></x-textarea>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--大小分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置textarea的大小， input有三种大小:
        <span class="highlighted">large(最大), default(默认), small(小的)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item" v-if="item !== 'mini'">
          <x-textarea :size="item" placeholder="请输入内容"></x-textarea>
        </div>
        <source-code type="html" class="margin-top-10">{{size}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>可以通过 radius 设置textarea是否圆角 - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <x-textarea radius placeholder="请输入内容"></x-textarea>
        <source-code type="html" class="margin-top-10">{{radius}}</source-code>
      </x-quote>
    </div>

    <!--禁用状态-->
    <div class="row">
      <h3 class="row-title">禁用状态</h3>
      <p>可以通过 disabled 属性禁用textarea - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <div class="margin-top-10">
          <x-textarea disabled placeholder="请输入内容"></x-textarea>
        </div>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>props</h4>
      <api-table :data="props" :keys="$propsKeys"></api-table>
      <!--events-->
      <h4>events</h4>
      <api-table :data="events" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-textarea placeholder="请输入内容" v-model="msg"></x-textarea>`;

  // inline
  const inline = `<x-textarea inline placeholder="请输入内容"></x-textarea>`;

  // 字数限制
  const max = `<x-textarea :max="10" placeholder="请输入内容"></x-textarea>`;

  // 颜色分类
  const types =
`<x-textarea type="default" placeholder="请输入内容"></x-textarea>
<x-textarea type="primary" placeholder="请输入内容"></x-textarea>
<x-textarea type="success" placeholder="请输入内容"></x-textarea>
<x-textarea type="warning" placeholder="请输入内容"></x-textarea>
<x-textarea type="danger" placeholder="请输入内容"></x-textarea>
<x-textarea type="dark" placeholder="请输入内容"></x-textarea>`;

  const size =
`<x-textarea size="large" placeholder="请输入内容"></x-textarea>
<x-textarea size="default" placeholder="请输入内容"></x-textarea>
<x-textarea size="small" placeholder="请输入内容"></x-textarea>`;

  // 圆角
  const radius = `<x-textarea radius placeholder="请输入内容"></x-textarea>`;

  // 禁用
  const disabled = `<x-textarea disabled placeholder="请输入内容"></x-textarea>`;

  export default {
    data () {
      return {
        base,
        inline,
        max,
        types,
        size,
        radius,
        disabled,
        props: [
          {
            attribute: 'v-model',
            explain: '数据双向绑定的值',
            type: 'Number | String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'placeholder',
            explain: '文本占位符',
            type: 'String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'inline',
            explain: '设置input为行内元素 - 默认宽度420px',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'max',
            explain: '限制输入字数',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'type',
            explain: '设置input颜色类型',
            type: 'String',
            values: 'default | primary | success | warning | danger | dark',
            default: 'default'
          },
          {
            attribute: 'size',
            explain: '设置input大小',
            type: 'String',
            values: 'large | default | small',
            default: 'default'
          },
          {
            attribute: 'radius',
            explain: '设置input为圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'disabled',
            explain: '禁用状态',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // 事件
        events: [
          {
            events: 'change',
            explain: '滑动的时候value值发生了变化时触发',
            params: 'value: input值, target: input对象'
          },
          {
            events: 'focus',
            explain: '获取光标时触发',
            params: 'value: input值, target: input对象'
          },
          {
            events: 'blur',
            explain: '失去光标时候触发',
            params: 'value: input值, target: input对象'
          }
        ]
      };
    }
  };
</script>

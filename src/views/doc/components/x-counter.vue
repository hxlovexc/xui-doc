<template>
  <div>
    <div class="row">
      <h3 class="row-title">counter 计数器</h3>
      <p>计数器, 可定义范围</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <x-quote>
        <x-counter v-model="value"></x-counter>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>
    
    <!--size分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置大小， 计数器有三种大小:
        <span class="highlighted">large(最大), default(默认), small(小的)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-10 x-inline" v-if="item !== 'mini'" v-for="item in $size" :key="item">
          <x-counter :size="item"></x-counter>
        </div>
        <source-code type="html" class="margin-top-10">{{size}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>可以通过 type 属性修改计数器颜色类型 计数器有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span></p>
      <x-quote>
        <div class="margin-10 x-inline" v-for="item in $types" v-if="item !== 'default'" :key="item">
          <x-counter :type="item"></x-counter>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--限制最大和最小数-->
    <div class="row">
      <h3 class="row-title">限制最大和最小数</h3>
      <p>可以通过设置 max 和 min 限制最大值和最小值</p>
      <x-quote>
        <div class="margin-10">
          <x-counter v-model="value2" :max="50" :min="10"></x-counter>
        </div>
        <source-code type="html" class="margin-top-10">{{confine}}</source-code>
      </x-quote>
    </div>

    <!--禁用-->
    <div class="row">
      <h3 class="row-title">禁用</h3>
      <p>可以设置 disabled 开启禁用状态</p>
      <x-quote>
        <div class="margin-10">
          <x-counter disabled></x-counter>
        </div>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>计数器值发生改变的时候执行</p>
      <x-quote>
        <div class="margin-top-10">
          <x-counter @change="change"></x-counter>
        </div>
        <source-code type="html" class="margin-top-10">{{changeText}}</source-code>
      </x-quote>
    </div>

    <!--props-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-counter props</h4>
      <api-table :data="counterProps" :keys="$propsKeys"></api-table>

      <h4>x-counter events</h4>
      <api-table :data="counterEvent" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-counter v-model="value"></x-counter>`;

  // size分类
  const size =
`<x-counter v-model="value" size="large"></x-counter>
<x-counter v-model="value" size="default"></x-counter>
<x-counter v-model="value" size="small"></x-counter>`;

  // 类型
  const types =
`<x-counter type="primary"></x-counter>
<x-counter type="success"></x-counter>
<x-counter type="warning"></x-counter>
<x-counter type="danger"></x-counter>
<x-counter type="dark"></x-counter>`;

  // 限制
  const confine = `<x-counter v-model="value2" :max="50" :min="10"></x-counter>`;

  // 禁用
  const disabled = `<x-counter v-model="value" disabled></x-counter>`;

  // change
  const changeText = `<x-counter @change="change"></x-counter>`;
  
  export default {
    data () {
      return {
        base,
        size,
        types,
        confine,
        disabled,
        changeText,
        value: 0,
        value2: 10,
        counterProps: [
          {
            attribute: 'v-model',
            explain: '计数器双向绑定的值',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'size',
            explain: '设置计数器大小',
            type: 'String',
            values: 'large | default | small',
            default: 'default'
          },
          {
            attribute: 'type',
            explain: '设置计数器颜色类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'primary'
          },
          {
            attribute: 'max',
            explain: '计数器最大值',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'min',
            explain: '计数器最小值',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'disabled',
            explain: '禁用计数器',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        counterEvent: [
          {
            events: 'change',
            explain: '计数器值发生变化的时候执行',
            params: 'value: 当前计数器的值'
          }
        ]
      };
    },
    methods: {
      change (val) {
        alert(val);
      }
    }
  };
</script>

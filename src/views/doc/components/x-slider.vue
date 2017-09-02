<template>
  <div>
    <div class="row">
      <h3 class="row-title">slider 滑动条</h3>
      <p>用于控制用户在规定的数值区间内进行选择</p>
    </div>

    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <x-quote>
        <h5>当前的值是： {{slider}}</h5>
        <x-slider v-model="slider"></x-slider>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置颜色， 总共有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
         - 默认 <span class="highlighted">primary</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $types" :key="item" v-if="item !== 'default'">
          <x-slider :type="item"></x-slider>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--范围选择-->
    <div class="row">
      <h3 class="row-title">范围选择</h3>
      <p>可以通过设置 range 开启选取某段范围内的值</p>
      <x-quote>
        <x-slider range v-model="rangeVal"></x-slider>
        <source-code type="html" class="margin-top-10">{{range}}</source-code>
      </x-quote>
    </div>

    <!--限制取值范围-->
    <div class="row">
      <h3 class="row-title">限制取值范围</h3>
      <p>可以设置 min 和 max 来控制最小和最大范围</p>
      <x-quote>
        <x-slider range :min="5" :max="60" v-model="confineVal"></x-slider>
        <source-code type="html" class="margin-top-10">{{limit}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>滑动的时候value值发生了变化时触发</p>
      <x-quote>
        <x-slider @change="change"></x-slider>
        <source-code type="html" class="margin-top-10">{{sliderChange}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-tabs props</h4>
      <api-table :data="props" :keys="$propsKeys"></api-table>
      <!--events-->
      <h4>events</h4>
      <api-table :data="events" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-useless-escape */
  const base = `<x-slider v-model="slider"></x-slider>`;

  // 颜色分类
  const types =
`<x-slider type="primary">primary</x-slider>
<x-slider type="success">success</x-slider>
<x-slider type="warning">warning</x-slider>
<x-slider type="danger">danger</x-slider>
<x-slider type="dark">dark</x-slider>`;

  // range
  const range = `<x-slider range v-model="rangeVal"></x-slider>`;

  // 限制范围
  const limit = `<x-slider :min="5" :max="60" v-model="rangeVal"></x-slider>`;

  // change
  const sliderChange =
`<template>
  <x-slider @change="change"></x-slider>
</template>

<script>
  export default {
    methods: {
      change (value) {
        console.log(value);
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        types,
        range,
        limit,
        sliderChange,
        slider: 0,
        rangeVal: [10, 50],
        confineVal: [5, 30],
        props: [
          {
            attribute: 'v-model',
            explain: '当前选中的值',
            type: 'number',
            values: '---',
            default: 'number'
          },
          {
            attribute: 'type',
            explain: '设置滑动条类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'primary'
          },
          {
            attribute: 'range',
            explain: '开启范围选择',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'min',
            explain: '设置最小取值',
            type: 'Number',
            values: '0',
            default: '0'
          },
          {
            attribute: 'min',
            explain: '设置最大取值',
            type: 'Number',
            values: '---',
            default: '100'
          }
        ],
        // 事件
        events: [
          {
            events: 'change',
            explain: '滑动的时候value值发生了变化时触发 - （接收当前值）',
            params: 'value'
          }
        ]
      };
    },
    methods: {
      change (value) {
        console.log(value);
      }
    }
  };
</script>

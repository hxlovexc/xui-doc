<template>
  <div>
    <div class="row">
      <h3 class="row-title">checkbox 多选框</h3>
      <p>用于一组可选项多项选择</p>
    </div>

    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <p>单个的情况下未设置 label 则返回的是Boolean值 如果设置了 label 选中状态下返回的是 label</p>
      <x-quote>
        <div class="margin-top-10">
          <x-checkbox v-model="isChecked">{{isChecked}}</x-checkbox>
        </div>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--多选-->
    <div class="row">
      <h3 class="row-title">多选</h3>
      <p>多选情况下必须使用 x-checkbox-group 组件进行包裹, 并且 v-model 的类型为Array</p>
      <x-quote>
        <div class="margin-top-10">
          <p>当前选中的值是：{{checkbox}}</p>
          <x-checkbox-group v-model="checkbox">
            <x-checkbox :label="1">选项一</x-checkbox>
            <x-checkbox :label="2">选项二</x-checkbox>
            <x-checkbox :label="3">选项三</x-checkbox>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{group}}</source-code>
      </x-quote>
    </div>

    <!--按钮样式-->
    <div class="row">
      <h3 class="row-title">按钮样式</h3>
      <p>按钮样式的多选框</p>
      <x-quote>
        <div class="margin-top-10">
          <x-checkbox-group>
            <x-checkbox-button :label="1">选项一</x-checkbox-button>
            <x-checkbox-button :label="2">选项二</x-checkbox-button>
            <x-checkbox-button :label="3">选项二</x-checkbox-button>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{buttonStyle}}</source-code>
      </x-quote>
    </div>

    <!--按钮样式-圆角-->
    <div class="row">
      <h3 class="row-title">按钮样式-圆角</h3>
      <p>radius 只在按钮样式的多选框下生效</p>
      <x-quote>
        <div class="margin-top-10">
          <x-checkbox-group radius>
            <x-checkbox-button :label="1">选项一</x-checkbox-button>
            <x-checkbox-button :label="2">选项二</x-checkbox-button>
            <x-checkbox-button :label="3">选项二</x-checkbox-button>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{buttonStyleRadius}}</source-code>
      </x-quote>
    </div>

    <!--按钮样式size分类-->
    <div class="row">
      <h3 class="row-title">按钮样式size分类</h3>
      <p>
        可以通过 size 属性设置大小， 标签只有四种大小:
        <span class="highlighted">large(最大), default(默认), small(小的), mini(mini) - size只在按钮样式的多选框中有效</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item">
          <x-checkbox-group :size="item">
            <x-checkbox-button :label="1">选项一</x-checkbox-button>
            <x-checkbox-button :label="2">选项二</x-checkbox-button>
            <x-checkbox-button :label="3">选项二</x-checkbox-button>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{buttonStyleSize}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>可以给 x-checkbox-group 或者 x-checkbox组件设置 type 属性修改多选框的颜色 多选框有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span></p>
      <x-quote>
        <x-checkbox-group v-model="checkbox3">
          <x-checkbox v-for="item in $types" v-if="item !== 'default'" :key="item" :type="item" :label="item">{{item}}</x-checkbox>
        </x-checkbox-group>
        <div class="margin-top-10" v-for="item in $types" v-if="item !== 'default'" :key="item">
          <x-checkbox-group v-model="checkbox3" :type="item">
            <x-checkbox-button v-for="item in $types" :label="item" v-if="item !== 'default'" :key="item">{{item}}</x-checkbox-button>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--默认选中-->
    <div class="row">
      <h3 class="row-title">默认选中</h3>
      <p>除了通过给v-model设置值以外还可以可以通过 checked 属性设置默认选中</p>
      <x-quote>
        <div class="margin-top-10">
          <x-checkbox-group v-model="checkedVal">
            <x-checkbox :label="1">选项一</x-checkbox>
            <x-checkbox checked :label="2">默认选中</x-checkbox>
            <x-checkbox :label="3">选项二</x-checkbox>
          </x-checkbox-group>
        </div>
        <div class="margin-top-10">
          <x-checkbox-group v-model="checkedVal">
            <x-checkbox-button :label="1">选项一</x-checkbox-button>
            <x-checkbox-button checked :label="2">默认选中</x-checkbox-button>
            <x-checkbox-button :label="3">选项二</x-checkbox-button>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{checked}}</source-code>
      </x-quote>
    </div>

    <!--禁用状态-->
    <div class="row">
      <h3 class="row-title">禁用状态</h3>
      <p>可以通过 disabled 属性禁用多选框</p>
      <x-quote>
        <div class="margin-top-10">
          <x-checkbox-group v-model="disabledVal">
            <x-checkbox :label="1">选项一</x-checkbox>
            <x-checkbox disabled :label="2">我被禁用了</x-checkbox>
            <x-checkbox checked disabled :label="3">选中禁用</x-checkbox>
          </x-checkbox-group>
        </div>
        <div class="margin-top-10">
          <x-checkbox-group v-model="disabledVal">
            <x-checkbox-button :label="1">选项一</x-checkbox-button>
            <x-checkbox-button disabled :label="2">我被禁用了</x-checkbox-button>
            <x-checkbox-button checked disabled :label="3">选项二</x-checkbox-button>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>多选框状态改变的时候执行 可以将change事件绑定在x-checkbox-group上这样不用每个x-checkbox上进行绑定</p>
      <x-quote>
        <div class="margin-top-10">
          <x-checkbox @change="change1F" :label="1">选项一</x-checkbox>
        </div>
        <div class="margin-top-10">
          <x-checkbox-group v-model="change2" @change="change1F">
            <x-checkbox-button :label="1">选项一</x-checkbox-button>
            <x-checkbox-button :label="2">选项二</x-checkbox-button>
          </x-checkbox-group>
        </div>
        <source-code type="html" class="margin-top-10">{{change}}</source-code>
      </x-quote>
    </div>

    <!--props-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-checkbox props</h4>
      <api-table :data="radioProps" :keys="$propsKeys"></api-table>

      <h4>x-checkbox-group props</h4>
      <api-table :data="radioGroupProps" :keys="$propsKeys"></api-table>

      <!--events-->
      <h4>x-checkbox events</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>

      <h4>x-checkbox-button events</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-checkbox v-model="value">{{value}}</x-checkbox>`;

  // group
  const group =
`<p>当前选中的值是：{{value}}</p>
<x-checkbox-group v-model="value">
  <x-checkbox :label="1">选项一</x-checkbox>
  <x-checkbox :label="2">选项二</x-checkbox>
  <x-checkbox :label="3">选项三</x-checkbox>
</x-checkbox-group>`;

  const buttonStyle =
`<x-checkbox-group v-model="value">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
  <x-checkbox-button :label="3">选项二</x-checkbox-button>
</x-checkbox-group>`;

  const buttonStyleRadius =
`<x-checkbox-group radius>
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
  <x-checkbox-button :label="3">选项二</x-checkbox-button>
</x-checkbox-group>`;

  // 按钮样式大小分类
  const buttonStyleSize =
`<!--large-->
<x-checkbox-group v-model="value" size="large">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
  <x-checkbox-button :label="3">选项二</x-checkbox-button>
</x-checkbox-group>
<!--default-->
<x-checkbox-group v-model="value" size="default">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
  <x-checkbox-button :label="3">选项二</x-checkbox-button>
</x-checkbox-group>
<!--small-->
<x-checkbox-group v-model="value" size="small">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
  <x-checkbox-button :label="3">选项二</x-checkbox-button>
</x-checkbox-group>
<!--mini-->
<x-checkbox-group v-model="value" size="mini">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
  <x-checkbox-button :label="3">选项二</x-checkbox-button>
</x-checkbox-group>`;

  // 类型
  const types =
`<x-checkbox label="primary" type="primary">primary</x-checkbox>
<x-checkbox label="success" type="success">success</x-checkbox>
<x-checkbox label="warning" type="warning">warning</x-checkbox>
<x-checkbox label="danger" type="danger">danger</x-checkbox>
<x-checkbox label="dark" type="dark">dark</x-checkbox>

<!--也可以直接给x-checkbox-group设置 type-->
<x-checkbox-group v-model="value" type="primary">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
</x-checkbox-group>
<x-checkbox-group v-model="value" type="success">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
</x-checkbox-group>
<x-checkbox-group v-model="value" type="warning">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
</x-checkbox-group>
<x-checkbox-group v-model="value" type="danger">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
</x-checkbox-group>
<x-checkbox-group v-model="value" type="dark">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
</x-checkbox-group>`;

  // 默认选中
  const checked =
`<x-checkbox-group v-model="value">
  <x-checkbox :label="1">选项一</x-checkbox>
  <x-checkbox checked :label="2">默认选中</x-checkbox>
  <x-checkbox :label="3">选项二</x-checkbox>
</x-checkbox-group>

<!--按钮样式-->
<x-checkbox-group v-model="value">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button checked :label="2">默认选中</x-checkbox-button>
  <x-checkbox-button :label="3">选项二</x-checkbox-button>
</x-checkbox-group>`;

  // 禁用
  const disabled =
`<x-checkbox-group v-model="value">
  <x-checkbox :label="1">选项一</x-checkbox>
  <x-checkbox disabled :label="2">我被禁用了</x-checkbox>
  <x-checkbox checked disabled :label="3">选中禁用</x-checkbox>
</x-checkbox-group>

<!--按钮样式-->
<x-checkbox-group v-model="value">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button disabled :label="2">我被禁用了</x-checkbox-button>
  <x-checkbox-button checked disabled :label="3">选中禁用</x-checkbox-button>
</x-checkbox-group>`;

  // change
  const change =
`<x-checkbox @change="change" :label="1">选项一</x-checkbox>

<!--按钮组监听change-->
<x-checkbox-group v-model="value" @change="change">
  <x-checkbox-button :label="1">选项一</x-checkbox-button>
  <x-checkbox-button :label="2">选项二</x-checkbox-button>
</x-checkbox-group>`;

  export default {
    name: 'ahaaa',
    data () {
      return {
        base,
        group,
        buttonStyle,
        buttonStyleRadius,
        buttonStyleSize,
        types,
        checked,
        disabled,
        change,
        isChecked: true,
        checkbox: [],
        groupVal: [],
        checkbox3: ['primary'],
        checkedVal: [],
        disabledVal: [],
        changeA: [],
        change2: [],
        // api
        radioProps: [
          {
            attribute: 'v-model',
            explain: '多选框当前值',
            type: 'String | Number | Boolean',
            values: '---',
            default: '---'
          },
          {
            attribute: 'label',
            explain: '多选框的value值',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'checked',
            explain: '默认选中',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'type',
            explain: '设置多选框颜色类型',
            type: 'String',
            values: 'default | primary | success | warning | danger | dark',
            default: 'default'
          },
          {
            attribute: 'disabled',
            explain: '禁用',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        radioGroupProps: [
          {
            attribute: 'v-model',
            explain: '多选框当前值 - 如果x-checkbox-group设置了 v-model 后下面的radio则不需要在进行设置',
            type: 'String | Number | Boolean',
            values: '---',
            default: '---'
          },
          {
            attribute: 'type',
            explain: '设置多选框颜色类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'default'
          },
          {
            attribute: 'size',
            explain: '设置多选框大小',
            type: 'String',
            values: 'large | default | small | mini',
            default: 'default'
          },
          {
            attribute: 'radius',
            explain: '设置按钮样式多选框圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // 按钮样式
        radioButtonProps: [
          {
            attribute: 'label',
            explain: '多选框的value值',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'checked',
            explain: '默认选中',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'disabled',
            explain: '禁用',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'change',
            explain: '状态发生变化时候触发',
            params: 'value: 当前选中的值'
          }
        ]
      };
    },
    methods: {
      change1F (val) {
        alert(`当前选中的值为: ${JSON.stringify(val)}`);
      }
    }
  };
</script>

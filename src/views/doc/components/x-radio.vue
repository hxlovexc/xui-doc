<template>
  <div>
    <div class="row">
      <h3 class="row-title">radio 单选框</h3>
      <p>用于一组可选项单项选择</p>
    </div>
    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <p>如果不使用 x-radio-group 组件则每个x-radio组件上都需要添加 v-model - 如果多个选项建议使用x-radio-group组件包裹</p>
      <x-quote>
        <x-radio v-model="radio" :label="1">选项一</x-radio>
        <x-radio v-model="radio" :label="2">选项二</x-radio>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--x-radio-group-->
    <div class="row">
      <h3 class="row-title">x-radio-group组件</h3>
      <p>使用 x-radio-group 组件后只需要给x-radio-group 添加 v-model</p>
      <x-quote>
        <x-radio-group v-model="radio2">
          <x-radio :label="1">选项一</x-radio>
          <x-radio :label="2">选项二</x-radio>
        </x-radio-group>
        <source-code type="html" class="margin-top-10">{{group}}</source-code>
      </x-quote>
    </div>

    <!--组合按钮-->
    <div class="row">
      <h3 class="row-title">组合按钮</h3>
      <p>按钮样式的单选框</p>
      <x-quote>
        <x-radio-group v-model="radioButton">
          <x-radio-button :label="1">选项一</x-radio-button>
          <x-radio-button :label="2">选项二</x-radio-button>
          <x-radio-button :label="3">选项二</x-radio-button>
        </x-radio-group>
        <source-code type="html" class="margin-top-10">{{buttonStyle}}</source-code>
      </x-quote>
    </div>

    <!--按钮样式size分类-->
    <div class="row">
      <h3 class="row-title">按钮样式size分类</h3>
      <p>
        可以通过 size 属性设单选框钮样式但选矿的大小， 标签只有四种种大小:
        <span class="highlighted">large(最大), default(默认), small(小的), mini(mini) - size只在按钮样式的单选框中有效</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item">
          <x-radio-group v-model="radioButton" :size="item">
            <x-radio-button :label="1">选项一</x-radio-button>
            <x-radio-button :label="2">选项二</x-radio-button>
            <x-radio-button :label="3">选项二</x-radio-button>
          </x-radio-group>
        </div>
        <source-code type="html" class="margin-top-10">{{buttonStyleSize}}</source-code>
      </x-quote>
    </div>

    <!--按钮样式圆角-->
    <div class="row">
      <h3 class="row-title">按钮样式圆角</h3>
      <p>可以通过 radius 属性设单选框钮样式单选框为圆角</p>
      <x-quote>
        <div class="margin-top-10">
          <x-radio-group v-model="radioRadius" radius>
            <x-radio-button :label="1">选项一</x-radio-button>
            <x-radio-button :label="2">选项二</x-radio-button>
            <x-radio-button :label="3">选项二</x-radio-button>
          </x-radio-group>
        </div>
        <source-code type="html" class="margin-top-10">{{buttonStyleRadius}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>可以给 x-radio-group 或者 x-radio组件设置 type 属性修改单选框的颜色 单选框有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span></p>
      <x-quote>
        <x-radio-group v-model="radio3">
          <x-radio v-for="item in $types" v-if="item !== 'default'" :key="item" :type="item" :label="item">{{item}}</x-radio>
        </x-radio-group>
        <div class="margin-top-10" v-for="item in $types" v-if="item !== 'default'" :key="item">
          <x-radio-group v-model="radio3" :type="item">
            <x-radio-button v-for="item in $types" :label="item" v-if="item !== 'default'" :key="item">{{item}}</x-radio-button>
          </x-radio-group>
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
          <x-radio-group v-model="checkedVal">
            <x-radio :label="1">选项一</x-radio>
            <x-radio checked :label="2">默认选中</x-radio>
            <x-radio :label="3">选项二</x-radio>
          </x-radio-group>
        </div>
        <div class="margin-top-10">
          <x-radio-group v-model="checkedVal">
            <x-radio-button :label="1">选项一</x-radio-button>
            <x-radio-button checked :label="2">默认选中</x-radio-button>
            <x-radio-button :label="3">选项二</x-radio-button>
          </x-radio-group>
        </div>
        <source-code type="html" class="margin-top-10">{{checked}}</source-code>
      </x-quote>
    </div>

    <!--禁用状态-->
    <div class="row">
      <h3 class="row-title">禁用状态</h3>
      <p>可以通过 disabled 属性禁用单选框</p>
      <x-quote>
        <div class="margin-top-10">
          <x-radio-group v-model="disabledVal">
            <x-radio :label="1">选项一</x-radio>
            <x-radio disabled :label="2">我被禁用了</x-radio>
            <x-radio checked disabled  :label="3">选中禁用</x-radio>
          </x-radio-group>
        </div>
        <div class="margin-top-10">
          <x-radio-group v-model="disabledVal">
            <x-radio-button :label="1">选项一</x-radio-button>
            <x-radio-button disabled :label="2">我被禁用了</x-radio-button>
            <x-radio-button disabled :label="3">选中禁用</x-radio-button>
          </x-radio-group>
        </div>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>单选框状态改变的时候执行 可以将change事件绑定在x-radio-group上这样不用每个x-radio上进行绑定</p>
      <x-quote>
        <div class="margin-top-10">
          <x-radio v-model="changeA" :label="1" @change="change1F">选项一</x-radio>
          <x-radio v-model="changeA" :label="2" @change="change1F">选项二</x-radio>
        </div>
        <div class="margin-top-10">
          <x-radio-group v-model="change2" @change="change2F">
            <x-radio :label="1">选项一</x-radio>
            <x-radio :label="2">选项二</x-radio>
          </x-radio-group>
        </div>
        <source-code type="html" class="margin-top-10">{{change}}</source-code>
      </x-quote>
    </div>

    <!--props-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-radio props</h4>
      <api-table :data="radioProps" :keys="$propsKeys"></api-table>

      <h4>x-radio-group props</h4>
      <api-table :data="radioGroupProps" :keys="$propsKeys"></api-table>

      <!--events-->
      <h4>x-radio events</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>

      <h4>x-radio-button events</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  // 基础
  const base =
`<template>
  <x-radio v-model="value" :label="123">选项一</x-radio>
  <x-radio v-model="value" :label="123">选项二</x-radio>
</template>

<script>
  export default {
    data () {
      return {
        value: 1
      };
    }
  };
<\/script>`;

  // group组件
  const group =
`<template>
  <x-radio-group v-model="value">
    <x-radio :label="1">选项一</x-radio>
    <x-radio :label="2">选项二</x-radio>
  </x-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        value: 1
      };
    }
  };
<\/script>`;

  // 按钮样式
  const buttonStyle =
`<x-radio-group v-model="value">
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button :label="2">选项二</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>`;

  // 按钮样式大小分类
  const buttonStyleSize =
`<!--large-->
<x-radio-group v-model="value" size="large">
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button :label="2">选项二</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>
<!--default-->
<x-radio-group v-model="value" size="default">
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button :label="2">选项二</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>
<!--small-->
<x-radio-group v-model="value" size="small">
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button :label="2">选项二</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>
<!--mini-->
<x-radio-group v-model="value" size="mini">
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button :label="2">选项二</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>`;

  // 圆角
  const buttonStyleRadius =
`<x-radio-group v-model="value" radius>
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button :label="2">选项二</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>`;

  // 类型
  const types =
`<x-radio label="primary" type="primary">primary</x-radio>
<x-radio label="success" type="success">success</x-radio>
<x-radio label="warning" type="warning">warning</x-radio>
<x-radio label="danger" type="danger">danger</x-radio>
<x-radio label="dark" type="dark">dark</x-radio>

<!--也可以直接给x-radio-group设置 type-->
<x-radio-group v-model="value" type="primary">
  <x-radio :label="1">选项一</x-radio>
  <x-radio :label="2">选项二</x-radio>
</x-radio-group>
<x-radio-group v-model="value" type="success">
  <x-radio :label="1">选项一</x-radio>
  <x-radio :label="2">选项二</x-radio>
</x-radio-group>
<x-radio-group v-model="value" type="warning">
  <x-radio :label="1">选项一</x-radio>
  <x-radio :label="2">选项二</x-radio>
</x-radio-group>
<x-radio-group v-model="value" type="danger">
  <x-radio :label="1">选项一</x-radio>
  <x-radio :label="2">选项二</x-radio>
</x-radio-group>
<x-radio-group v-model="value" type="dark">
  <x-radio :label="1">选项一</x-radio>
  <x-radio :label="2">选项二</x-radio>
</x-radio-group>`;

  // 禁用
  const disabled =
`<x-radio-group v-model="value">
  <x-radio :label="1">选项一</x-radio>
  <x-radio disabled :label="2">我被禁用了</x-radio>
  <x-radio checked disabled :label="3">选项二</x-radio>
</x-radio-group>

<!--按钮样式-->
<x-radio-group v-model="value">
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button disabled :label="2">我被禁用了</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>`;

  // change事件
  const change =
`<x-radio v-model="value" @change="change1" :label="1">选项一</x-radio>
<x-radio v-model="value" @change="change1" :label="2">选项二</x-radio>

<!--绑定在x-radio-group组件上-->
<x-radio-group v-model="value" @change="change2">
  <x-radio :label="1">选项一</x-radio>
  <x-radio :label="2">选项二</x-radio>
</x-radio-group>`;

  // 默认选中
  const checked =
`<x-radio-group v-model="value">
  <x-radio :label="1">选项一</x-radio>
  <x-radio checked :label="2">默认选中</x-radio>
  <x-radio :label="3">选项二</x-radio>
</x-radio-group>

<!--按钮样式-->
<x-radio-group v-model="value">
  <x-radio-button :label="1">选项一</x-radio-button>
  <x-radio-button checked :label="2">默认选中</x-radio-button>
  <x-radio-button :label="3">选项二</x-radio-button>
</x-radio-group>`;

  export default {
    data () {
      return {
        base,
        group,
        buttonStyle,
        buttonStyleSize,
        checked,
        buttonStyleRadius,
        types,
        disabled,
        change,
        radio: 1,
        radio2: 1,
        radio3: 'primary',
        radioButton: 1,
        radioRadius: 1,
        disabledVal: '',
        checkedVal: '',
        changeA: '',
        change2: '',
        // api
        radioProps: [
          {
            attribute: 'v-model',
            explain: '单选框当前值',
            type: 'String | Number | Boolean',
            values: '---',
            default: '---'
          },
          {
            attribute: 'label',
            explain: '单选框的value值',
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
            explain: '设置单选框颜色类型',
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
            explain: '单选框当前值 - 如果x-radio-group设置了 v-model 后下面的radio则不需要在进行设置',
            type: 'String | Number | Boolean',
            values: '---',
            default: '---'
          },
          {
            attribute: 'type',
            explain: '设置单选框颜色类型',
            type: 'String',
            values: 'primary | success | warning | danger | dark',
            default: 'default'
          },
          {
            attribute: 'size',
            explain: '设置单选框大小',
            type: 'String',
            values: 'large | default | small | mini',
            default: 'default'
          },
          {
            attribute: 'radius',
            explain: '设置按钮样式单选框圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // 按钮样式
        radioButtonProps: [
          {
            attribute: 'label',
            explain: '单选框的value值',
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
        alert(`当前的值为: ${val}`);
      },
      change2F (val, el) {
        alert(`当前的值为: ${val}`);
      }
    }
  };
</script>

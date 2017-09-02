<template>
  <div>
    <div class="row">
      <h3 class="row-title">button 按钮</h3>
      <p>用于通过点击触发一个操作/事件</p>
    </div>

    <!--基础用法-->
    <div class="row">
      <!--基础用法-->
      <h3 class="row-title">基础用法</h3>
      <x-quote>
        <div>
          <x-button>按钮</x-button>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{baseButton}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <!--基础用法-->
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置按钮的颜色， 按钮有六种类型:
        <span class="highlighted">default, primary, success, warning, danger, dark</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div>
          <x-button class="margin-10" v-for="item in $types" :type="item" :key="item">{{item}}</x-button>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{typesButton}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <!--圆角-->
      <h3 class="row-title">圆角</h3>
      <p>可以通过 radius 设置按钮是否圆角 - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <div>
          <x-button class="margin-10" radius v-for="item in $types" :type="item" :key="item">{{item}}</x-button>
        </div>
        <div>
          <h4>按钮组 - 圆角</h4>
          <x-button-group radius>
            <x-button type="primary">primary</x-button>
            <x-button type="primary">primary</x-button>
            <x-button type="primary">primary</x-button>
          </x-button-group>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{radiusButton}}</source-code>
      </x-quote>
    </div>

    <!--空心-->
    <div class="row">
      <!--空心-->
      <h3 class="row-title">空心</h3>
      <p>可以通过 hollow 设置按钮为空心 - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <div>
          <x-button class="margin-10" hollow v-for="item in $types" :type="item" :key="item">{{item}}</x-button>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{hollowButton}}</source-code>
      </x-quote>
    </div>

    <!--icon button-->
    <div class="row">
      <!--圆角-->
      <h3 class="row-title">带图标的按钮</h3>
      <p>可以通过 icon 属性设置按钮的图标（icon只能为xui中所提供的图标）,  <router-link to="{ name: 'icon' }">点击查看icon</router-link></p>
      <x-quote>
        <div>
          <x-button icon="x-icon-delete" class="margin-10" v-for="item in $size" :size="item" :key="item">{{item}}</x-button>
        </div>
        <!--颜色分类-->
        <div>
          <x-button icon="x-icon-delete" class="margin-10" v-for="item in $types" :type="item" :key="item">{{item}}</x-button>
        </div>
        <!--只有icon的按钮-->
        <div>
          <x-button icon="x-icon-delete" class="margin-10" v-for="item in $types" :type="item" :key="item"></x-button>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{iconButton}}</source-code>
      </x-quote>
    </div>

    <!--按钮组-->
    <div class="row">
      <!--按钮组-->
      <h3 class="row-title">按钮组</h3>
      <x-quote>
        <div>
          <x-button-group class="margin-10">
            <x-button>按钮</x-button>
            <x-button>按钮</x-button>
            <x-button>按钮</x-button>
          </x-button-group>
          <x-button-group class="margin-10" v-for="item in $types" :key="item">
            <x-button :type="item">按钮</x-button>
            <x-button :type="item">按钮</x-button>
            <x-button :type="item">按钮</x-button>
          </x-button-group>
        </div>
        <!--icon-->
        <div>
          <h4>icon</h4>
          <x-button-group>
            <x-button icon="x-icon-chevron-left"></x-button>
            <x-button icon="x-icon-pause"></x-button>
            <x-button icon="x-icon-chevron-right"></x-button>
          </x-button-group>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{buttonGroup}}</source-code>
      </x-quote>
    </div>

    <!--长按钮-->
    <div class="row">
      <h3 class="row-title">长按钮</h3>
      <p>可以通过block设置按钮为自适应宽度 (长按钮的宽度是100% 需要自己给父级容器设置宽度来限制)</p>
      <x-quote>
        <div>
          <x-button block>按钮</x-button>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{blockButton}}</source-code>
      </x-quote>
    </div>

    <!--size分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置按钮的大小， 按钮有四种大小:
        <span class="highlighted">large(最大), default(默认), small(小的), mini(mini)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div>
          <x-button class="margin-10" v-for="item in $size" :size="item" :key="item">{{item}}</x-button>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{sizesButton}}</source-code>
      </x-quote>
    </div>

    <!--加载中按钮-->
    <div class="row">
      <h3 class="row-title">加载中按钮</h3>
      <p>可以通过 loading 属性让按钮进入loading状态（进入loading状态后按钮将不能点击 - 除非移除loading状态）</p>
      <x-quote>
        <div>
          <x-button class="margin-10" :loading="loading" @click="loading = true" >default</x-button>
          <x-button class="margin-10" :loading="loading" @click="loading = true" v-for="item in $types" :type="item" :key="item">{{item}}</x-button>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{loadingButton}}</source-code>
      </x-quote>
    </div>

    <!--禁用-->
    <div class="row">
      <h3 class="row-title">禁用</h3>
      <p>可以通过 disabled 属性设置按钮为禁用状态</p>
      <x-quote>
        <div>
          <x-button class="margin-10" disabled>禁用</x-button>
        </div>
        <div>
          <x-button-group class="margin-10">
            <x-button disabled>primary</x-button>
            <x-button disabled>primary</x-button>
            <x-button disabled>primary</x-button>
          </x-button-group>
        </div>
        <!--源码-->
        <source-code type="html" class="margin-top-10">{{disabledButton}}</source-code>
      </x-quote>
    </div>

    <!--props-->
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
  const baseButton = `<x-button>按钮</x-button>`;

  // 颜色分类
  const typesButton =
`<x-button>default</x-button>
<x-button type="primary">primary</x-button>
<x-button type="success">success</x-button>
<x-button type="warning">warning</x-button>
<x-button type="danger">danger</x-button>
<x-button type="dark">dark</x-button>`;
  // 圆角
  const radiusButton =
`<x-button>default</x-button>
<x-button type="primary" radius>primary</x-button>
<x-button type="success" radius>success</x-button>
<x-button type="warning" radius>warning</x-button>
<x-button type="danger" radius>danger</x-button>
<x-button type="dark" radius>dark</x-button>

<!--按钮组 - 圆角-->
<x-button-group radius>
  <x-button type="primary">primary</x-button>
  <x-button type="primary">primary</x-button>
  <x-button type="primary">primary</x-button>
</x-button-group>`;
  // 空心按钮
  const hollowButton =
`<x-button hollow>default</x-button>
<x-button type="primary" hollow>primary</x-button>
<x-button type="success" hollow>success</x-button>
<x-button type="warning" hollow>warning</x-button>
<x-button type="danger" hollow>danger</x-button>
<x-button type="dark" hollow>dark</x-button>`;

  // 带图标的按钮
  const iconButton =
`<x-button size="large" icon="x-icon-delete">large</x-button>
<x-button size="default" icon="x-icon-delete">default</x-button>
<x-button size="small" icon="x-icon-delete">small</x-button>
<x-button size="mini" icon="x-icon-delete">mini</x-button>

<!--不同类型下带icon-->
<x-button type="primary" radius icon="x-icon-delete">primary</x-button>
<x-button type="success" radius icon="x-icon-delete">success</x-button>
<x-button type="warning" radius icon="x-icon-delete">warning</x-button>
<x-button type="danger" radius icon="x-icon-delete">danger</x-button>
<x-button type="dark" radius icon="x-icon-delete">dark</x-button>

<!--只有icon-->
<x-button type="primary" radius icon="x-icon-delete"></x-button>
<x-button type="success" radius icon="x-icon-delete"></x-button>
<x-button type="warning" radius icon="x-icon-delete"></x-button>
<x-button type="danger" radius icon="x-icon-delete"></x-button>
<x-button type="dark" radius icon="x-icon-delete"></x-button>`;

  // 按钮组
  const buttonGroup =
`<!--default-->
<x-button-group>
  <x-button>default</x-button>
  <x-button>default</x-button>
  <x-button>default</x-button>
</x-button-group>

<!--primary-->
<x-button-group>
  <x-button type="primary">primary</x-button>
  <x-button type="primary">primary</x-button>
  <x-button type="primary">primary</x-button>
</x-button-group>

<!--success-->
<x-button-group>
  <x-button type="success">success</x-button>
  <x-button type="success">success</x-button>
  <x-button type="success">success</x-button>
</x-button-group>

<!--warning-->
<x-button-group>
  <x-button type="warning">warning</x-button>
  <x-button type="warning">warning</x-button>
  <x-button type="warning">warning</x-button>
</x-button-group>

<!--danger-->
<x-button-group>
  <x-button type="danger">danger</x-button>
  <x-button type="danger">danger</x-button>
  <x-button type="danger">danger</x-button>
</x-button-group>

<!--dark-->
<x-button-group>
  <x-button type="dark">dark</x-button>
  <x-button type="dark">dark</x-button>
  <x-button type="dark">dark</x-button>
</x-button-group>

<!--icon-->
<x-button-group>
  <x-button icon="x-icon-chevron-left"></x-button>
  <x-button icon="x-icon-pause"></x-button>
  <x-button icon="x-icon-chevron-right"></x-button>
</x-button-group>`;

  // 长按钮
  const blockButton = `<x-button block>按钮</x-button>`;

  // size分类
  const sizesButton =
`<x-button size="large">large</x-button>
<x-button size="default">default</x-button>
<x-button size="small">small</x-button>
<x-button size="mini">mini</x-button>`;

  // 加载中按钮
  const loadingButton =
`<x-button :loading="loading">default</x-button>
<x-button type="primary" :loading="loading">primary</x-button>
<x-button type="success" :loading="loading">success</x-button>
<x-button type="warning" :loading="loading">warning</x-button>
<x-button type="danger" :loading="loading">danger</x-button>
<x-button type="dark" :loading="loading">dark</x-button>`;

  // 禁用
  const disabledButton =
`<x-button disabled>禁用</x-button>
<!--按钮组禁用-->
<x-button-group>
  <x-button disabled>primary</x-button>
  <x-button disabled>primary</x-button>
  <x-button disabled>primary</x-button>
</x-button-group>
`;
  export default {
    data () {
      return {
        baseButton,
        typesButton,
        radiusButton,
        sizesButton,
        iconButton,
        buttonGroup,
        blockButton,
        disabledButton,
        hollowButton,
        loadingButton,
        // 加载中状态
        loading: false,
        // api
        apiData: [
          {
            attribute: 'type',
            explain: '设置按钮类型',
            type: 'String',
            values: 'default | primary | success | warning | danger | dark',
            default: 'default'
          },
          {
            attribute: 'radius',
            explain: '设置按钮圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'hollow',
            explain: '设置按钮为空心',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'icon',
            explain: '设置按钮图标',
            type: 'String',
            values: ' --- ',
            default: 'icon模块中所有的图标'
          },
          {
            attribute: 'block',
            explain: '设置按钮自适应宽度',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'size',
            explain: '设置按钮大小',
            type: 'String',
            values: 'large | default | small | mini',
            default: 'default'
          },
          {
            attribute: 'loading',
            explain: '设置按钮为loading状态',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'click',
            explain: '按钮点击按钮时触发的事件',
            params: 'event'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .block-button {
    width: 350px;
  }
</style>


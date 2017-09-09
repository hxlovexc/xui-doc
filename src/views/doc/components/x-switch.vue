<template>
  <div>
    <div class="row">
      <h3 class="row-title">switch 开关</h3>
      <p>用于表示两种状态之间的切换</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">switch 开关</h3>
      <x-quote>
        <p>开关状态: {{value}}</p>
        <div>
          <x-switch v-model="value"></x-switch>
        </div>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置开关的颜色， 开关有五种类型:
        <span class="highlighted">primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span>
      </p>
      <x-quote>
        <div class="margin-10 x-inline" v-if="item !== 'default'" v-for="item in $types" :key="item">
          <x-switch :type="item"></x-switch>&nbsp;&nbsp;&nbsp;{{item}}
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--size分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置开关的大小， 开关只有三种大小:
        <span class="highlighted">large(最大), default(默认), small(小的)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item" v-if="item !== 'mini'">
          <x-switch v-model="sizeVal" :size="item"></x-switch>&nbsp;&nbsp;&nbsp;{{item}}
        </div>
        <source-code type="html" class="margin-top-10">{{sizes}}</source-code>
      </x-quote>
    </div>

    <!--自定义text-->
    <div class="row">
      <h3 class="row-title">自定义text</h3>
      <p>
        可以通过 open-text 和 close-text 属性设置开关文字提示 - size为small的开关文字不显示</p>
      <x-quote>
        <x-switch open-text="开打" close-text="关闭"></x-switch>
        <source-code type="html" class="margin-top-10">{{text}}</source-code>
      </x-quote>
    </div>

    <!--禁用状态-->
    <div class="row">
      <h3 class="row-title">禁用状态</h3>
      <p>可以通过 disabled 属性禁用开关</p>
      <x-quote>
        <p>关闭状态禁用</p>
        <x-switch disabled></x-switch>

        <p>打开状态禁用</p>
        <x-switch v-model="disabledVal" disabled></x-switch>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>开关状态改变的时候执行</p>
      <x-quote>
        <x-switch @change="change"></x-switch>
        <source-code type="html" class="margin-top-10">{{changeText}}</source-code>
      </x-quote>
    </div>
  </div>
</template>

<script>
  // 基础
  const base = `<x-switch v-model="value"></x-switch>`;

  // 颜色分类
  const types =
`<x-switch type="primary"></x-switch>
<x-switch type="success"></x-switch>
<x-switch type="warning"></x-switch>
<x-switch type="danger"></x-switch>
<x-switch type="dark"></x-switch>`;

  // size分类
  const sizes =
`<x-switch size="large"></x-switch>
<x-switch size="default"></x-switch>
<x-switch size="small"></x-switch>`;

  // 自定义text
  const text = `<x-switch open-text="开打" close-text="关闭"></x-switch>`;

  // 禁用
  const disabled = `<x-switch disabled></x-switch>`;

  // change
  const changeText = `<x-switch @change="change"></x-switch>`;

  export default {
    data () {
      return {
        base,
        types,
        sizes,
        text,
        disabled,
        changeText,
        value: false,
        sizeVal: false,
        disabledVal: true
      };
    },
    methods: {
      change (val) {
        setTimeout(() => {
          alert(`当前开关是${val ? '打开' : '关闭'}状态`);
        }, 300);
      }
    }
  };
</script>

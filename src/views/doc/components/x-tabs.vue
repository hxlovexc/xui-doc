<template>
  <div>
    <div class="row">
      <h3 class="row-title">tabs 选项卡</h3>
      <p>选项卡切换组件</p>
    </div>

    <!--默认-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <x-quote>
        <x-tabs>
          <x-tab-item label="选项一">选项一的内容</x-tab-item>
          <x-tab-item label="选项二">选项二的内容</x-tab-item>
          <x-tab-item label="选项三">选项三的内容</x-tab-item>
        </x-tabs>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--卡片-->
    <div class="row">
      <h3 class="row-title">卡片样式</h3>
      <p>设置属性 type 为 card 可以让选项卡显示卡片样式</p>
      <x-quote>
        <x-tabs type="card">
          <x-tab-item label="选项一">选项一的内容</x-tab-item>
          <x-tab-item label="选项二">选项二的内容</x-tab-item>
          <x-tab-item label="选项三">选项三的内容</x-tab-item>
        </x-tabs>
        <source-code type="html" class="margin-top-10">{{card}}</source-code>
      </x-quote>
    </div>

    <!--更负责的标签-->
    <div class="row">
      <h3 class="row-title">更复杂的label</h3>
      <p>当 label 属性无法满足需求时, 可以使用 slot 来定义更复杂的label</p>
      <x-quote>
        <x-tabs>
          <x-tab-item>
            <template slot="label">
              <i class="x-icon-apps"></i> 选项一
            </template>
            选项一的内容
          </x-tab-item>
          <x-tab-item>
            <template slot="label">
              <i class="x-icon-apps"></i> 选项二
            </template>
            选项二的内容
          </x-tab-item>
          <x-tab-item>
            <template slot="label">
              <i class="x-icon-apps"></i> 选项三
            </template>
            选项三的内容
          </x-tab-item>
        </x-tabs>
        <source-code type="html" class="margin-top-10">{{label}}</source-code>
      </x-quote>
    </div>

    <!--禁用-->
    <div class="row">
      <h3 class="row-title">禁用某一个</h3>
      <p>设置属性 disabled 可以禁用某一个选项</p>
      <x-quote>
        <x-tabs>
          <x-tab-item label="选项一">选项一的内容</x-tab-item>
          <x-tab-item disabled label="不乖, 被禁用了">我是被禁用了的......</x-tab-item>
          <x-tab-item label="选项三">选项三的内容</x-tab-item>
        </x-tabs>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--动态修改当前显示-->
    <div class="row">
      <h3 class="row-title">动态修改当前显示</h3>
      <p>可以通过 v-model 修改当前显示的选项（name属性默认为item的索引）</p>
      <x-quote>
        <x-button type="primary" @click="curTab = 'tab-2'">显示第二个</x-button>
        <x-tabs v-model="curTab">
          <x-tab-item name="tab-1" label="选项一">选项一的内容</x-tab-item>
          <x-tab-item name="tab-2" label="选项二">选项二的内容</x-tab-item>
          <x-tab-item name="tab-3" label="选项三">选项三的内容</x-tab-item>
        </x-tabs>
        <source-code type="html" class="margin-top-10">{{changeTab}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>如果需要监听选项卡的变化可以添加change事件 - 函数接收被点击的name值</p>
      <x-quote>
        <x-tabs @change="tabChange">
          <x-tab-item label="选项一">选项一的内容</x-tab-item>
          <x-tab-item label="选项二">选项二的内容</x-tab-item>
          <x-tab-item label="选项三">选项三的内容</x-tab-item>
        </x-tabs>
        <source-code type="html" class="margin-top-10">{{changeEvent}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-tabs props</h4>
      <api-table :data="xTabProps" :keys="$propsKeys"></api-table>
      <!--x-tab-item props-->
      <h4>x-tabs-item props</h4>
      <api-table :data="xTabItemProps" :keys="$propsKeys"></api-table>
      <!--x-tab-item slot-->
      <h4>x-tabs-item slot</h4>
      <api-table :data="xTabItemSlot" :keys="$propsKeys"></api-table>
      <!--events-->
      <h4>events</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base =
`<x-tabs>
  <x-tab-item label="选项一">选项一的内容</x-tab-item>
  <x-tab-item label="选项二">选项二的内容</x-tab-item>
  <x-tab-item label="选项三">选项三的内容</x-tab-item>
</x-tabs>`;

  // 卡片
  const card =
`<x-tabs type="card">
  <x-tab-item label="选项一">选项一的内容</x-tab-item>
  <x-tab-item label="选项二">选项二的内容</x-tab-item>
  <x-tab-item label="选项三">选项三的内容</x-tab-item>
</x-tabs>`;

  // 更复杂的label
  const label =
`<x-tabs>
  <x-tab-item>
    <template slot="label">
      <i class="x-icon-apps"></i> 选项一
    </template>
    选项一的内容
  </x-tab-item>
  <x-tab-item>
    <template slot="label">
      <i class="x-icon-apps"></i> 选项二
    </template>
    选项二的内容
  </x-tab-item>
  <x-tab-item>
    <template slot="label">
      <i class="x-icon-apps"></i> 选项三
    </template>
    选项三的内容
  </x-tab-item>
</x-tabs>`;

  // 禁用
  const disabled =
`<x-tabs>
  <x-tab-item label="选项一">选项一的内容</x-tab-item>
  <!--不听话, 禁用它-->
  <x-tab-item disabled label="不乖, 被禁用了">我是被禁用了的......</x-tab-item>
  <x-tab-item label="选项三">选项三的内容</x-tab-item>
</x-tabs>`;

  const changeTab =
`<template>
  <x-button type="primary" @click="curTab = 'tab-2'">显示第二个</x-button>
  <x-tabs v-model="curTab">
    <x-tab-item name="tab-1" label="选项一">选项一的内容</x-tab-item>
    <x-tab-item name="tab-2" label="选项二">选项二的内容</x-tab-item>
    <x-tab-item name="tab-3" label="选项三">选项三的内容</x-tab-item>
  </x-tabs>
</template>

<script>
  export default {
    data () {
      return {
        curTab: ''
      };
    }
  };
<\/script>`;

  const changeEvent =
`<template>
  <x-tabs @change="tabChange">
    <x-tab-item label="选项一">选项一的内容</x-tab-item>
    <x-tab-item label="选项二">选项二的内容</x-tab-item>
    <x-tab-item label="选项三">选项三的内容</x-tab-item>
  </x-tabs>
</template>

<script>
  export default {
    methods: {
      tabChange (value) {
        alert(value);
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        card,
        label,
        disabled,
        changeTab,
        changeEvent,
        curTab: '',
        xTabProps: [
          {
            attribute: 'v-model',
            explain: '当前激活的选项，必须为其中一个选项卡的name',
            type: 'String',
            values: 'default | type',
            default: 'default'
          },
          {
            attribute: 'type',
            explain: '卡片样式',
            type: 'String',
            values: 'default | type',
            default: 'default'
          }
        ],
        // xTabItemProps
        xTabItemProps: [
          {
            attribute: 'label',
            explain: '选项卡标题',
            type: 'String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'name',
            explain: '选项卡名称 - 唯一标示',
            type: 'String',
            values: '---',
            default: '组件索引'
          },
          {
            attribute: 'disabled',
            explain: '禁用',
            type: 'boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // xTabItemSlot
        xTabItemSlot: [
          {
            attribute: 'label',
            explain: '选项卡标题',
            type: 'String',
            values: '---',
            default: '---'
          }
        ],
        // xTabSlot
        xTabSlot: [
          {
            attribute: 'type',
            explain: '卡片样式',
            type: 'String',
            values: 'default | type',
            default: 'default'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'change',
            explain: '选项卡被点击时触发',
            params: 'name'
          }
        ]
      };
    },
    methods: {
      tabChange (value) {
        alert(`当前点击的是 ${value + 1}`);
      }
    }
  };
</script>

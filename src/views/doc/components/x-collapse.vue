<template>
  <div>
    <div class="row">
      <h3 class="row-title">collapse 折叠面板</h3>
      <p>用于折叠收纳内容区域</p>
    </div>

    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <p>默认可以同时展开多个面板</p>
      <x-quote>
        <x-collapse>
          <x-collapse-item title="选项一">
            这个是选项一的内容
          </x-collapse-item>
          <x-collapse-item title="选项二">
            这个是选项二的内容
          </x-collapse-item>
          <x-collapse-item title="选项三">
            这个是选项三的内容
          </x-collapse-item>
        </x-collapse>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--手风琴-->
    <div class="row">
      <h3 class="row-title">手风琴</h3>
      <p>可以通过 accordion 属性开启手风琴(开启手风琴后只允许打开一个)</p>
      <x-quote>
        <x-collapse accordion>
          <x-collapse-item title="选项一">
            这个是选项一的内容
          </x-collapse-item>
          <x-collapse-item title="选项二">
            这个是选项二的内容
          </x-collapse-item>
          <x-collapse-item title="选项三">
            这个是选项三的内容
          </x-collapse-item>
        </x-collapse>
        <source-code type="html" class="margin-top-10">{{accordion}}</source-code>
      </x-quote>
    </div>

    <!--动态切换显示-->
    <div class="row">
      <h3 class="row-title">动态切换和默认显示</h3>
      <p>可以通过修改 v-model 的值来切换显示或者默认显示, 如果需要显示多个v-model应该传入数组</p>
      <x-quote>
        <x-collapse v-model="changeShow">
          <x-collapse-item title="选项一" name="1">这个是选项一的内容</x-collapse-item>
          <x-collapse-item title="选项二" name="2">这个是选项二的内容</x-collapse-item>
          <x-collapse-item title="选项三" name="3">这个是选项三的内容</x-collapse-item>
        </x-collapse>
        <div class="margin-top-10">
          <x-button type="primary" @click="changeShow = '3'">显示最后一个</x-button>
        </div>
        <source-code type="html" class="margin-top-10">{{changeCollapse}}</source-code>
      </x-quote>
    </div>

    <!--自定义title-->
    <div class="row">
      <h3 class="row-title">自定义title</h3>
      <p>当 title 的内容想需要自定义时可以不传入title参数, 使用slot进行自定义title</p>
      <x-quote>
        <x-collapse>
          <x-collapse-item>
            <span slot="title">自定义的title-1</span>
            这个是选项一的内容
          </x-collapse-item>
          <x-collapse-item>
            <span slot="title">自定义的title-2</span>
            这个是选项二的内容
          </x-collapse-item>
          <x-collapse-item>
            <span slot="title">自定义的title-3</span>
            这个是选项三的内容
          </x-collapse-item>
        </x-collapse>
        <source-code type="html" class="margin-top-10">{{customTitle}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>可以通过 radius 设置折叠面板是否圆角 - 默认<span class="highlighted">false</span></p>
      <p>默认可以同时展开多个面板</p>
      <x-quote>
        <x-collapse radius>
          <x-collapse-item title="选项一">
            这个是选项一的内容
          </x-collapse-item>
          <x-collapse-item title="选项二">
            这个是选项二的内容
          </x-collapse-item>
          <x-collapse-item title="选项三">
            这个是选项三的内容
          </x-collapse-item>
        </x-collapse>
        <source-code type="html" class="margin-top-10">{{radius}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>如果需要监听面板的变化可以添加change事件</p>
      <x-quote>
        <x-collapse @change="change">
          <x-collapse-item title="选项一">
            这个是选项一的内容
          </x-collapse-item>
          <x-collapse-item title="选项二">
            这个是选项二的内容
          </x-collapse-item>
          <x-collapse-item title="选项三">
            这个是选项三的内容
          </x-collapse-item>
        </x-collapse>
        <source-code type="html" class="margin-top-10">{{changeEvent}}</source-code>
      </x-quote>
    </div>

    <!--props-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-collapse props</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>

      <!--item参数-->
      <h4>x-collapse-item props</h4>
      <api-table :data="itemData" :keys="$propsKeys"></api-table>

      <!--item slot-->
      <h4>x-collapse-item slot</h4>
      <api-table :data="itemSlot" :keys="$propsKeys"></api-table>

      <!--事件-->
      <h4>events</h4>
      <api-table :data="events" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  // 基础用法
  const base =
`<template>
  <x-collapse>
    <!--内容1-->
    <x-collapse-item title="选项一">这个是选项一的内容</x-collapse-item>
    <!--内容2-->
    <x-collapse-item title="选项二">这个是选项二的内容</x-collapse-item>
    <!--内容3-->
    <x-collapse-item title="选项三">这个是选项三的内容</x-collapse-item>
  </x-collapse>
</template>`;

  // 手风琴
  const accordion =
`<template>
  <x-collapse accordion>
    <!--内容1-->
    <x-collapse-item title="选项一">这个是选项一的内容</x-collapse-item>
    <!--内容2-->
    <x-collapse-item title="选项二">这个是选项二的内容</x-collapse-item>
    <!--内容3-->
    <x-collapse-item title="选项三">这个是选项三的内容</x-collapse-item>
  </x-collapse>
</template>`;

  // 动态修改
  const changeCollapse =
`<x-collapse v-model="changeShow">
  <!--内容1-->
  <x-collapse-item title="选项一" name="1">这个是选项一的内容</x-collapse-item>
  <!--内容2-->
  <x-collapse-item title="选项二" name="2">这个是选项二的内容</x-collapse-item>
  <!--内容3-->
  <x-collapse-item title="选项三" name="3">这个是选项三的内容</x-collapse-item>
</x-collapse>
<!--切换显示折叠面板-->
<x-button type="primary" @click="changeShow = '3'">显示第三个</x-button>
<script>
  export default {
    data () {
      return {
        changeShow: '1'
      };
    }
  };
<\/script>`;

  // 动态修改
  const customTitle =
`<x-collapse>
  <x-collapse-item>
    <span slot="title">自定义的title-1</span>
    这个是选项一的内容
  </x-collapse-item>
  <x-collapse-item>
    <span slot="title">自定义的title-2</span>
    这个是选项二的内容
  </x-collapse-item>
  <x-collapse-item>
    <span slot="title">自定义的title-3</span>
    这个是选项三的内容
  </x-collapse-item>
</x-collapse>`;

  // 圆角
  const radius =
`<x-collapse radius>
  <x-collapse-item title="选项一">这个是选项一的内容</x-collapse-item>
  <x-collapse-item title="选项二">这个是选项二的内容</x-collapse-item>
  <x-collapse-item title="选项三">这个是选项三的内容</x-collapse-item>
</x-collapse>`;

  // change事件
  const changeEvent =
`<template>
  <x-collapse @change="change">
    <x-collapse-item title="选项一">
      这个是选项一的内容
    </x-collapse-item>
    <x-collapse-item title="选项二">
      这个是选项二的内容
    </x-collapse-item>
    <x-collapse-item title="选项三">
      这个是选项三的内容
    </x-collapse-item>
  </x-collapse>
</template>

<script>
  export default {
    methods: {
      change (value, el) {
        console.log(value, el);
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        accordion,
        changeCollapse,
        customTitle,
        radius,
        changeEvent,
        changeShow: '1',
        apiData: [
          {
            attribute: 'value',
            explain: '当前展开的面板（如果accordion为true类型是String, 否则为Array）, value使用v-model传入',
            type: 'String | Array',
            values: '---',
            default: '---'
          },
          {
            attribute: 'accordion',
            explain: '是否开启手风琴模式, 开启后只能展开一个',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        itemData: [
          {
            attribute: 'title',
            explain: '面板的标题',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'name',
            explain: 'x-collapse-item组件的唯一标识 - 用于默认展开和动态修改',
            type: 'String | Number',
            values: '---',
            default: 'x-collapse-item的索引'
          }
        ],
        itemSlot: [
          {
            attribute: 'title',
            explain: '面板标题',
            type: '---',
            values: '---',
            default: '---'
          }
        ],
        // 事件
        events: [
          {
            events: 'change',
            explain: '面板状态发生改变时执行(如果accordion为true时接收的参数类型为String否则为Array)',
            params: 'active: (Array | String), el: 当前的面板dom'
          }
        ]
      };
    },
    methods: {
      change (value, el) {
        console.log(value, el);
      }
    }
  };
</script>

<template>
  <div>
    <div class="row">
      <h3 class="row-title">input 输入框</h3>
      <p>表单的输入组件，对原生input的包装，通过鼠标或键盘输入内容</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>基础输入框，默认宽度 100%</p>
      <x-quote>
        <x-input placeholder="请输入内容"></x-input>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--密码输入框-->
    <div class="row">
      <h3 class="row-title">密码输入框</h3>
      <p>可以设置 input-type 为 password 让输入框变成密码输入框</p>
      <x-quote>
        <x-input input-type="password" placeholder="请输入内容"></x-input>
        <source-code type="html" class="margin-top-10">{{password}}</source-code>
      </x-quote>
    </div>

    <!--行内输入框-->
    <div class="row">
      <h3 class="row-title">行内输入框</h3>
      <p>可以通过 inline 属性设置输入框为行内元素 - 默认宽度200px</p>
      <x-quote>
        <x-input inline placeholder="请输入内容"></x-input>
        <source-code type="html" class="margin-top-10">{{inline}}</source-code>
      </x-quote>
    </div>

    <!--最大数量限制-->
    <div class="row">
      <h3 class="row-title">限制文字数量</h3>
      <p>可以通过 max 属性限制输入框字数</p>
      <x-quote>
        <x-input :max="10" placeholder="请输入内容"></x-input>
        <source-code type="html" class="margin-top-10">{{max}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置input的颜色， input有六种类型:
        <span class="highlighted">default, primary, success, warning, danger, dark</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $types" :key="item">
          <x-input :type="item" placeholder="请输入内容"></x-input>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--复合型输入框-->
    <div class="row">
      <h3 class="row-title">复合型输入框</h3>
      <p>添加 slot="left" 或 slot="right"给input左右添加内容</p>
      <x-quote>
        <!--left-->
        <div class="margin-top-10">
          <x-input radius placeholder="请输入内容">
            <template slot="left">www</template>
          </x-input>
        </div>
        <!--right-->
        <div class="margin-top-10">
          <x-input radius placeholder="请输入内容">
            <template slot="right">
              <x-button>.com</x-button>
            </template>
          </x-input>
        </div>
        <!--左右都有-->
        <div class="margin-top-10">
          <x-input radius placeholder="请输入内容">
            <template slot="left">www</template>
            <template slot="right">
              <x-button>.com</x-button>
            </template>
          </x-input>
        </div>
        <source-code type="html" class="margin-top-10">{{composite}}</source-code>
      </x-quote>
    </div>

    <!--大小分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置input的大小， input有三种大小:
        <span class="highlighted">large(最大), default(默认), small(小的)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item" v-if="item !== 'mini'">
          <x-input :size="item" placeholder="请输入内容"></x-input>
        </div>
        <div class="margin-top-10" v-for="item in $size" :key="item" v-if="item !== 'mini'">
          <x-input :size="item" placeholder="请输入内容">
            <template slot="left">http://</template>
            <template slot="right">.com</template>
          </x-input>
        </div>
        <source-code type="html" class="margin-top-10">{{size}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>可以通过 radius 设置input是否圆角 - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <x-input radius placeholder="请输入内容"></x-input>
        <source-code type="html" class="margin-top-10">{{radius}}</source-code>
      </x-quote>
    </div>

    <!--带图标的输入框-->
    <div class="row">
      <h3 class="row-title">带图标的输入框</h3>
      <p>可以通过 icon 属性给input右侧添加图标</p>
      <x-quote>
        <x-input icon="x-icon-image" placeholder="请输入内容"></x-input>
        <source-code type="html" class="margin-top-10">{{icon}}</source-code>
      </x-quote>
    </div>

    <!--禁用状态-->
    <div class="row">
      <h3 class="row-title">禁用状态</h3>
      <p>可以通过 disabled 属性禁用input - 默认<span class="highlighted">false</span></p>
      <x-quote>
        <div class="margin-top-10">
          <x-input disabled placeholder="请输入内容"></x-input>
        </div>
        <div class="margin-top-10">
          <x-input placeholder="请输入内容" disabled>
            <template slot="left">www</template>
            <template slot="right">.com</template>
          </x-input>
        </div>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--事件-->
    <div class="row">
      <h3 class="row-title">icon点击</h3>
      <x-quote>
        <div class="margin-top-10">
          <x-input icon="x-icon-search-strong" @icon-click="iconClick" placeholder="请输入内容"></x-input>
        </div>
        <source-code type="html" class="margin-top-10">{{iconClickDemo}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>props</h4>
      <api-table :data="props" :keys="$propsKeys"></api-table>
      <!--slot-->
      <h4>slot</h4>
      <api-table :data="slot" :keys="$propsKeys"></api-table>
      <!--events-->
      <h4>events</h4>
      <api-table :data="events" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base = `<x-input placeholder="请输入内容"></x-input>`;

  // password
  const password = `<x-input input-type="password" placeholder="请输入内容"></x-input>`;

  // inline
  const inline = `<x-input inline placeholder="请输入内容"></x-input>`;

  // 字数限制
  const max = `<x-input :max="10" placeholder="请输入内容"></x-input>`;

  // 颜色分类
  const types =
`<x-input type="default" placeholder="请输入内容"></x-input>
<x-input type="primary" placeholder="请输入内容"></x-input>
<x-input type="success" placeholder="请输入内容"></x-input>
<x-input type="warning" placeholder="请输入内容"></x-input>
<x-input type="danger" placeholder="请输入内容"></x-input>
<x-input type="dark" placeholder="请输入内容"></x-input>`;

  // 复合型输入框
  const composite =
`<!--左边存在-->
<x-input radius placeholder="请输入内容">
  <template slot="left">www</template>
</x-input>
<!--右边存在-->
<x-input radius placeholder="请输入内容">
  <template slot="right">.com</template>
</x-input>
<!--左右都存在-->
<x-input radius placeholder="请输入内容">
  <template slot="left">www</template>
  <template slot="right">.com</template>
</x-input>`;

  const size =
`<x-input size="large" placeholder="请输入内容"></x-input>
<x-input size="default" placeholder="请输入内容"></x-input>
<x-input size="small" placeholder="请输入内容"></x-input>
<!--复合型输入框-->
<x-input size="large" placeholder="请输入内容">
  <template slot="left">www</template>
  <template slot="right">.com</template>
</x-input>
<x-input size="default" placeholder="请输入内容">
  <template slot="left">www</template>
  <template slot="right">.com</template>
</x-input>
<x-input size="small" placeholder="请输入内容">
  <template slot="left">www</template>
  <template slot="right">.com</template>
</x-input>`;

  // 圆角
  const radius = `<x-input radius placeholder="请输入内容"></x-input>`;

  // 图标
  const icon = `<x-input icon="x-icon-image" placeholder="请输入内容"></x-input>`;

  // 禁用
  const disabled =
`<x-input disabled placeholder="请输入内容"></x-input>

<x-input disabled placeholder="请输入内容">
  <template slot="left">www</template>
  <template slot="right">.com</template>
</x-input>`;

  // 图标点击
  const iconClickDemo =
`<template>
  <x-input icon="x-icon-search-strong" @icon-click="iconClick" placeholder="请输入内容"></x-input>
</template>

<script>
  export default {
    methods: {
      iconClick (value) {
        alert('当前输入值为:' + value);
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        password,
        inline,
        max,
        types,
        size,
        radius,
        icon,
        composite,
        disabled,
        iconClickDemo,
        isFocus: false,
        props: [
          {
            attribute: 'v-model',
            explain: '数据双向绑定的值',
            type: 'Number | String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'input-type',
            explain: '输入框类型',
            type: 'Number',
            values: 'text | password',
            default: 'text'
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
            explain: '设置input为行内元素 - 默认宽度200px',
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
            attribute: 'icon',
            explain: 'input添加图标',
            type: 'String',
            values: '图标class',
            default: '---'
          },
          {
            attribute: 'disabled',
            explain: '禁用状态',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        slot: [
          {
            attribute: 'left',
            explain: '开启复合型输入框 - input左边添加内容',
            type: '---',
            values: '---',
            default: '---'
          },
          {
            attribute: 'right',
            explain: '开启复合型输入框 - input右边添加内容',
            type: '---',
            values: '---',
            default: '---'
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
          },
          {
            events: 'icon-click',
            explain: 'input图标点击触发',
            params: 'value: input值, target: input组件dom对象'
          }
        ]
      };
    },
    methods: {
      iconClick (value, el) {
        alert(`当前输入值为:${value}`);
      }
    }
  };
</script>

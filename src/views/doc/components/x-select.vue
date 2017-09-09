<template>
  <div>
    <div class="row">
      <h3 class="row-title">select 选择器</h3>
      <p>下拉选择, 支持单选、多选，以及键盘快捷操作</p>
    </div>

    <!--基础-->
    <div class="row">
      <div class="row-title">基础</div>
      <x-quote>
        <x-select v-model="model">
          <x-option :value="1" label="选择1"></x-option>
          <x-option :value="2" label="选择2"></x-option>
          <x-option :value="3" label="选择3"></x-option>
        </x-select>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--自定义模板-->
    <div class="row">
      <div class="row-title">自定义模板</div>
      <p>当option的内容更复杂后我们可以使用 slot 传入模版, 但是请保留 label 属性提供选择后的显示</p>
      <x-quote>
        <x-select v-model="tplVal">
          <x-option :value="1" label="选项一">
            <i class="x-icon-plane"></i> 这里放自定义的模版 - 01
          </x-option>
          <x-option :value="2" label="选项二">
            <i class="x-icon-plane"></i> 这里放自定义的模版 - 02
          </x-option>
          <x-option :value="3" label="选项三">
            <i class="x-icon-plane"></i> 这里放自定义的模版 - 03
          </x-option>
        </x-select>
        <source-code type="html" class="margin-top-10">{{tpl}}</source-code>
      </x-quote>
    </div>

    <!--分组选项-->
    <div class="row">
      <div class="row-title">分组选项</div>
      <p>可以通过 x-select-group 组件进行分组, 分组名为 label 属性</p>
      <x-quote>
        <x-select  v-model="groupVal">
          <x-select-group label="分组1">
            <x-option value="1" label="1-选择1"></x-option>
            <x-option value="2" label="1-选择2"></x-option>
            <x-option value="3" label="1-选择3"></x-option>
          </x-select-group>
          <x-select-group label="分组2">
            <x-option value="4" label="2-选择1"></x-option>
            <x-option value="5" label="2-选择2"></x-option>
            <x-option value="6" label="2-选择3"></x-option>
          </x-select-group>
        </x-select>
        <source-code type="html" class="margin-top-10">{{group}}</source-code>
      </x-quote>
    </div>

    <!--多选-->
    <div class="row">
      <div class="row-title">多选</div>
      <p>可以通过 multipl 属性开启多选 - 开启多选后 v-model 的值必须为数组类型</p>
      <x-quote>
        <p>当前选择了: {{multipleVal}}</p>
        <x-select multiple v-model="multipleVal">
          <x-option :value="1" label="选择1"></x-option>
          <x-option :value="2" label="选择2"></x-option>
          <x-option :value="3" label="选择3"></x-option>
        </x-select>
        <source-code type="html" class="margin-top-10">{{multiple}}</source-code>
      </x-quote>
    </div>

    <!--提示文字-->
    <div class="row">
      <div class="row-title">提示文字</div>
      <p>可以通过 placeholder 属性修改占位符</p>
      <x-quote>
        <x-select placeholder="俺是占位符..." v-model="placeholderVal">
          <x-option :value="1" label="选择1"></x-option>
          <x-option :value="2" label="选择2"></x-option>
          <x-option :value="3" label="选择3"></x-option>
        </x-select>
        <source-code type="html" class="margin-top-10">{{placeholder}}</source-code>
      </x-quote>
    </div>

    <!--颜色分类-->
    <div class="row">
      <h3 class="row-title">颜色分类</h3>
      <p>
        可以通过 type 属性设置选择器的颜色， 标签有六种类型:
        <span class="highlighted">default, primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-10 x-inline" v-for="item in $types" :key="item">
          <x-select v-model="typesVal" :type="item">
            <x-option :value="1" label="选择1"></x-option>
            <x-option :value="2" label="选择2"></x-option>
            <x-option :value="3" label="选择3"></x-option>
          </x-select>
        </div>
        <source-code type="html" class="margin-top-10">{{type}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>可以设置 radius 属性开启圆角</p>
      <x-quote>
        <div class="margin-top-10">
          <x-select radius v-model="radiusVal">
            <x-option :value="1" label="选择1"></x-option>
            <x-option :value="2" label="选择2"></x-option>
            <x-option :value="3" label="选择3"></x-option>
          </x-select>
        </div>
        <source-code type="html" class="margin-top-10">{{radius}}</source-code>
      </x-quote>
    </div>

    <!--默认选择-->
    <div class="row">
      <h3 class="row-title">默认选择</h3>
      <p>出了可以给 v-model 设置默认值之外，还可以给 x-option 组件设置 selected 属性实现默认选择</p>
      <x-quote>
        <div class="margin-top-10">
          <x-select v-model="selectedVal">
            <x-option :value="1" label="选择1"></x-option>
            <x-option :value="2" selected label="我是默认选择的"></x-option>
            <x-option :value="3" label="选择3"></x-option>
          </x-select>
        </div>
        <source-code type="html" class="margin-top-10">{{selected}}</source-code>
      </x-quote>
    </div>

    <!--禁用-->
    <div class="row">
      <div class="row-title">禁用</div>
      <p>可以给 x-select 组件设置 disabled 全部禁用, 也可以给x-option设置 disabled 属性禁用某一项</p>
      <x-quote>
        <div class="margin-top-10">
          <p>全部禁用</p>
          <x-select disabled v-model="disabledVal1">
            <x-option :value="1" label="选择1"></x-option>
            <x-option :value="2" label="选择2"></x-option>
            <x-option :value="3" label="选择3"></x-option>
          </x-select>
        </div>
        <div class="margin-top-10">
          <p>禁用某一项</p>
          <x-select v-model="disabledVal2">
            <x-option :value="1" label="选择1"></x-option>
            <x-option disabled :value="2" label="我是禁用的"></x-option>
            <x-option :value="3" label="选择3"></x-option>
          </x-select>
        </div>
        <source-code type="html" class="margin-top-10">{{disabled}}</source-code>
      </x-quote>
    </div>

    <!--显示状态事件-->
    <div class="row">
      <h3 class="row-title">show-change 事件</h3>
      <p>选择器显示状态发生改变的时候执行 - 接收参数(state: 选择器显示状态, el: 选择器dom对象)</p>
      <x-quote>
        <div class="margin-top-10">
          <x-select v-model="changeVal1" @show-change="showChange">
            <x-option :value="1" label="选择1"></x-option>
            <x-option :value="2" selected label="选择2"></x-option>
            <x-option :value="3" label="选择3"></x-option>
          </x-select>
        </div>
        <source-code type="html" class="margin-top-10">{{showChangeText}}</source-code>
      </x-quote>
    </div>

    <!--显示状态事件-->
    <div class="row">
      <h3 class="row-title">change 事件</h3>
      <p>选择器value值发生变化的时候执行 - 接收参数(value： 选择器的value)</p>
      <x-quote>
        <div class="margin-top-10">
          <x-select v-model="changeVal2" @change="changeFuntion">
            <x-option :value="1" label="选择1"></x-option>
            <x-option :value="2" label="选择2"></x-option>
            <x-option :value="3" label="选择3"></x-option>
          </x-select>
        </div>
        <source-code type="html" class="margin-top-10">{{change}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-select props</h4>
      <api-table :data="xselectProps" :keys="$propsKeys"></api-table>
      <!--x-option props-->
      <h4>x-option props</h4>
      <api-table :data="xOptionProps" :keys="$propsKeys"></api-table>
      <!--x-option slot-->
      <h4>x-option slot</h4>
      <api-table :data="xOptionSlot" :keys="$propsKeys"></api-table>
      <!--events-->
      <h4>events</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base =
`<x-select v-model="value">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  // 自定义模版
  const tpl =
`<x-select v-model="tplVal">
  <x-option :value="1" label="选项一">
    <i class="x-icon-plane"></i> 这里放自定义的模版 - 01
  </x-option>
  <x-option :value="2" label="选项二">
    <i class="x-icon-plane"></i> 这里放自定义的模版 - 02
  </x-option>
  <x-option :value="3" label="选项三">
    <i class="x-icon-plane"></i> 这里放自定义的模版 - 03
  </x-option>
</x-select>`;

  // 分组
  const group =
`<x-select v-model="groupVal">
  <x-select-group label="分组1">
    <x-option value="1" label="1-选择1"></x-option>
    <x-option value="2" label="1-选择2"></x-option>
    <x-option value="3" label="1-选择3"></x-option>
  </x-select-group>
  <x-select-group label="分组2">
    <x-option value="4" label="2-选择1"></x-option>
    <x-option value="5" label="2-选择2"></x-option>
    <x-option value="6" label="2-选择3"></x-option>
  </x-select-group>
</x-select>`;

  // 多选
  const multiple =
`<x-select multiple v-model="value">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  // placeholder
  const placeholder =
`<x-select placeholder="俺是占位符..." v-model="value">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  const type =
`<!--default-->
<x-select v-model="value" type="default">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>
<!--primary-->
<x-select v-model="value" type="primary">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>
<!--success-->
<x-select v-model="value" type="success">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>
<!--warning-->
<x-select v-model="value" type="warning">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>
<!--danger-->
<x-select v-model="value" type="danger">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>
<!--dark-->
<x-select v-model="value" type="dark">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  const radius =
`<x-select radius v-model="value">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  // 默认选择
  const selected =
`<x-select radius v-model="value">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" selected label="我是默认选择的"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  // 禁用
  const disabled =
`<!--禁用全部-->
<x-select disabled v-model="disabledVal1">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" label="选择2"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>

<!--禁用某一项-->
<x-select v-model="disabledVal2">
  <x-option :value="1" label="选择1"></x-option>
  <x-option disabled :value="2" label="我是禁用的"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  // 显示状态改变的时候
  const showChangeText =
`<x-select @show-change="showChange" v-model="value">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" selected label="我是默认选择的"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  // value改变
  const change =
`<x-select @change="change" v-model="value">
  <x-option :value="1" label="选择1"></x-option>
  <x-option :value="2" selected label="我是默认选择的"></x-option>
  <x-option :value="3" label="选择3"></x-option>
</x-select>`;

  export default {
    data () {
      return {
        base,
        tpl,
        group,
        multiple,
        placeholder,
        type,
        radius,
        selected,
        disabled,
        showChangeText,
        change,
        model: '',
        tplVal: '',
        groupVal: '',
        multipleVal: [],
        typesVal: '',
        radiusVal: '',
        selectedVal: '',
        disabledVal1: '',
        disabledVal2: '',
        changeVal1: '',
        changeVal2: '',
        placeholderVal: '',
        xselectProps: [
          {
            attribute: 'v-model',
            explain: '选择器选中的值 - 双向绑定',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'multiple',
            explain: '开启多选 - 开启后 v-model 的类型必须为Array',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'placeholder',
            explain: '占位符',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'type',
            explain: '设置选择器类型',
            type: 'String',
            values: 'default | primary | success | warning | danger | dark',
            default: 'default'
          },
          {
            attribute: 'radius',
            explain: '设置选择器圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'disabled',
            explain: '禁用选择器',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // x-option Props
        xOptionProps: [
          {
            attribute: 'label',
            explain: '选项名称 - 用于选择后的显示',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'value',
            explain: '选中后的值',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'disabled',
            explain: '禁用选项',
            type: 'boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'selected',
            explain: '默认选中此项',
            type: 'boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        // x-option slot
        xOptionSlot: [
          {
            attribute: 'default',
            explain: '自定义选项的内容模版 - x-option 的label需要保留',
            type: '---',
            values: '---',
            default: '---'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'show-change',
            explain: '选择器 显示状态 改变后触发',
            params: 'value: 显示状态, el: 选择器dom对象'
          },
          {
            events: 'change',
            explain: '选择器 value 改变后触发',
            params: 'value: 选择器当前的值'
          }
        ]
      };
    },
    methods: {
      showChange (val) {
        setTimeout(() => {
          alert(`当前选择弃状态是: ${val}`);
        }, 500);
      },
      changeFuntion (val) {
        setTimeout(() => {
          alert(`当前选中的值是${JSON.stringify(val)}`);
        }, 300);
      }
    }
  };
</script>

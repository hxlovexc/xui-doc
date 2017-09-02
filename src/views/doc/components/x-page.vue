<template>
  <div>
    <div class="row">
      <h3 class="row-title">page 分页</h3>
      <p>采用分页的形式分隔长列表，每次只加载一个页面</p>
    </div>

    <!--基础用法-->
    <div class="row">
      <h3 class="row-title">基础用法</h3>
      <p>total为分页总数, 必传</p>
      <x-quote>
        <x-page :total="500"></x-page>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--修改当前分页-->
    <div class="row">
      <h3 class="row-title">动态修改分页</h3>
      <p>可以通过 v-model 修改当前分页</p>
      <x-quote>
        <x-page v-model="curPage" :total="500"></x-page>
        <div class="margin-top-10">
          <x-button type="primary" @click="curPage = 10">切换到第10页</x-button>
        </div>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--带输入框-->
    <div class="row">
      <h3 class="row-title">带输入框</h3>
      <p>当分页很多的时候可以通过 input 属性显示输入框</p>
      <x-quote>
        <x-page :total="500" input></x-page>
        <source-code type="html" class="margin-top-10">{{input}}</source-code>
      </x-quote>
    </div>

    <!--大小分类-->
    <div class="row">
      <h3 class="row-title">大小分类</h3>
      <p>可以通过 size 属性设置分页的大小， 按钮有三种大小 <span class="highlighted">large(最大), default(默认), small(小的)</span> - 默认 <span class="highlighted">default</span></p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item" v-if="item !== 'mini'">
          <x-page :size="item" :total="500"></x-page>
        </div>
        <source-code type="html" class="margin-top-10">{{sizes}}</source-code>
      </x-quote>
    </div>

    <!--间隙-->
    <div class="row">
      <h3 class="row-title">开启按钮间隙</h3>
      <p>可以通过设置 clearance 开启按钮之间的间隙</p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item" v-if="item !== 'mini'">
          <x-page clearance :size="item" :total="500"></x-page>
        </div>
        <source-code type="html" class="margin-top-10">{{clearance}}</source-code>
      </x-quote>
    </div>

    <!--无边框-->
    <div class="row">
      <h3 class="row-title">无边框</h3>
      <p>可以通过设置 border 取消分页的边框</p>
      <x-quote>
        <x-page :border="false" :total="500"></x-page>
        <source-code type="html" class="margin-top-10">{{noBorder}}</source-code>
      </x-quote>
    </div>

    <!--圆角-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>可以通过设置 border 取消圆角</p>
      <x-quote>
        <x-page radius :total="500"></x-page>
        <source-code type="html" class="margin-top-10">{{noBorder}}</source-code>
      </x-quote>
    </div>

    <!--控制每页条数-->
    <div class="row">
      <h3 class="row-title">控制每页条数</h3>
      <p>可以通过设置 page-size 控制每一页多少条(默认10条) - 这里设置每页50条后分页总数将变成10条</p>
      <x-quote>
        <x-page :page-size="50" :total="500"></x-page>
        <source-code type="html" class="margin-top-10">{{pageSize}}</source-code>
      </x-quote>
    </div>

    <!--change事件-->
    <div class="row">
      <h3 class="row-title">change事件</h3>
      <p>点击分页的时候会执行 change 事件, 接收当前分页参数, 可以在此函数中请求新的数据</p>
      <x-quote>
        <x-page @change="change" :total="500"></x-page>
        <source-code type="html" class="margin-top-10">{{changeCode}}</source-code>
      </x-quote>
    </div>

    <!--API-->
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
  /* eslint-disable no-useless-escape */
  // 基础用法
  const base = `<x-page :total="500"></x-page>`;

  // 带input
  const input = `<x-page :total="500" input></x-page>`;

  // 大小分类
  const sizes =
`<x-page size="large" :total="500"></x-page>
<x-page size="default" :total="500"></x-page>
<x-page size="small" :total="500"></x-page>`;

  // 大小分类
  const clearance =
`<x-page size="large" clearance :total="500"></x-page>
<x-page size="default" clearance :total="500"></x-page>
<x-page size="small" clearance :total="500"></x-page>`;

  // 无边框
  const noBorder = `<x-page :border="false" :total="500"></x-page>`;

  // 每页条数
  const pageSize = `<x-page :page-size="50" :total="500"></x-page>`;

  // change
  const changeCode =
  `<template>
    <x-page @change="change" :total="500"></x-page>
  </template>

  <script>
    export default {
      methods: {
        change (value) {
          alert(value);
        }
      }
    };
  <\/script>`;

  export default {
    data () {
      return {
        base,
        input,
        curPage: 1,
        sizes,
        clearance,
        noBorder,
        pageSize,
        changeCode,
        apiData: [
          {
            attribute: 'v-model',
            explain: '当前页码, 支持组件外部修改',
            type: 'Number',
            values: '---',
            default: '1'
          },
          {
            attribute: 'input',
            explain: '显示input输入框',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'size',
            explain: '设置标签大小',
            type: 'String',
            values: 'large | default | small',
            default: 'default'
          },
          {
            attribute: 'clearance',
            explain: '开启按钮间隙',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'border',
            explain: '取消边框',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'radius',
            explain: '设置为圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'page-size',
            explain: '每页数量',
            type: 'Number',
            values: '---',
            default: '10'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'change',
            explain: '点击切换分页时执行的方法, 可以在此函数中请求新的数据',
            params: 'curPage: 当前分页'
          }
        ]
      };
    },
    methods: {
      change (value) {
        alert(`第${value}页`);
      }
    }
  };
</script>

<template>
  <div>
    <div class="row">
      <h3 class="row-title">sidebar 侧边栏</h3>
      <p>用于左右两侧显示内容</p>
    </div>


    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>可以通过 direction 属性设置侧边栏方向, 目前侧边栏支持两种方向 left, right, 宽度随内容自适应</p>
      <x-quote>
        <x-button @click="left = true">显示左边</x-button>
        <x-button @click="right = true">显示右边</x-button>
        <!--left-->
        <x-sidebar v-model="left">
          <div class="sidebar-content">
            <x-quote>我是左边侧栏</x-quote>
          </div>
        </x-sidebar>
        <!--right-->
        <x-sidebar v-model="right" direction="right">
          <div class="sidebar-content">
            <x-quote>我是右边侧栏</x-quote>
          </div>
        </x-sidebar>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
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
  const base =
`<template>
  <x-button @click="left = true">显示左边</x-button>
  <x-button @click="right = true">显示右边</x-button>
  <!--left-->
  <x-sidebar v-model="left">
    <div class="sidebar-content">
      <x-quote>我是左边侧栏</x-quote>
    </div>
  </x-sidebar>
  <!--right-->
  <x-sidebar v-model="right" direction="right">
    <div class="sidebar-content">
      <x-quote>我是右边侧栏</x-quote>
    </div>
  </x-sidebar>
</template>

<script>
  export default {
    data () {
      return {
        left: false,
        right: false
      };
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        left: false,
        right: false,
        apiData: [
          {
            attribute: 'v-model',
            explain: '侧边栏显示状态, 双向绑定的数据',
            type: 'Boolean',
            values: 'true | false',
            default: '---'
          },
          {
            attribute: 'direction',
            explain: '侧边栏方向',
            type: 'String',
            values: 'left | right',
            default: 'left'
          },
          {
            attribute: 'mask',
            explain: '显示遮罩',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'esc-close',
            explain: '按 ESC 按钮的时候关闭侧边栏',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'open',
            explain: '侧边栏打开时候执行',
            params: '---'
          },
          {
            events: 'close',
            explain: '侧边栏打关闭时执行',
            params: '---'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .x-sidebar{
    width: 500px;
  }

  .sidebar-content{
    width: 300px;
    padding: 15px;
  }
</style>

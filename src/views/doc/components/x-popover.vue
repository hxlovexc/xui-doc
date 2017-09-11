<template>
  <div>
    <div class="row">
      <h3 class="row-title">popover 弹出层</h3>
      <p>介绍</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <x-quote>
        <x-popover title="这是一条弹窗">
          <x-button>弹窗</x-button>
          <template slot="content">这是一个简单的栗子</template>
        </x-popover>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--激活方式-->
    <div class="row">
      <h3 class="row-title">激活方式</h3>
      <p>可以通过 trigger 属性设置弹出框的激活方式, 激活方式有 click, hover, focus - 默认click</p>
      <x-quote>
        <div class="margin-10 x-inline">
          <x-popover trigger="hover" title="这是一条弹窗">
            <x-button>hover</x-button>
            <template slot="content">hover显示</template>
          </x-popover>
        </div>
        <div class="margin-10 x-inline">
          <x-popover title="这是一条弹窗">
            <x-button>click</x-button>
            <template slot="content">click显示</template>
          </x-popover>
        </div>
        <div class="margin-10 x-inline">
          <x-popover title="这是一条弹窗" trigger="focus">
            <x-button>focus</x-button>
            <template slot="content">focus显示</template>
          </x-popover>
        </div>
        <source-code type="html" class="margin-top-10">{{trigger}}</source-code>
      </x-quote>
    </div>

    <!--弹出框的位置-->
    <div class="row">
      <h3 class="row-title">弹出框的位置</h3>
      <p>可以通过 direction 属性修改弹出框的位置, 弹出框有四个位置 top, right, bottom, left - 默认top</p>
      <x-quote>
        <div class="margin-10 x-inline">
          <x-popover title="提示" direction="top">
            <x-button>top</x-button>
            <template slot="content">这个是内容， 这个是弹框的内容.......</template>
          </x-popover>
        </div>
        <div class="margin-10 x-inline">
          <x-popover title="提示" direction="right">
            <x-button>right</x-button>
            <template slot="content">这个是内容， 这个是弹框的内容.......</template>
          </x-popover>
        </div>
        <div class="margin-10 x-inline">
          <x-popover title="提示" direction="bottom">
            <x-button>bottom</x-button>
            <template slot="content">这个是内容， 这个是弹框的内容.......</template>
          </x-popover>
        </div>
        <div class="margin-10 x-inline">
          <x-popover title="提示" direction="left">
            <x-button>left</x-button>
            <template slot="content">这个是内容， 这个是弹框的内容.......</template>
          </x-popover>
        </div>
        <source-code type="html" class="margin-top-10">{{direction}}</source-code>
      </x-quote>
    </div>

    <!--外部控制-->
    <div class="row">
      <h3 class="row-title">外部控制</h3>
      <p>当我们要从自己控制弹出层的显示和隐藏时可以使用 v-model 来绑定</p>
      <x-quote>
        <x-popover title="提示" v-model="show">
          <x-button>弹窗</x-button>
          <template slot="content">可以通过 v-model 来控制我的显示状态</template>
        </x-popover>
        <div class="margin-top-10">
          <x-button @click="show = true">显示</x-button>
          <x-button @click="show = false">隐藏</x-button>
        </div>
        <source-code type="html" class="margin-top-10">{{state}}</source-code>
      </x-quote>
    </div>

    <!--slot-->
    <div class="row">
      <h3 class="row-title">slot</h3>
      <p>当我们的结构更复杂时候可以使用 slot 传入内容, slot="title" slot="content"</p>
      <x-quote>
        <x-popover v-model="show1">
          <x-button>slotDemo</x-button>
          <!--标题-->
          <x-tag slot="title">这个是title</x-tag>
          <!--内容-->
          <template slot="content">
            <div>是否确定删除?</div>
            <div class="x-text-r">
              <x-button @click="show1 = false" radius size="mini">取消</x-button>
              <x-button @click="show1 = false" type="danger" radius size="mini">删除</x-button>
            </div>
          </template>
        </x-popover>
        <source-code type="html" class="margin-top-10">{{state}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>props</h4>
      <api-table :data="props" :keys="$propsKeys"></api-table>

      <h4>slot</h4>
      <api-table :data="slotData" :keys="$propsKeys"></api-table>

      <h4>slot</h4>
      <api-table :data="eventsData" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base =
`<x-popover title="这是一条弹窗">
  <x-button>弹窗</x-button>
  <template slot="content">这是一个简单的栗子</template>
</x-popover>`;

  // 激活方式
  const trigger =
`<x-popover title="这是一条弹窗">
  <x-button>hover</x-button>
  <template slot="content">hover显示</template>
</x-popover>

<x-popover title="这是一条弹窗" trigger="click">
  <x-button>click</x-button>
  <template slot="content">click显示</template>
</x-popover>

<x-popover title="这是一条弹窗" trigger="focus">
  <x-button>focus</x-button>
  <template slot="content">focus显示</template>
</x-popover>`;

  // 位置
  const direction =
`<x-popover title="提示" direction="top">
  <x-button>top</x-button>
  <template slot="content">这个是内容， 这个是弹框的内容.......</template>
</x-popover>

<x-popover title="提示" direction="right">
  <x-button>right</x-button>
  <template slot="content">这个是内容， 这个是弹框的内容.......</template>
</x-popover>

<x-popover title="提示" direction="bottom">
  <x-button>bottom</x-button>
  <template slot="content">这个是内容， 这个是弹框的内容.......</template>
</x-popover>

<x-popover title="提示" direction="left">
  <x-button>left</x-button>
  <template slot="content">这个是内容， 这个是弹框的内容.......</template>
</x-popover>`;

  // state
  const state =
`<template>
  <x-popover title="提示" v-model="show">
    <x-button>弹窗</x-button>
    <template slot="content">可以通过 v-model 来控制我的显示状态</template>
  </x-popover>
  <div class="margin-top-10">
    <x-button @click="show = true">显示</x-button>
    <x-button @click="show = false">隐藏</x-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      };
    }
  };
<\/script>`;

  // slot
  const slot =
`<template>
  <x-popover v-model="show">
    <x-button>slotDemo</x-button>
    <!--标题-->
    <x-tag slot="title">这个是title</x-tag>
    <!--内容-->
    <template slot="content">
      <div>是否确定删除?</div>
      <div class="x-text-r">
        <x-button @click="show = false" radius size="mini">取消</x-button>
        <x-button @click="show = false" type="danger" radius size="mini">删除</x-button>
      </div>
    </template>
  </x-popover>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      };
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        trigger,
        direction,
        state,
        slot,
        show: false,
        show1: false,
        props: [
          {
            attribute: 'v-model',
            explain: '弹窗显示状态, 双向绑定 - 如果需要外部控制显示状态可以使用 v-model',
            type: 'Boolean',
            values: 'true | false',
            default: 'click'
          },
          {
            attribute: 'trigger',
            explain: '触发显示的事件类型',
            type: 'String',
            values: 'click | hover | focus',
            default: 'click'
          },
          {
            attribute: 'direction',
            explain: '弹窗显示的位置',
            type: 'String',
            values: 'top | right | bottom | left',
            default: 'top'
          },
          {
            attribute: 'title',
            explain: '弹窗标题 - 如果复杂的标题可以使用 slot="title"',
            type: 'String',
            values: '---',
            default: '---'
          }
        ],
        slotData: [
          {
            attribute: 'default',
            explain: '触发弹窗显示的内容',
            type: '---',
            values: '---',
            default: '---'
          },
          {
            attribute: 'title',
            explain: '弹窗的标题',
            type: '---',
            values: '---',
            default: '---'
          },
          {
            attribute: 'content',
            explain: '弹窗的内容',
            type: '---',
            values: '---',
            default: '---'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'change',
            explain: '状态发生变化时候触发',
            params: 'state: 弹窗的显示状态'
          }
        ]
      };
    }
  };
</script>

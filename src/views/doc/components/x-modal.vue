<template>
  <div>
    <div class="row">
      <h3 class="row-title">modal 模态框</h3>
      <p>弹出一个对话框，适合内容更负责的弹窗</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <x-quote>
        <x-button @click="show = true">显示</x-button>
        <x-modal
          title="这个是标题"
          v-model="show"
        >
          <div>这个是内容</div>
          <!--footer内容-->
          <template slot="footer">
            <x-button @click="close">取消</x-button>
            <x-button type="primary" @click="close">确定</x-button>
          </template>
        </x-modal>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--size分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置模态框的大小， 模态框有三种大小:
        <span class="highlighted">large(最大), default(默认), small(小的)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <x-button @click="largeSize = true">largeSize</x-button>&nbsp;&nbsp;
        <x-button @click="defaultSize = true">defaultSize</x-button>&nbsp;&nbsp;
        <x-button @click="smallSize = true">smallSize</x-button>
        <x-modal
            title="这个是标题"
            v-model="largeSize"
            size="large"
          >
            <div>这个是内容</div>
            <!--footer内容-->
            <template slot="footer">
              <x-button @click="largeSize = false">取消</x-button>
              <x-button type="primary" @click="largeSize = false">确定</x-button>
            </template>
          </x-modal>
          <x-modal
            title="这个是标题"
            v-model="defaultSize"
            size="default"
          >
            <div>这个是内容</div>
            <!--footer内容-->
            <template slot="footer">
              <x-button @click="defaultSize = false">取消</x-button>
              <x-button type="primary" @click="defaultSize = false">确定</x-button>
            </template>
          </x-modal>
          <x-modal
            title="这个是标题"
            v-model="smallSize"
            size="small"
          >
            <div>这个是内容</div>
            <!--footer内容-->
            <template slot="footer">
              <x-button @click="smallSize = false">取消</x-button>
              <x-button type="primary" @click="smallSize = false">确定</x-button>
            </template>
          </x-modal>
        <source-code type="html" class="margin-top-10">{{size}}</source-code>
      </x-quote>
    </div>

    <!--更复杂的内容-->
    <div class="row">
      <h3 class="row-title">更复杂的内容</h3>
      <p>modal组件中的 slot 可以传入任何内容, 总共有三个 slot: <span class="highlighted">title, default, footer</span></p>
      <x-quote>
        <x-button @click="modal = true">显示</x-button>
        <x-modal v-model="modal">
          <!--不使用title属性 使用slot-->
          <div slot="title" class="x-modal-title">
            <x-tag>这个是使用了slot的标题</x-tag>
          </div>
          <x-table bordered :data="list" slot="default">
            <x-table-column label="名称" name="name"></x-table-column>
            <x-table-column label="年龄" name="age"></x-table-column>
            <x-table-column label="性别" name="sex"></x-table-column>
          </x-table>
          <!--footer内容-->
          <template slot="footer">
            <x-button type="primary" @click="modal = false">确定</x-button>
          </template>
        </x-modal>
        <source-code type="html" class="margin-top-10">{{complexityTpl}}</source-code>
      </x-quote>
    </div>

    <!--拦截窗口关闭-->
    <div class="row">
      <h3 class="row-title">拦截窗口关闭</h3>
      <p>在点击关闭的时候可以通过 close 属性劫持 - 接收一个next函数, 需要手动调用next才会继续执行</p>
      <p>在某些条件下, 我们需要在表单关闭之前做些判断来决定是否关闭表单的时候, 可以使用此方法来拦截表单关闭</p>
      <x-quote>
        <x-button @click="hijackedShow = true">显示</x-button>
        <x-modal size="small" :close="isClose" title="这个是标题" v-model="hijackedShow">
          <div>这个是内容</div>
        </x-modal>
        <source-code type="html" class="margin-top-10">{{hijacked}}</source-code>
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
  <x-button @click="show = true">显示</x-button>
  <!--模态框组件-->
  <x-modal
    title="这个是标题"
    v-model="show"
  >
    <div>这个是内容</div>
    <!--地步内容-->
    <template slot="footer">
      <x-button @click="close">取消</x-button>
      <x-button type="primary" @click="close">确定</x-button>
    </template>
  </x-modal>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      };
    },
    methods: {
      close () {
        this.show = false;
      }
    }
  };
<\/script>`;

  const size =
`<template>
  <x-button @click="large = true">large</x-button>
  <x-button @click="default = true">default</x-button>
  <x-button @click="small = true">small</x-button>

  <!--large-->
  <x-modal
    title="这个是标题"
    v-model="large"
    size="large"
  >
    <div>这个是内容</div>
    <!--footer内容-->
    <template slot="footer">
      <x-button @click="close">取消</x-button>
      <x-button type="primary" @click="large = false">确定</x-button>
    </template>
  </x-modal>

  <!--default-->
  <x-modal
    title="这个是标题"
    v-model="default"
    size="default"
  >
    <div>这个是内容</div>
    <!--footer内容-->
    <template slot="footer">
      <x-button @click="close">取消</x-button>
      <x-button type="primary" @click="default = false">确定</x-button>
    </template>
  </x-modal>

  <!--small-->
  <x-modal
    title="这个是标题"
    v-model="small"
    size="small"
  >
    <div>这个是内容</div>
    <!--footer内容-->
    <template slot="footer">
      <x-button @click="close">取消</x-button>
      <x-button type="primary" @click="small = false">确定</x-button>
    </template>
  </x-modal>
</template>

<script>
  export default {
    data () {
      return {
        large: false,
        default: false,
        small: false
      };
    },
    methods: {
      close () {
        this.show = false;
      }
    }
  };
<\/script>`;

  // 更复杂的内容
  const complexityTpl =
`<template>
  <x-button @click="show = true">显示</x-button>
    <x-modal v-model="modal">
      <!--不使用title属性 使用slot-->
      <div slot="title" class="x-modal-title">
        <x-tag>这个是使用了slot的标题</x-tag>
      </div>
      <x-table bordered :data="list">
        <x-table-column label="名称" name="name"></x-table-column>
        <x-table-column label="年龄" name="age"></x-table-column>
        <x-table-column label="性别" name="sex"></x-table-column>
      </x-table>
      <!--footer内容-->
      <template slot="footer">
        <x-button type="primary" @click="show = false">确定</x-button>
      </template>
    </x-modal>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        list: [
          {
            name: '名称01',
            age: 21,
            sex: '男'
          }, {
            name: '名称02',
            age: 22,
            sex: 1
          }, {
            name: '名称03',
            age: 23,
            sex: '女'
          }, {
            name: '名称04',
            age: 24,
            sex: '女'
          }, {
            name: '名称05',
            age: 25,
            sex: '女'
          }
        ]
      };
    },
    methods: {
      close () {
        this.show = false;
      }
    }
  };
<\/script>`;

  const hijacked =
`<template>
  <x-button @click="show = true">显示</x-button>
  <x-modal size="small" :close="isClose" title="这个是标题" v-model="show">
    <div>这个是内容</div>
  </x-modal>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      };
    },
    methods: {
      isClose (next) {
        // 业务逻辑判断 - 手动调用next才会关闭窗口
        next();
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        size,
        complexityTpl,
        hijacked,
        show: false,
        largeSize: false,
        defaultSize: false,
        smallSize: false,
        modal: false,
        hijackedShow: false,
        list: [
          {
            name: '名称01',
            age: 21,
            sex: '男'
          }, {
            name: '名称02',
            age: 22,
            sex: 1
          }, {
            name: '名称03',
            age: 23,
            sex: '女'
          }, {
            name: '名称04',
            age: 24,
            sex: '女'
          }, {
            name: '名称05',
            age: 25,
            sex: '女'
          }
        ],
        apiData: [
          {
            attribute: 'v-model',
            explain: '模态框显示状态, 双向绑定的数据',
            type: 'Boolean',
            values: 'true | false',
            default: '---'
          },
          {
            attribute: 'radius',
            explain: '设置模态框为圆角',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'size',
            explain: '设置标签大小',
            type: 'String',
            values: 'large | default | small',
            default: 'default'
          },
          {
            attribute: 'show-close',
            explain: '显示关闭按钮',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'mask',
            explain: '显示遮罩',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'close',
            explain: '关闭时的中间函数 - 接收一个next函数, 需要手动调用才执行关闭',
            type: 'Function',
            values: '----',
            default: '----'
          },
          {
            attribute: 'esc-close',
            explain: '按 ESC 按钮的时候关闭模态框',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          }
        ],
        // 事件
        eventsData: [
          {
            events: 'open',
            explain: '模态框打开时候执行',
            params: '---'
          },
          {
            events: 'close',
            explain: '模态框打关闭时执行',
            params: '---'
          }
        ]
      };
    },
    methods: {
      close () {
        this.show = false;
      },
      isClose (next) {
        // 业务逻辑判断 - 手动调用next才会关闭窗口
        next();
      }
    }
  };
</script>

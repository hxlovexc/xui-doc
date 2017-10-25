<template>
  <div>
    <div class="row">
      <h3 class="row-title">message 消息提醒</h3>
      <p>居中显示在页面顶部，用于展示全局消息</p>
      <ul class="function-list">
        <li>
          <span>this.$message(message, options, closeBack)</span>
        </li>
        <li>
          <span>this.$message.primary(message, options, closeBack)</span>
        </li>
        <li>
          <span>this.$message.success(message, options, closeBack)</span>
        </li>
        <li>
          <span>this.$message.warning(message, options, closeBack)</span>
        </li>
        <li>
          <span>this.$message.danger(message, options, closeBack)</span>
        </li>
        <li>
          <span>this.$message.dark(message, options, closeBack)</span>
        </li>
        <li>
          <span>this.$message.loading(message, options, closeBack)</span>
        </li>
        <li>
          <span>this.$message.closeAll(name)</span>
        </li>
      </ul>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>默认使用方式</p>
      <x-quote>
        <x-button @click="message()">default</x-button>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--不同类型消息提示-->
    <div class="row">
      <h3 class="row-title">不同类型消息提示</h3>
      <p><span class="highlighted">loading</span> 类型的消息提示不会自动关闭, 需要手动关闭</p>
      <x-quote>
        <span>
          <x-button @click="message()">default</x-button>&nbsp;
        </span>
        <span v-for="item in $types" :key="item" v-if="item !== 'default'">
          <x-button :type="item" @click="message(item)">{{item}}</x-button>&nbsp;
        </span>
        <span>
          <x-button @click="message('loading')">loading</x-button>&nbsp;
        </span>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--修改关闭时间-->
    <div class="row">
      <h3 class="row-title">修改关闭时间</h3>
      <p>除了 <span>loading</span> 不会自动关闭, 其他类型默认 <span class="highlighted">3秒</span>自动关闭, 可以通过设置
        <span class="highlighted">timer</span>参数修改, 设置为 <span class="highlighted">0</span> 则不关闭
      </p>
      <x-quote>
        <x-button @click="message('', {timer: 5000})">修改成五秒后关闭</x-button>
        <source-code type="html" class="margin-top-10">{{timer}}</source-code>
      </x-quote>
    </div>

    <!--手动关闭-->
    <div class="row">
      <h3 class="row-title">手动关闭</h3>
      <p>所有类型执行完后会返回一个函数, 执行返回的函数可以关闭当前提示</p>
      <x-quote>
        <x-button @click="open()" v-if="!vmMsg">打开</x-button>
        <x-button @click="close()" v-else>关闭</x-button>
        <source-code type="html" class="margin-top-10">{{timer}}</source-code>
      </x-quote>
    </div>

    <!--关闭所有提示-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>在某些场景下需要关闭所有提示时, 可以使用 <span class="highlighted">this.$message.closeAll</span> 方法</p>
      <x-quote>
        <x-button @click="closeAll">关闭所有</x-button>
        <source-code type="html" class="margin-top-10">{{closeAllDemo}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>options</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base =
`<template>
  <x-button @click="message">default</x-button>
</template>

<script>
  export default {
    methods: {
      message () {
        this.$message('hello world');
      }
    }
  };
<\/script>`;

  const types =
`<template>
  <x-button @click="default">default</x-button>
  <x-button @click="primary">primary</x-button>
  <x-button @click="success">success</x-button>
  <x-button @click="warning">warning</x-button>
  <x-button @click="danger">danger</x-button>
  <x-button @click="dark">dark</x-button>
  <x-button @click="loading">loading</x-button>
</template>

<script>
  export default {
    methods: {
      default () {
        this.$message('hello world');
      },
      primary () {
        this.$message.primary('hello world');
      },
      success () {
        this.$message.success('hello world');
      },
      warning () {
        this.$message.warning('hello world');
      },
      danger () {
        this.$message.danger('hello world');
      },
      dark () {
        this.$message.dark('hello world');
      },
      loading () {
        this.$message.loading('hello world');
      }
    }
  };
<\/script>`;

  const timer =
`<template>
  <x-button @click="message">修改成五秒后关闭</x-button>
</template>

<script>
  export default {
    methods: {
      message () {
        this.$message('hello world', {
          timer: 5000
        });
      }
    }
  };
<\/script>`;

  const closeAllDemo =
`<template>
  <x-button @click="closeAll">关闭所有</x-button>
</template>

<script>
  export default {
    methods: {
      closeAll () {
        this.$message.closeAll();
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        types,
        timer,
        closeAllDemo,
        vmMsg: '',
        apiData: [
          {
            attribute: 'showIcon',
            explain: '是否显示icon',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'timer',
            explain: '自动关闭的时间',
            type: 'Number',
            values: '----',
            default: '3000'
          }
        ]
      };
    },
    methods: {
      message (type, options = {}) {
        const message = type ? this.$message[type] : this.$message;
        return message('hello world', options);
      },
      open () {
        this.vmMsg = this.message();
      },
      close () {
        this.vmMsg();
        this.vmMsg = '';
      },
      closeAll () {
        this.$message.closeAll();
      }
    }
  };
</script>

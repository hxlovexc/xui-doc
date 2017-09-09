<template>
  <div>
    <div class="row">
      <h3 class="row-title">notice 通知提醒</h3>
      <p>在页面的右上角全局显示通知提醒信息 - 执行完后返回一个 close 函数, 调用此函数可以关闭弹窗</p>
      <ul class="function-list">
        <li>
          <span>this.$notice(message, config, clickBack, closeBack)</span>
        </li>
        <li>
          <span>this.$notice(message, config, clickBack, closeBack)</span>
        </li>
        <li>
          <span>this.$notice.warning(message, config, clickBack, closeBack)</span>
        </li>
        <li>
          <span>this.$notice.danger(message, config, clickBack, closeBack)</span>
        </li>
        <li>
          <span>this.$notice.dark(message, config, clickBack, closeBack)</span>
        </li>
        <li>
          <span>this.$notice.close(name)</span>
        </li>
      </ul>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>this.$notice 为默认的提醒</p>
      <x-quote>
        <x-button @click="defaultFun">default</x-button>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--带标题的通知-->
    <div class="row">
      <h3 class="row-title">带标题的通知</h3>
      <p>可以通过配置 title 参数自定义标题</p>
      <x-quote>
        <x-button @click="haveTitle">有标题的</x-button>
        <source-code type="html" class="margin-top-10">{{title}}</source-code>
      </x-quote>
    </div>

    <!--不同类型的通知提醒-->
    <div class="row">
      <h3 class="row-title">不同类型的通知提醒</h3>
      <x-quote>
        <div class="x-inline margin-10">
          <x-button @click="haveTitle">default</x-button>
        </div>
        <div class="x-inline margin-10" v-for="item in $types" :key="item" v-if="item !== 'default' && item !== 'primary'">
          <x-button @click="typesNotice(item)">{{item}}</x-button>
        </div>
        <source-code type="html" class="margin-top-10">{{types}}</source-code>
      </x-quote>
    </div>

    <!--取消关闭按钮-->
    <div class="row">
      <h3 class="row-title">取消关闭按钮</h3>
      <p>可以通过 showClose 设置是否显示右上角关闭按钮 - 默认显示</p>
      <x-quote>
        <x-button @click="hideClose">default</x-button>
        <source-code type="html" class="margin-top-10">{{showClose}}</source-code>
      </x-quote>
    </div>

    <!--取消自动关闭-->
    <div class="row">
      <h3 class="row-title">设置自动关闭的事件和取消自动关闭</h3>
      <p>可以通过 timer 设置通知的自动关闭时间, 如果设置成 0 则不自动关闭 - 默认5000(五秒)</p>
      <x-quote>
        <x-button @click="timerClose(0)">不自动关闭</x-button>
        <x-button @click="timerClose(10000)">十秒后自动关闭</x-button>
        <source-code type="html" class="margin-top-10">{{setTimer}}</source-code>
      </x-quote>
    </div>

    <!--关闭通知-->
    <div class="row">
      <h3 class="row-title">关闭通知</h3>
      <p>打开一个通知后返回一个 close 函数, 调用函数可以关闭当前通知</p>
      <p>同时也可给通知设置一个 name 属性(name必须为唯一的), 然后调用 this.$notice.close(name), 如果name不传则是关闭所有通知</p>
      <x-quote>
        <x-button @click="showNotice" v-if="!notice">打开一个通知</x-button>
        <x-button @click="closeNotice" v-else>关闭通知</x-button>
        <source-code type="html" class="margin-top-10">{{close1}}</source-code>
      </x-quote>
    </div>

    <!--关闭通知-->
    <div class="row">
      <h3 class="row-title">关闭所有通知</h3>
      <p>一键关闭清除所有通知</p>
      <x-quote>
        <x-button @click="newNotice">打开一个通知</x-button>
        <x-button @click="closeAll">关闭所有通知</x-button>
        <source-code type="html" class="margin-top-10">{{closeAllDemo}}</source-code>
      </x-quote>
    </div>

    <!--事件-->
    <div class="row">
      <h3 class="row-title">点击和关闭事件</h3>
      <p>点击的回调函数接收一个接收当前组件对象, 可以调用对象的 close 方法关闭窗口</p>
      <x-quote>
        <x-button @click="noticeEvent">事件</x-button>
        <source-code type="html" class="margin-top-10">{{event}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>params</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const base =
`<template>
  <x-button @click="notice">default</x-button>
</template>

<script>
  export default {
    methods: {
      notice () {
        this.$notice('这是一条提醒~');
      }
    }
  };
<\/script>`;

  const title =
`<template>
  <x-button @click="notice">有标题的</x-button>
</template>

<script>
  export default {
    methods: {
      notice () {
        this.$notice('这是一条提醒~', {
          title: '俺是标题'
        });
      }
    }
  };
<\/script>`;

  const types =
`<template>
  <x-button @click="default">default</x-button>
  <x-button @click="success">success</x-button>
  <x-button @click="warning">warning</x-button>
  <x-button @click="danger">danger</x-button>
  <x-button @click="dark">dark</x-button>
</template>

<script>
  export default {
    methods: {
      default () {
        this.$notice('这是一条提醒~', {
          title: '俺是标题'
        });
      },
      success () {
        this.$notice.success('这是一条提醒~', {
          title: '俺是标题'
        });
      },
      warning () {
        this.$notice.warning('这是一条提醒~', {
          title: '俺是标题'
        });
      },
      danger () {
        this.$notice.danger('这是一条提醒~', {
          title: '俺是标题'
        });
      },
      dark () {
        this.$notice.dark('这是一条提醒~', {
          title: '俺是标题'
        });
      }
    }
  };
<\/script>`;

  const showClose =
`<template>
  <x-button @click="notice">default</x-button>
</template>

<script>
  export default {
    methods: {
      notice () {
        this.$notice('我没有关闭按钮滴~', {
          showClose: false
        });
      }
    }
  };
<\/script>`;

  const setTimer =
`<template>
  <x-button @click="autoClose">不自动关闭</x-button>
  <x-button @click="autoClose">十秒后自动关闭</x-button>
</template>

<script>
  export default {
    methods: {
      // 取消自动关闭
      autoClose () {
        this.$notice('我是不自动关闭的~', {
          timer: 0
        });
      },
      // 十秒钟自动关闭
      autoClose () {
        this.$notice('十秒钟之后我将自己关闭', {
          timer: 10000
        });
      }
    }
  };
<\/script>`;

  const close1 =
`<template>
  <x-button @click="showNotice" v-if="!notice">打开一个通知</x-button>
  <x-button @click="closeNotice" v-else>关闭通知</x-button>
</template>

<script>
  export default {
    data () {
      return {
        notice: ''
      };
    },
    methods: {
      showNotice () {
        this.notice = this.$notice('新开的通知', {
          timer: 0
        });
      },
      closeNotice () {
        this.notice();
        this.notice = '';
      }
    }
  };
<\/script>`;

  const closeAllDemo =
`<template>
  <x-button @click="newNotice">打开一个通知</x-button>
  <x-button @click="closeAll">关闭所有通知</x-button>
</template>

<script>
  export default {
    methods: {
      newNotice () {
        this.notice = this.$notice('新开的通知~');
      },
      closeAll () {
        // 不传 nmae就是关闭所有的通知
        this.$notice.close();
      }
    }
  };
<\/script>`;

  const event =
`<template>
  <x-button @click="noticeEvent">事件</x-button>
</template>

<script>
  export default {
    methods: {
      noticeEvent () {
        this.$notice('我传入了点击和关闭回调~', (vm) => {
          alert('这条通知被点击了, 接收一个接收当前组件对象, 可以调用对象的 close 方法关闭窗口');
          vm.close();
        }, () => {
          alert('关闭了');
        });
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        title,
        types,
        showClose,
        setTimer,
        close1,
        closeAllDemo,
        event,
        notice: '',
        apiData: [
          {
            attribute: 'name',
            explain: '通知的唯一名称, 用于关闭时的参数',
            type: 'String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'title',
            explain: '通知的标题',
            type: 'String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'timer',
            explain: '通知自动关闭的时间',
            type: 'Number',
            values: '----',
            default: '5000'
          },
          {
            attribute: 'showIcon',
            explain: '显示icon',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'showClose',
            explain: '显示关闭按钮',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'icon',
            explain: '自定义通知的图标',
            type: 'String',
            values: '---',
            default: '---'
          }
        ]
      };
    },
    methods: {
      defaultFun () {
        this.$notice('这是一条提醒~');
      },
      haveTitle () {
        this.$notice('这是一条提醒~', {
          title: '俺是标题'
        });
      },
      typesNotice (type) {
        this.$notice[type]('这是一条提醒~', {
          title: '俺是标题'
        });
      },
      hideClose () {
        this.$notice('我没有关闭按钮滴~', {
          showClose: false
        });
      },
      timerClose (timer) {
        const msg = timer ? '十秒钟之后我将自己关闭' : '我是不自动关闭的';
        this.$notice(msg, {
          timer
        });
      },
      showNotice () {
        this.notice = this.$notice('新开的通知', {
          timer: 0
        });
      },
      closeNotice () {
        this.notice();
        this.notice = '';
      },
      newNotice () {
        this.notice = this.$notice('新开的通知~');
      },
      closeAll () {
        // 不传 nmae就是关闭所有的通知
        this.$notice.close();
      },
      noticeEvent () {
        this.$notice('我传入了点击和关闭回调~', (vm) => {
          alert('这条通知被点击了, 接收一个接收当前组件对象, 可以调用对象的 close 方法关闭窗口');
          vm.close();
        }, () => {
          alert('关闭了');
        });
      }
    }
  };
</script>

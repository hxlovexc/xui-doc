<template>
  <div>
    <div class="row">
      <h3 class="row-title">dialog 对话框</h3>
      <p>用于模拟系统的消息、成功、错误、询问，dialog下集成了三个方法 alert, confirm, prompt, 可以用 Promise 的方式操作反馈页可以使用传参的方式进行操作</p>
    </div>

    <!--消息提示-->
    <div class="row">
      <h3 class="row-title">alert - 消息提示</h3>
      <p>参数: (提示内容, 选项: 可选, 确认的回调, 取消的回调) - 支持 Promise 操作</p>
      <x-quote>
        <x-button @click="alert">alert</x-button>
        <source-code type="html" class="margin-top-10">{{alertDemo}}</source-code>
      </x-quote>
    </div>

    <!--询问框-->
    <div class="row">
      <h3 class="row-title">confirm - 询问框</h3>
      <p>参数与 alert 一致, 参数: (提示内容, 配置: 可选, 确认的回调, 取消的回调) - 支持 Promise 操作</p>
      <x-quote>
        <x-button @click="confirm">confirm</x-button>
        <source-code type="html" class="margin-top-10">{{confirmDemo}}</source-code>
      </x-quote>
    </div>

    <!--提交信息-->
    <div class="row">
      <h3 class="row-title">prompt - 提交信息</h3>
      <p>参数与 alert 一致, 参数: (配置: 可选, 确认的回调, 取消的回调) - 支持 Promise 操作</p>
      <x-quote>
        <x-button @click="prompt">prompt</x-button>
        <source-code type="html" class="margin-top-10">{{promptDemo}}</source-code>
      </x-quote>
    </div>

    <!--radius-->
    <div class="row">
      <h3 class="row-title">圆角</h3>
      <p>弹窗默认开启圆角, 如果要取消圆角 可以将 radius 设置成false - 支持所有弹窗</p>
      <x-quote>
        <x-button @click="noRadius">取消圆角</x-button>
        <source-code type="html" class="margin-top-10">{{noRadiusDemo}}</source-code>
      </x-quote>
    </div>

    <!--设置标题-->
    <div class="row">
      <h3 class="row-title">设置标题</h3>
      <p>可以通过选项中的 title 参数设置弹窗的标题 - 三个方法都支持</p>
      <x-quote>
        <x-button @click="titleFuns">自定义标题</x-button>
        <source-code type="html" class="margin-top-10">{{title}}</source-code>
      </x-quote>
    </div>

    <!--消息类的对话框-->
    <div class="row">
      <h3 class="row-title">消息类的对话框</h3>
      <p>可以通过选项中的 type 属性设置弹窗的类型, 类型有四种类型
        <span class="highlighted">success, error, warning, info</span> 注意:
        <span class="highlighted">type</span> 只支持
        <span class="highlighted">alert, confirm</span>方法
      </p>
      <x-quote>
        <x-button type="success" @click="dialog('success')">success</x-button>
        <x-button type="danger" @click="dialog('error')">error</x-button>
        <x-button type="warning" @click="dialog('warning')">warning</x-button>
        <x-button type="primary" @click="dialog('info')">info</x-button>
        <source-code type="html" class="margin-top-10">{{typeDemo}}</source-code>
      </x-quote>
    </div>

    <!--自定义图标-->
    <div class="row">
      <h3 class="row-title">自定义图标</h3>
      <p>可以通过选项中的 icon 参数设置弹窗的图标 - 注意:
        <span class="highlighted">icon</span> 只支持
        <span class="highlighted">alert, confirm</span>方法
      </p>
      <x-quote>
        <x-button @click="iconFuns">自定义图标</x-button>
        <source-code type="html" class="margin-top-10">{{title}}</source-code>
      </x-quote>
    </div>

    <!--自定义图标-->
    <div class="row">
      <h3 class="row-title">自定义 prompt 输入框提示信息</h3>
      <p>可以通过选项中的 inputPlaceholder 参数设置输入框的提示语 - 注意:
        <span class="highlighted">inputPlaceholder</span> 只支持
        <span class="highlighted">prompt</span>方法
      </p>
      <x-quote>
        <x-button @click="placeholderFuns">自定义input提示语</x-button>
        <source-code type="html" class="margin-top-10">{{placeholder}}</source-code>
      </x-quote>
    </div>

    <!--使用Promise-->
    <div class="row">
      <h3 class="row-title">使用 Promise</h3>
      <p>使用 Promise 处理回调 - 支持所有弹窗</p>
      <x-quote>
        <x-button @click="promiseFuns">Promise</x-button>
        <source-code type="html" class="margin-top-10">{{Promise}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>$dailog方法</h4>
      <api-table :data="methods" :keys="$propsKeys"></api-table>

      <h4>params</h4>
      <api-table :data="apiData" :keys="$propsKeys"></api-table>
    </div>
  </div>
</template>

<script>
  const alertDemo =
`<template>
  <x-button @click="alert">alert</x-button>
</template>

<script>
  export default {
    methods: {
      alert () {
        this.$dialog.alert('嗯哼~', () => {
          this.$notice('知道了~');
        }, () => {
          this.$notice('取消了~');
        });
      }
    }
  };
<\/script>`;
  const noRadiusDemo =
`<template>
  <x-button @click="noRadius">取消圆角</x-button>
</template>

<script>
  export default {
    methods: {
      alert () {
        this.$dialog.alert('嗯哼~', {
          radius: false
        });
      }
    }
  };
<\/script>`;

  const confirmDemo =
`<template>
  <x-button @click="confirm">confirm</x-button>
</template>

<script>
  export default {
    methods: {
      confirm () {
        this.$dialog.confirm('程序员哥哥们帅不帅?', () => {
          this.$notice('狂拽炫酷吊炸天~');
        }, () => {
          this.$notice('居然敢说程序员不帅~');
        });
      }
    }
  };
<\/script>`;

  const promptDemo =
`<template>
  <x-button @click="prompt">prompt</x-button>
</template>

<script>
  export default {
    methods: {
      confirm () {
        this.$dialog.prompt((value) => {
          this.$notice(\`点击了确定 - 你输入了: \${value}\`);
        }, (value) => {
          this.$notice(\`点击了取消 - 还是可以拿到您输入的: \${value}\`);
        });
      }
    }
  };
<\/script>`;

  const typeDemo =
`<template>
  <div>
    <x-button type="success" @click="dialog('success')">success</x-button>
    <x-button type="danger" @click="dialog('error')">error</x-button>
    <x-button type="warning" @click="dialog('warning')">warning</x-button>
    <x-button type="primary" @click="dialog('info')">info</x-button>
  </div>
</template>

<script>
  export default {
    methods: {
      dialog (type) {
        this.$dialog.confirm(\`这是一个\${type}类型的\`, {
          type
        });
      }
    }
  };
<\/script>`;

  // 标题
  const title =
`<template>
  <x-button @click="titleFuns">自定义标题</x-button>
</template>

<script>
  export default {
    methods: {
      titleFuns () {
        this.$dialog.confirm('嗯哼, 这是一个修改过标题的弹窗', {
          title: '程序员哥哥666'
        });
      }
    }
  };
<\/script>`;

  // placeholder
  const placeholder =
`<template>
  <x-button @click="dialog">自定义input提示语</x-button>
</template>

<script>
  export default {
    methods: {
      dialog () {
        this.$dialog.prompt({
          inputPlaceholder: '俺是提示用的, 这里输入内容~'
        });
      }
    }
  };
<\/script>`;

  // placeholder
  const Promise =
`<template>
  <x-button @click="promiseFuns">Promise</x-button>
</template>

<script>
  export default {
    methods: {
      dialog () {
        this.$dialog.confirm('啊啊啊 五环~~')
          .then(() => {
            this.$notice('点击了确定');
          })
          .catch(() => {
            this.$notice('点击了取消');
          });
      }
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        alertDemo,
        noRadiusDemo,
        confirmDemo,
        promptDemo,
        typeDemo,
        title,
        placeholder,
        Promise,
        methods: [
          {
            attribute: '$dialog.alert',
            explain: '信息提示',
            type: '---',
            values: '---',
            default: ''
          },
          {
            attribute: '$dialog.confirm',
            explain: '询问框',
            type: '---',
            values: '---',
            default: ''
          },
          {
            attribute: '$dialog.prompt',
            explain: '信息提交框',
            type: '---',
            values: '---',
            default: ''
          },
          {
            attribute: '$dialog.close',
            explain: '关闭弹窗',
            type: '---',
            values: '---',
            default: ''
          }
        ],
        apiData: [
          {
            attribute: 'title',
            explain: '弹窗标题 - 所有弹窗都支持',
            type: 'String | Number',
            values: '---',
            default: '提示'
          },
          {
            attribute: 'radius',
            explain: '弹窗圆角 - 所有弹窗都支持',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'closeButtonText',
            explain: '取消按钮的文字 - 所有弹窗都支持',
            type: 'String',
            values: '---',
            default: '取消'
          },
          {
            attribute: 'confirmButtonText',
            explain: '确认按钮的文字 - 所有弹窗都支持',
            type: 'String',
            values: '---',
            default: '确认'
          },
          {
            attribute: 'maskClose',
            explain: '点击遮罩关闭弹窗 - 所有弹窗都支持',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'escClose',
            explain: '按 ESC 键关闭弹窗 - 所有弹窗都支持',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'mask',
            explain: '显示遮罩 - 所有弹窗都支持',
            type: 'Boolean',
            values: 'true | false',
            default: 'true'
          },
          {
            attribute: 'type',
            explain: '弹窗的类型 - alert 和 confirm 方法支持',
            type: 'String',
            values: 'success | error | warning | info',
            default: '---'
          },
          {
            attribute: 'icon',
            explain: '自定义弹窗图标- alert 和 confirm 方法支持',
            type: 'String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'inputPlaceholder',
            explain: '输入框提示语 - 只支持 prompt 方法',
            type: 'String | Number',
            values: '---',
            default: '请输入内容'
          },
          {
            attribute: 'inputValue',
            explain: '输入框默认值 - 只支持 prompt 方法',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'promptRequired',
            explain: '输入框是否必填 - 只支持 prompt 方法, 开启后如果不填写内容点击确定将不会执行回调和关闭弹窗',
            type: 'String | Number',
            values: 'true | false',
            default: 'true'
          }
        ]
      };
    },
    methods: {
      alert () {
        this.$dialog.alert('嗯哼~', () => {
          this.$notice('知道了~');
        }, () => {
          this.$notice('取消了~');
        });
      },
      noRadius () {
        this.$dialog.alert('嗯哼! 木有圆角了~', {
          radius: false
        });
      },
      confirm () {
        this.$dialog.confirm('程序员哥哥们帅不帅?', () => {
          this.$notice('狂拽炫酷吊炸天~');
        }, () => {
          this.$notice('居然敢说程序员不帅~');
        });
      },
      prompt () {
        this.$dialog.prompt((value) => {
          this.$notice(`点击了确定 - 你输入了: ${value}`);
        }, (value) => {
          this.$notice(`点击了取消 - 还是可以拿到您输入的: ${value}`);
        });
      },
      dialog (type) {
        this.$dialog.confirm(`这是一个${type}类型的`, {
          type
        });
      },
      titleFuns () {
        this.$dialog.confirm('嗯哼, 这是一个修改过标题的弹窗', {
          title: '程序员哥哥666'
        });
      },
      iconFuns () {
        this.$dialog.confirm('俺是一个修改过图标的弹窗', {
          icon: 'x-icon-flame'
        });
      },
      placeholderFuns () {
        this.$dialog.prompt({
          inputPlaceholder: '俺是提示用的, 这里输入内容~'
        });
      },
      promiseFuns () {
        this.$dialog.confirm('啊啊啊 五环~~')
          .then(() => {
            this.$notice('点击了确定');
          })
          .catch(() => {
            this.$notice('点击了取消');
          });
      }
    }
  };
</script>

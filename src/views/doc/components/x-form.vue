<template>
  <div>
    <div class="row">
      <h3 class="row-title">form 表单布局</h3>
      <p>表单布局</p>
    </div>

    <!--基础-->
    <div class="row">
      <div class="row-title">基础</div>
      <x-quote>
        <x-form>
          <x-form-item label="用户名">
            <x-input v-model="form.name" placeholder="请输入用户名"></x-input>
          </x-form-item>
          <x-form-item label="密码">
            <x-input v-model="form.password" placeholder="请输入密码" input-type="password"></x-input>
          </x-form-item>
          <x-form-item label="地区">
            <x-select v-model="form.area">
              <x-option :value="1" label="北京"></x-option>
              <x-option :value="2" label="广东"></x-option>
              <x-option :value="3" label="湖南"></x-option>
            </x-select>
          </x-form-item>
          <x-form-item label="爱好">
            <x-checkbox-group v-model="form.hobby">
              <x-checkbox :label="1">打球</x-checkbox>
              <x-checkbox :label="2">看电影</x-checkbox>
              <x-checkbox :label="3">看书</x-checkbox>
            </x-checkbox-group>
          </x-form-item>
          <x-form-item label="年龄">
            <x-slider v-model="form.age"></x-slider>
          </x-form-item>
          <x-form-item label="记住密码">
            <x-switch v-model="form.remember"></x-switch>
          </x-form-item>
          <x-form-item label="备注">
            <x-textarea placeholder="请输入内容" v-model="form.remark"></x-textarea>
          </x-form-item>
          <x-form-item>
            <x-button>取消</x-button>
            <x-button type="primary">提交</x-button>
          </x-form-item>
        </x-form>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--对其方式-->
    <div class="row">
      <div class="row-title">对其方式</div>
      <p>
        可以通过 label-position 属性修改表单的对齐方式, 表单总共有三种对其方式
        <span class="highlighted">left, top, right</span> 默认
        <span class="highlighted">right</span>
         - 方块风格下对齐方式无效
      </p>
      <x-quote>
        <!--按钮-->
        <x-radio-group v-model="radioVal">
          <x-radio-button label="left">左对齐</x-radio-button>
          <x-radio-button label="top">顶部对齐</x-radio-button>
          <x-radio-button label="right">右对齐</x-radio-button>
        </x-radio-group>
        <x-form class="margin-top-10" :label-position="radioVal">
          <x-form-item label="用户名">
            <x-input></x-input>
          </x-form-item>
          <x-form-item label="密码">
            <x-input input-type="password"></x-input>
          </x-form-item>
          <x-form-item>
            <x-button type="primary">提交</x-button>
          </x-form-item>
        </x-form>
        <source-code type="html" class="margin-top-10">{{position}}</source-code>
      </x-quote>
    </div>

    <!--方块风格-->
    <div class="row">
      <div class="row-title">方块风格</div>
      <p>可以通过 pane 属性开启方块风格的表单 - 注意: 如果内容是 x-textarea 需要单独加一个 is-textarea 属性</p>
      <x-quote>
        <x-form pane>
          <x-form-item label="用户名">
            <x-input placeholder="请输入用户名"></x-input>
          </x-form-item>
          <x-form-item label="密码">
            <x-input placeholder="请输入密码" input-type="password"></x-input>
          </x-form-item>
          <x-form-item label="爱好">
            <x-checkbox-group v-model="form.hobby">
              <x-checkbox :label="1">打球</x-checkbox>
              <x-checkbox :label="2">看电影</x-checkbox>
              <x-checkbox :label="3">看书</x-checkbox>
            </x-checkbox-group>
          </x-form-item>
          <x-form-item label="年龄">
            <div style="margin-left:15px;margin-right:15px;">
              <x-slider v-model="form.age"></x-slider>
            </div>
          </x-form-item>
          <x-form-item label="备注" is-textarea>
            <x-textarea placeholder="请输入内容"></x-textarea>
          </x-form-item>
          <x-form-item label="记住密码">
            <x-switch v-model="form.remember"></x-switch>
          </x-form-item>
          <x-form-item>
            <x-button type="primary">提交</x-button>
          </x-form-item>
        </x-form>
        <source-code type="html" class="margin-top-10">{{pane}}</source-code>
      </x-quote>
    </div>

    <!--自定义label宽度-->
    <div class="row">
      <div class="row-title">自定义 label 宽度</div>
      <p>可以通过 label-width 属性设置label宽度 - 默认宽度110px, 如果只需要修改某一个item的宽度则单独给 x-form-item 添加 label-width</p>
      <x-quote>
        <x-form label-width="180px">
          <x-form-item label="用户名">
            <x-input placeholder="请输入用户名"></x-input>
          </x-form-item>
          <x-form-item label-width="150px" label="单独设置了宽度">
            <x-input placeholder="请输入密码" input-type="password"></x-input>
          </x-form-item>
          <x-form-item label="记住密码">
            <x-switch v-model="form.remember"></x-switch>
          </x-form-item>
          <x-form-item>
            <x-button type="primary">提交</x-button>
          </x-form-item>
        </x-form>
        <source-code type="html" class="margin-top-10">{{label}}</source-code>
      </x-quote>
    </div>

    <!--props-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-form props</h4>
      <api-table :data="formProps" :keys="$propsKeys"></api-table>

      <h4>x-form-item props</h4>
      <api-table :data="formItemProps" :keys="$propsKeys"></api-table>
    </div>
  </div>
</template>

<script>
  // 基础
  const base =
`<template>
  <x-form>
    <x-form-item label="用户名">
      <x-input v-model="form.name" placeholder="请输入用户名"></x-input>
    </x-form-item>
    <x-form-item label="密码">
      <x-input v-model="form.password" placeholder="请输入密码" input-type="password"></x-input>
    </x-form-item>
    <x-form-item label="地区">
      <x-select v-model="form.area">
        <x-option :value="1" label="北京"></x-option>
        <x-option :value="2" label="广东"></x-option>
        <x-option :value="3" label="湖南"></x-option>
      </x-select>
    </x-form-item>
    <x-form-item label="爱好">
      <x-checkbox-group v-model="form.hobby">
        <x-checkbox :label="1">打球</x-checkbox>
        <x-checkbox :label="2">看电影</x-checkbox>
        <x-checkbox :label="3">看书</x-checkbox>
      </x-checkbox-group>
    </x-form-item>
    <x-form-item label="年龄">
      <x-slider v-model="form.age"></x-slider>
    </x-form-item>
    <x-form-item label="记住密码">
      <x-switch v-model="form.remember"></x-switch>
    </x-form-item>
    <x-form-item label="备注">
      <x-textarea placeholder="请输入内容" v-model="form.remark"></x-textarea>
    </x-form-item>
    <x-form-item>
      <x-button>取消</x-button>
      <x-button type="primary">提交</x-button>
    </x-form-item>
  </x-form>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          password: '',
          area: '',
          hobby: [],
          age: 8,
          remember: '',
          remark: ''
        }
      };
    }
  };
<\/script>`;

  const position =
`<!--左对齐-->
<x-form class="margin-top-10" :label-position="left">
  <x-form-item label="用户名">
    <x-input></x-input>
  </x-form-item>
  <x-form-item label="密码">
    <x-input input-type="password"></x-input>
  </x-form-item>
  <x-form-item>
    <x-button type="primary">提交</x-button>
  </x-form-item>
</x-form>

<!--顶部对齐-->
<x-form class="margin-top-10" :label-position="top">
  <x-form-item label="用户名">
    <x-input></x-input>
  </x-form-item>
  <x-form-item label="密码">
    <x-input input-type="password"></x-input>
  </x-form-item>
  <x-form-item>
    <x-button type="primary">提交</x-button>
  </x-form-item>
</x-form>

<!--右对齐-->
<x-form class="margin-top-10" :label-position="right">
  <x-form-item label="用户名">
    <x-input></x-input>
  </x-form-item>
  <x-form-item label="密码">
    <x-input input-type="password"></x-input>
  </x-form-item>
  <x-form-item>
    <x-button type="primary">提交</x-button>
  </x-form-item>
</x-form>`;

  // 方块
  const pane =
`<x-form pane>
  <x-form-item label="用户名">
    <x-input v-model="form.name" placeholder="请输入用户名"></x-input>
  </x-form-item>
  <x-form-item label="密码">
    <x-input v-model="form.password" placeholder="请输入密码" input-type="password"></x-input>
  </x-form-item>
  <x-form-item label="爱好">
    <x-checkbox-group v-model="form.hobby">
      <x-checkbox :label="1">打球</x-checkbox>
      <x-checkbox :label="2">看电影</x-checkbox>
      <x-checkbox :label="3">看书</x-checkbox>
    </x-checkbox-group>
  </x-form-item>
  <x-form-item label="年龄">
    <div style="margin-left:15px;margin-right:15px;">
      <x-slider v-model="form.age"></x-slider>
    </div>
  </x-form-item>
  <!--我需要多一个 is-textarea 属性-->
  <x-form-item label="备注"  is-textarea>
    <x-textarea placeholder="请输入内容" v-model="form.remark"></x-textarea>
  </x-form-item>
  <x-form-item label="记住密码">
    <x-switch v-model="form.remember"></x-switch>
  </x-form-item>
  <x-form-item>
    <x-button type="primary">提交</x-button>
  </x-form-item>
</x-form>`;

  // label-width
  const label =
`<!--设置 label 的宽度为180px-->
<x-form label-width="180px">
  <x-form-item label="用户名">
    <x-input v-model="form.name" placeholder="请输入用户名"></x-input>
  </x-form-item>
  <!--我要短一些-->
  <x-form-item label-width="150px" label="单独设置了宽度">
    <x-input v-model="form.password" placeholder="请输入密码" input-type="password"></x-input>
  </x-form-item>
  <x-form-item label="记住密码">
    <x-switch v-model="form.remember"></x-switch>
  </x-form-item>
  <x-form-item>
    <x-button type="primary">提交</x-button>
  </x-form-item>
</x-form>`;

  export default {
    data () {
      return {
        base,
        position,
        pane,
        label,
        form: {
          name: '',
          password: '',
          area: '',
          age: 10,
          hobby: [],
          remember: '',
          remark: ''
        },
        radioVal: 'right',
        // api
        formProps: [
          {
            attribute: 'label-position',
            explain: 'label位置',
            type: 'String',
            values: 'left | top | right',
            default: 'right'
          },
          {
            attribute: 'pane',
            explain: '卡片风格',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'label-width',
            explain: '表单label宽度',
            type: 'String',
            values: '---',
            default: '---'
          }
        ],
        formItemProps: [
          {
            attribute: 'label-width',
            explain: '表单label宽度',
            type: 'String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'is-textarea',
            explain: '只在 pane 为 true下生效 - item下是textarea 或者需要类似的布局才开启',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ]
      };
    }
  };
</script>

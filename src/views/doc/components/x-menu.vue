<template>
  <div>
    <div class="row">
      <h3 class="row-title">menu 警告提示</h3>
      <p>导航菜单分为顶部导航和侧边导航，是为页面提供导航功能</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <p>每一个 x-menut-item 或者 x-submenu都应该设置一个name, 为唯一标识</p>
      <x-quote>
        <x-menu>
          <x-menu-item name="1">
            <i class="x-icon-alert"></i>
            菜单一
          </x-menu-item>
          <x-menu-item name="2">
            <i class="x-icon-alert"></i>
            菜单二
          </x-menu-item>
          <x-menu-item name="3">
            <i class="x-icon-alert"></i>
            菜单三
          </x-menu-item>
        </x-menu>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--二级菜单-->
    <div class="row">
      <h3 class="row-title">二级菜单</h3>
      <x-quote>
        <x-menu>
          <x-menu-item name="1">菜单一</x-menu-item>
          <x-submenu name="2">
            <template slot="title">菜单二</template>
            <x-menu-item name="1">菜单一</x-menu-item>
            <x-menu-item name="2">菜单二</x-menu-item>
            <x-menu-item name="3">菜单三</x-menu-item>
          </x-submenu>
          <x-menu-item name="3">菜单三</x-menu-item>
        </x-menu>
        <source-code type="html" class="margin-top-10">{{subMenu}}</source-code>
      </x-quote>
    </div>

    <!--垂直展示-->
    <h3 class="row-title">垂直展示</h3>
    <div class="row">
      <h3 class="row-title">默认</h3>
      <p>可以通过设置 <span class="highlighted">mode</span> 属性为 vertical 让导航垂直展示, 默认 level</p>
      <x-quote>
        <x-menu>
          <x-menu-item name="1">菜单一</x-menu-item>
          <x-submenu name="2">
            <template slot="title">菜单二</template>
            <x-menu-item name="1">菜单一</x-menu-item>
            <x-menu-item name="2">菜单二</x-menu-item>
            <x-menu-item name="3">菜单三</x-menu-item>
          </x-submenu>
          <x-menu-item name="3">菜单三</x-menu-item>
        </x-menu>
        <source-code type="html" class="margin-top-10">{{vertical}}</source-code>
      </x-quote>
    </div>

    <!--二级菜单-->
    <div class="row">
      <h3 class="row-title">二级菜单 (垂直)</h3>
      <x-quote>
        <div style="width:200px">
          <x-menu mode="vertical">
            <x-menu-item name="1">菜单一</x-menu-item>
            <x-submenu name="2">
              <template slot="title">菜单二</template>
              <x-menu-item name="1">菜单一</x-menu-item>
              <x-menu-item name="2">菜单二</x-menu-item>
              <x-menu-item name="3">菜单三</x-menu-item>
            </x-submenu>
            <x-menu-item name="3">菜单三</x-menu-item>
          </x-menu>
        </div>
        <source-code type="html" class="margin-top-10">{{verticalSubMenu}}</source-code>
      </x-quote>
    </div>

    <!--颜色类型-->
    <div class="row">
      <h3 class="row-title">颜色类型</h3>
      <p>
        可以通过设置 <span class="highlighted">theme</span>属性修改菜单颜色类型, 总共有六种类型:
        <span class="highlighted">baise, primary, success, warning, danger, dark</span>
        默认 <span class="highlighted">primary</span>
      </p>
      <x-quote>
        <div>
          <p>选择颜色类型:</p>
          <x-radio-group size="small" v-model="theme">
            <x-radio-button label="baise">baise</x-radio-button>
            <x-radio-button label="primary">primary</x-radio-button>
            <x-radio-button label="success">success</x-radio-button>
            <x-radio-button label="warning">warning</x-radio-button>
            <x-radio-button label="danger">danger</x-radio-button>
            <x-radio-button label="dark">dark</x-radio-button>
          </x-radio-group>
        </div>
        </br>
        <x-menu :theme="theme">
          <x-menu-item name="1">菜单一</x-menu-item>
          <x-submenu name="2">
            <template slot="title">菜单二</template>
            <x-menu-item name="1">菜单一</x-menu-item>
            <x-menu-item name="2">菜单二</x-menu-item>
            <x-menu-item name="3">菜单三</x-menu-item>
          </x-submenu>
          <x-menu-item name="3">菜单三</x-menu-item>
        </x-menu>
        </br>
        <!-- 垂直 -->
        <div style="width:200px">
          <x-menu mode="vertical" :theme="theme">
            <x-menu-item name="1">菜单一</x-menu-item>
            <x-submenu name="2">
              <template slot="title">菜单二</template>
              <x-menu-item name="1">菜单一</x-menu-item>
              <x-menu-item name="2">菜单二</x-menu-item>
              <x-menu-item name="3">菜单三</x-menu-item>
            </x-submenu>
            <x-menu-item name="3">菜单三</x-menu-item>
          </x-menu>
        </div>
        <source-code type="html" class="margin-top-10">{{themeTpl}}</source-code>
      </x-quote>
    </div>

    <!--props-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>menu props</h4>
      <api-table :data="menuProps" :keys="$propsKeys"></api-table>

      <h4>x-menu-item & x-submenu props</h4>
      <api-table :data="itemProps" :keys="$propsKeys"></api-table>

      <h4>x-menu events</h4>
      <api-table :data="events" :keys="$eventKeys"></api-table>
    </div>
  </div>
</template>

<script>
  // 基础
  const base =
`<x-menu>
  <x-menu-item name="1">
    <i class="x-icon-alert"></i>
    菜单一
  </x-menu-item>
  <x-menu-item name="2">
    <i class="x-icon-alert"></i>
    菜单二
  </x-menu-item>
  <x-menu-item name="3">
    <i class="x-icon-alert"></i>
    菜单三
  </x-menu-item>
</x-menu>`;

  // 二级菜单
  const subMenu =
`<x-menu>
  <x-menu-item name="1">菜单一</x-menu-item>
  <x-submenu name="2">
    <template slot="title">菜单二</template>
    <x-menu-item name="1">菜单一</x-menu-item>
    <x-menu-item name="2">菜单二</x-menu-item>
    <x-menu-item name="3">菜单三</x-menu-item>
  </x-submenu>
  <x-menu-item name="3">菜单三</x-menu-item>
</x-menu>`;

  const vertical =
`<x-menu mode="vertical">
  <x-menu-item name="1">
    <i class="x-icon-alert"></i>
    菜单一
  </x-menu-item>
  <x-menu-item name="2">
    <i class="x-icon-alert"></i>
    菜单二
  </x-menu-item>
  <x-menu-item name="3">
    <i class="x-icon-alert"></i>
    菜单三
  </x-menu-item>
</x-menu>`;

  // 二级菜单
  const verticalSubMenu =
`<x-menu mode="vertical">
  <x-menu-item name="1">菜单一</x-menu-item>
  <x-submenu name="2">
    <template slot="title">菜单二</template>
    <x-menu-item name="1">菜单一</x-menu-item>
    <x-menu-item name="2">菜单二</x-menu-item>
    <x-menu-item name="3">菜单三</x-menu-item>
  </x-submenu>
  <x-menu-item name="3">菜单三</x-menu-item>
</x-menu>`;

  const themeTpl =
`<template>
  <div>
    <p>选择颜色类型:</p>
    <x-radio-group size="small" v-model="theme">
      <x-radio-button label="baise">baise</x-radio-button>
      <x-radio-button label="primary">primary</x-radio-button>
      <x-radio-button label="success">success</x-radio-button>
      <x-radio-button label="warning">warning</x-radio-button>
      <x-radio-button label="danger">danger</x-radio-button>
      <x-radio-button label="dark">dark</x-radio-button>
    </x-radio-group>
  </div>

  <x-menu :theme="theme">
    <x-menu-item name="1">菜单一</x-menu-item>
    <x-submenu name="2">
      <template slot="title">菜单二</template>
      <x-menu-item name="1">菜单一</x-menu-item>
      <x-menu-item name="2">菜单二</x-menu-item>
      <x-menu-item name="3">菜单三</x-menu-item>
    </x-submenu>
    <x-menu-item name="3">菜单三</x-menu-item>
  </x-menu>
  
  <!-- 垂直 -->
  <div style="width:200px">
    <x-menu mode="vertical" :theme="theme">
      <x-menu-item name="1">菜单一</x-menu-item>
      <x-submenu name="2">
        <template slot="title">菜单二</template>
        <x-menu-item name="1">菜单一</x-menu-item>
        <x-menu-item name="2">菜单二</x-menu-item>
        <x-menu-item name="3">菜单三</x-menu-item>
      </x-submenu>
      <x-menu-item name="3">菜单三</x-menu-item>
    </x-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        theme: 'primary'
      };
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        subMenu,
        vertical,
        verticalSubMenu,
        theme: 'primary',
        themeTpl,
        menuProps: [
          {
            attribute: 'active',
            explain: '当前激活的导航',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'mode',
            explain: '导航展示类型',
            type: 'String | Number',
            values: 'level | vertical',
            default: 'level'
          },
          {
            attribute: 'theme',
            explain: '颜色类型',
            type: 'String | Number',
            values: 'baise | primary | success | warning | danger | dark',
            default: 'primary'
          }
        ],
        itemProps: [
          {
            attribute: 'name',
            explain: '菜单唯一标识',
            type: 'String | Number',
            values: '---',
            default: '---'
          }
        ],
        events: [
          {
            events: 'select',
            explain: '菜单选择时的回调',
            params: '当前菜单的name'
          }
        ]
      };
    }
  };
</script>


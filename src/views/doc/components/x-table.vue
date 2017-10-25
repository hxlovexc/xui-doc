<template>
  <div>
    <div class="row">
      <h3 class="row-title">table 表格</h3>
      <p>用于数据展示表格</p>
    </div>

    <!--基础-->
    <div class="row">
      <h3 class="row-title">基础</h3>
      <x-quote>
        <x-table :data="list">
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
          <x-table-column label="状态" name="state"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{base}}</source-code>
      </x-quote>
    </div>

    <!--添加序列-->
    <div class="row">
      <h3 class="row-title">添加序列</h3>
      <p>表格组件内置了一个 <span class="highlighted">$index</span> 的 name, 如果需要在那一列添加序号可以将 name 设置为 $index</p>
      <x-quote>
        <x-table :data="list">
          <x-table-column label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{index}}</source-code>
      </x-quote>
    </div>

    <!--size分类-->
    <div class="row">
      <h3 class="row-title">size分类</h3>
      <p>
        可以通过 size 属性设置表格的大小， 表格只有三种大小:
        <span class="highlighted">large(最大), default(默认), small(小的)</span>
         - 默认 <span class="highlighted">default</span>
      </p>
      <x-quote>
        <div class="margin-top-10" v-for="item in $size" :key="item" v-if="item !== 'mini'">
          <h5>{{item}}</h5>
          <x-table :data="list" :size="item">
            <x-table-column label="序列" name="$index"></x-table-column> 
            <x-table-column label="名称" name="name"></x-table-column>
            <x-table-column label="年龄" name="age"></x-table-column>
          </x-table>
          </br>
        </div>
        <source-code type="html" class="margin-top-10">{{size}}</source-code>
      </x-quote>
    </div>

    <!--外边框-->
    <div class="row">
      <h3 class="row-title">外边框</h3>
      <p>可以通过 bordered 属性开启表格外边框 - 默认 false</p>
      <x-quote>
        <x-table :data="list" bordered>
          <x-table-column label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{bordered}}</source-code>
      </x-quote>
    </div>

    <!--斑马线风格-->
    <div class="row">
      <h3 class="row-title">斑马线风格</h3>
      <p>可以通过 striped 属性开启表格斑马线风格 - 默认 false</p>
      <x-quote>
        <x-table :data="list" bordered striped>
          <x-table-column label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{striped}}</source-code>
      </x-quote>
    </div>

    <!--hover背景-->
    <div class="row">
      <h3 class="row-title">hover背景</h3>
      <p>可以通过 hover 属性开启表格hover突出背景 - 默认 false</p>
      <x-quote>
        <x-table :data="list" hover>
          <x-table-column label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{hover}}</source-code>
      </x-quote>
    </div>

    <!--无表框表格-->
    <div class="row">
      <h3 class="row-title">无表框表格</h3>
      <p>可以通过 no-border 属性移除表格所有边框 - 默认 false</p>
      <x-quote>
        <x-table :data="list" no-border>
          <x-table-column label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{noBorder}}</source-code>
      </x-quote>
    </div>

    <!--设置表格对应列的宽度-->
    <div class="row">
      <h3 class="row-title">设置表格对应列的宽度</h3>
      <p>可以通过 width 属性移除表格某列的宽度</p>
      <x-quote>
        <x-table :data="list">
          <!--固定80px宽-->
          <x-table-column :width="80" label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{width}}</source-code>
      </x-quote>
    </div>

    <!--自定义表头模版-->
    <div class="row">
      <h3 class="row-title">自定义表头模版</h3>
      <p>如需自定义表头模版可以在 x-table-column 组件中传入一个名称为 head 的 slot</p>
      <x-quote>
        <x-table :data="list">
          <x-table-column label="序列" name="$index"></x-table-column>
          <x-table-column name="name">
            <template slot="head">
              <x-tag>名称 - 我使用了自定义表头</x-tag>
            </template>
          </x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{theadTpl}}</source-code>
      </x-quote>
    </div>

    <!--自定义列模板-->
    <div class="row">
      <h3 class="row-title">自定义列模板</h3>
      <p>当某一列的内容不单纯显示数据时，可以使用自定义模版， 使用scope接收数据(如果使用自定义模版同时传入了name，那么scope的值就是name所对应的值) - 可以传入组件</p>
      <x-quote>
        <x-table :data="list">
          <x-table-column label="序列" name="$index"></x-table-column>
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age">
            <template scope="data">
              <x-tag>{{data}}</x-tag>
            </template>
          </x-table-column>
          <x-table-column label="操作" :width="100">
            <template scope="data">
              <x-button size="mini" type="danger" @click="showData(data)">操作</x-button>
            </template>
          </x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{rowTpl}}</source-code>
      </x-quote>
    </div>

    <!--固定表头-->
    <div class="row">
      <h3 class="row-title">固定表头</h3>
      <p>通过 height 属性给表格设置高度, 设置高度后表头会自动固定在顶端</p>
      <x-quote>
        <x-table bordered :data="listData" :height="250">
          <x-table-column :width="180" label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{fixed}}</source-code>
      </x-quote>
    </div>

    <!--排序-->
    <div class="row">
      <h3 class="row-title">排序</h3>
      <p>通过给 x-table-column 组件设置 sort 属性开启排序 - 如果需要自定义排序可以传入 sort-method 方法接收 key: 点击当前列的key type: 向上还是向下排序</p>
      <x-quote>
        <x-table bordered :data="sortList">
          <x-table-column :width="180" label="序列" name="$index"></x-table-column> 
          <x-table-column label="名称" name="name"></x-table-column>
          <x-table-column label="年龄" sort name="age"></x-table-column>
        </x-table>
        <source-code type="html" class="margin-top-10">{{sort}}</source-code>
      </x-quote>
    </div>

    <!--API-->
    <div class="row">
      <h3 class="row-title">API</h3>
      <h4>x-table props</h4>
      <api-table :data="tableProps" :keys="$propsKeys"></api-table>
      <!--x-table-column-->
      <h4>x-table props</h4>
      <api-table :data="tableColumnProps" :keys="$propsKeys"></api-table>
      <!--x-table-column slot-->
      <h4>x-table-column slot</h4>
      <api-table :data="tableColumnSlot" :keys="$propsKeys"></api-table>
      <!--events-->
      <!-- <h4>events</h4> -->
      <!-- <api-table :data="eventsData" :keys="$eventKeys"></api-table> -->
    </div>
  </div>
</template>

<script>
  const base =
`<template>
  <x-table :data="list">
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
    <x-table-column label="状态" name="state"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: 1
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: 2
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: 1
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: 2
          }
        ]
      };
    }
  };
<\/script>`;

  const index =
`<template>
  <x-table :data="list">
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  // size分类
  const size =
`<template>
  <!--large-->
  <x-table :data="list" size="large">
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>

  <!--default>-->
  <x-table :data="list" size="default">
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>

  <!--small-->
  <x-table :data="list" size="small">
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  // 外边框
  const bordered =
`<template>
  <x-table :data="list" bordered>
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  // 斑马线风格
  const striped =
`<template>
  <x-table :data="list" bordered striped>
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  // hover背景
  const hover =
`<template>
  <x-table :data="list" bordered striped>
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  // 无边框表格
  const noBorder =
`<template>
  <x-table :data="list" no-border striped>
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  // 宽度设置
  const width =
`<template>
  <x-table :data="list">
    <!--序列 固定80px宽-->
    <x-table-column :width="80" label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  // 自定义表头
  const theadTpl =
`<template>
  <x-table :data="list">
    <x-table-column label="序列" name="$index"></x-table-column>
    <x-table-column name="name">
      <!--自定义表头-->
      <template slot="head">
        <x-tag>名称 - 我使用了自定义表头</x-tag>
      </template>
    </x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0
          }, {
            name: '名称02',
            age: 22,
            sex: 1
          }, {
            name: '名称03',
            age: 23,
            sex: 0
          }, {
            name: '名称04',
            age: 24,
            sex: 0
          }, {
            name: '名称05',
            age: 25,
            sex: 1
          }
        ]
      };
    }
  };
<\/script>`;

  // row tpl
  const rowTpl =
`<template>
  <x-table :data="list">
    <x-table-column label="序列" name="$index"></x-table-column>
    <x-table-column label="名称" name="name"></x-table-column>
    <!--这里使用了自定义模版同时传入了name属性, 所以scope的值不是整行数据而是年龄-->
    <x-table-column label="年龄" name="age">
      <template scope="data">
        <x-tag>{{data}}</x-tag>
      </template>
    </x-table-column>
    <x-table-column label="操作">
      <template scope="data">
        <x-button size="mini" type="danger" @click="showData(data)">删除</x-button>
      </template>
    </x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    },
    methods: {
      showData (data) {
        alert(\`当前点击的数据是: \${JSON.stringify(data)\}\`);
      }
    }
  };
<\/script>`;

  const fixed =
`<template>
  <x-table bordered :height="250" :data="list">
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <x-table-column label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  const sort =
`<template>
  <x-table bordered :height="250" :data="list">
    <x-table-column label="序列" name="$index"></x-table-column> 
    <x-table-column label="名称" name="name"></x-table-column>
    <!--age开启排序-->
    <x-table-column sort label="年龄" name="age"></x-table-column>
  </x-table>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ]
      };
    }
  };
<\/script>`;

  export default {
    data () {
      return {
        base,
        index,
        size,
        bordered,
        striped,
        hover,
        noBorder,
        width,
        rowTpl,
        fixed,
        sort,
        theadTpl,
        list: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }
        ],
        listData: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称06',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称07',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称08',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称09',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称10',
            age: 25,
            sex: 1,
            state: false
          }
        ],
        sortList: [
          {
            name: '名称01',
            age: 21,
            sex: 0,
            state: 1
          }, {
            name: '名称02',
            age: 22,
            sex: 1,
            state: false
          }, {
            name: '名称03',
            age: 23,
            sex: 0,
            state: true
          }, {
            name: '名称04',
            age: 24,
            sex: 0,
            state: false
          }, {
            name: '名称05',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称06',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称07',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称08',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称09',
            age: 25,
            sex: 1,
            state: false
          }, {
            name: '名称10',
            age: 25,
            sex: 1,
            state: false
          }
        ],
        tableProps: [
          {
            attribute: 'data',
            explain: '表格数据',
            type: 'Array',
            values: '---',
            default: '---'
          },
          {
            attribute: 'size',
            explain: '设置表格的大小',
            type: 'String',
            values: 'large | default | small',
            default: 'default'
          },
          {
            attribute: 'height',
            explain: '设置表格高度 - 设置后表头自动固定',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'bordered',
            explain: '设置表格外边框',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'striped',
            explain: '斑马线风格',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'hover',
            explain: 'tr hover背景',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'no-border',
            explain: '无边框表格',
            type: 'Boolean',
            values: 'true | false',
            default: 'false'
          }
        ],
        tableColumnProps: [
          {
            attribute: 'label',
            explain: '表头内容 - 如果需要自定义可以使用slog',
            type: 'String | Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'name',
            explain: '表格当前列的 key',
            type: 'String',
            values: '---',
            default: '---'
          },
          {
            attribute: 'width',
            explain: '设置对应列的宽度',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'width',
            explain: '设置对应列的宽度',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: '$index',
            explain: '数据索引 - 只需要在显示索引的列将name设置成$index',
            type: 'Number',
            values: '---',
            default: '---'
          },
          {
            attribute: 'sort',
            explain: '开启排序',
            type: 'Number',
            values: 'true | false',
            default: 'false'
          },
          {
            attribute: 'sort-method',
            explain: '当前列的自定义排序方法',
            type: 'Function',
            values: '---',
            default: '---'
          }
        ],
        tableColumnSlot: [
          {
            attribute: 'default',
            explain: '自定义列模版',
            type: '---',
            values: '---',
            default: '---'
          },
          {
            attribute: 'head',
            explain: '自定义当前列的表头模版',
            type: '---',
            values: '---',
            default: '---'
          }
        ]
      };
    },
    methods: {
      showData (data) {
        alert(`当前点击的数据是: ${JSON.stringify(data)}`);
      }
    }
  };
</script>

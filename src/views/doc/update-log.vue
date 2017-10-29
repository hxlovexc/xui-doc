<template>
  <div>
    <div class="row">
      <h3 class="row-title">更新日志</h3>
    </div>
    <div class="log">
      <div class="log-item" v-for="(item, index) in list" :key="index">
        <div class="version">
          <h3>{{item.version}}</h3>
          <span>{{item.date}}</span>
        </div>
        <p v-if="item.msg">{{item.msg}}</p>
        <ul v-if="item.newFeatures.length">
          <h4>新特性</h4>
          <li v-for="(features, eq) in item.newFeatures" :key="eq">{{eq + 1}}、{{features}}</li>
        </ul>
        <ul v-if="item.repair.length">
          <h4>修复bug</h4>
          <li v-for="(repair, eq) in item.repair" :key="eq">{{eq + 1}}、{{repair}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            version: 'v0.6.3',
            date: '2017-9-12',
            newFeatures: [],
            repair: [
              '修复x-notice默认类型会保留上一个type',
              '修复x-button字体颜色问题'
            ]
          },
          {
            version: 'v0.6.2',
            date: '2017-10-25',
            msg: '添加组件单独lib打包',
            newFeatures: [
              '新增 x-message组件',
              '新增x-menu组件'
            ],
            repair: []
          },
          {
            version: 'v0.6.1',
            date: '2017-9-11',
            msg: 'vue-xui 第一个版本发布',
            newFeatures: [],
            repair: []
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .log {
    padding-left: 26px;
    position: relative;
    margin-left: 7px;

    &::after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #e2e2e2;
    }
  }

  .log-item {
    position: relative;
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }

    & > p {
      margin-top: 12px;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: -33px;
      background: #fff;
      z-index: 99;
      border: 1px solid  #4399ff;
    }

    .version {
      h3 {
        margin: 0;
        line-height: 1;
      }

      span {
        border: 1px solid #e2e2e2;
        font-size: 12px;
        padding: 3px 5px;
        color: #848484;
        line-height: 1;
        margin-left: 12px;
      }


      h3,
      span {
        display: inline-block;
      }
    }

    ul {
      padding-top: 5px;
      color: #666;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }

      h4 {
        margin: 7px 0;
        background: #eeeeee;
        border-left: 4px solid #4399ff;
        font-weight: normal;
        font-size: 15px;
        padding: 5px 0 5px 12px;
      }

      li {
        line-height: 1.45;
        padding-top: 8px;
      }
    }
  }
</style>

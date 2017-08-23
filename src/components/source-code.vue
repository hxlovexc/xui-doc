<template>
  <div class="code-box">
    <div class="copy-button" v-if="showCopy" @click="copy" title="copy">
      <i class="x-icon-copy-outline"></i>
    </div>
    <pre><code :class="type"><slot></slot></code></pre>
  </div>
</template>

<script>
  import 'highlight.js/styles/atom-one-dark.css'
  import highlightjs from 'highlight.js'
  import Copy from 'clipboard'

  export default {
    props: {
      type: String,
      showCopy: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      copy () {
        let text = this.$slots.default[0].text
        const clipboard = new Copy('.copy-button', {
          text () {
            return text
          }
        })

        clipboard.on('success', () => {
          // 销毁
          clipboard.destroy()
          this.$toastr('复制成功!', {
            type: 'success'
          })
        })
      }
    },
    mounted () {
      highlightjs.highlightBlock(this.$el.querySelector('code'))
    }
  }
</script>

<style lang="scss" scoped>
  // top
  $top: 10px;
  $right: 15px;

  .code-box {
    position: relative;

    // 拷贝
    .copy-button {
      position: absolute;
      top: $top;
      right: $right;
      cursor: pointer;
      color: #A9A9A9;
      transition: color 0.1s;
      display: none;

      &:hover {
        color: #fff;
      }

      i {
        font-size: 22px;
        line-height: 1;
      }
    }

    &:hover .copy-button{
      display: inline-block;
    }

    pre{
      font-family: inherit;
    }
    
    code{
      border-radius: 2px;
      font-size: 16px;
      padding: $top $right;
      font-family: inherit;
      border-radius: 4px;
    }
  }
</style>


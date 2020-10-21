<template>
  <div id="app">
    <div class="main">
      <!-- 根据文字是否溢出展示tooltip start -->
      <div class="title">根据文字是否溢出展示tooltip</div>
      <div class="content">
        <v-response-tooltip
          content="我是content我是content我是content我是content我是content"
          placement="top"
          :over-width-display="true">
          <div class="value">请调整屏幕宽度,鼠标滑过文字查看效果：我是content我是content我是content我是content我是content</div>
        </v-response-tooltip>
      </div>
      <!-- 根据文字是否溢出展示tooltip end -->

       <!-- 始终展示tooltip start -->
      <div class="title">始终展示tooltip</div>
      <div class="content">
        <v-response-tooltip
          content="我是content我是content我是content我是content我是content"
          placement="top"
          :over-width-display="false">
          <div class="value">我是content我是content我是content我是content我是content</div>
        </v-response-tooltip>
      </div>
      <!-- 始终展示tooltip end -->
    </div>
  </div>
</template>

<script>
import vResponseTooltip from '../src/lib/v-response-tooltip.vue'
export default {
  name: 'app',
  components: {
    vResponseTooltip
  },
  data () {
    return {
    }
  }

}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  background:rgba(1, 3, 46, 1);
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul{
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
  width: 90%;
  margin: 10px auto;
  background: rgba(255,255,255,0.05)
}
.main{
  padding: 16px;
}
.title{
  height: 30px;
  line-height: 30px;
  background: rgba(255,255,255,0.05);
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border-left: 2px solid #259ee3;
  padding-left: 4px;
  margin: 16px 0;
}
.block{
  color: coral;
  background: #867f7f61;
  padding: 0 16px;
  display: inline-block;
  border-radius: 5px;
  font-weight: 500;
  margin: 0 5px;
}
.value {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
}
</style>

<template>
  <div id=vue3-app>
    <a-button type="primary">Primary Button</a-button>
    <div id='public-links' @click="onRouteChange">
      <router-link to="/" page-path=''>Home</router-link> |
      <router-link to="/page2" page-path='/page2'>Page2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { notification } from 'ant-design-vue'
export default {
  name: 'App',
  methods: {
    // 子应用内部跳转时，通知侧边栏改变菜单状态
    onRouteChange () {
      if (window.__MICRO_APP_ENVIRONMENT__) {
        // 发送全局数据，通知侧边栏修改菜单展示
        window.microApp.setGlobalData({ name: window.__MICRO_APP_NAME__ })
      }
    }
  },
  mounted () {
    notification['info']({
        message:'通知',
        description:'测试vue3子应用',
        closeIcon:'',
        duration: 3,
    });
  }
}
</script>

<style lang="scss">
#vue3-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

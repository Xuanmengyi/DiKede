<template>
  <div>
    <navBar></navBar>
    <leftMenu></leftMenu>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import navBar from './components/NavBar.vue'
import leftMenu from './components/leftMenu/index.vue'
import AppMain from './components/AppMain.vue'
export default {
  components: {
    navBar,
    leftMenu,
    AppMain
  }
}
</script>

<style>
  body {
    min-width: 1366px;
    min-height: 600px;
    overflow: hidden;
    overflow-x: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}

</style>

<template>
  <div>
    <navBar></navBar>
    <leftMenu></leftMenu>
  </div>
</template>

<script>
import navBar from './components/NavBar.vue'
import leftMenu from './components/leftMenu/index.vue'
export default {
  components: {
    navBar,
    leftMenu
  }
}
</script>

<style>

</style>

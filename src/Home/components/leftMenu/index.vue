<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper" style="margin-bottom:-15px;margin-right:15px;">
      <el-menu
        :default-active="activeMenu"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style lang="scss">
  .el-menu{
    border: 0;
    border-bottom: 0;
  }
  .el-scrollbar__bar.is-vertical {
    display: none;
}
 .el-scrollbar__bar.is-horizontal {
    display: none;
}
  .el-scrollbar{
    width: 167px !important;
    height: 100%;
    margin-top: 15px;
  }
  .el-submenu__icon-arrow{
    right:0;
}
.el-submenu__title {
    padding-left: 5px;
    color:black
}
.el-submenu__title i {
        color:black
    }
    .el-submenu .sub-el-icon{
      margin-right: 15px;
    }
.el-menu-item {
  height: 56px;
    color:black;
    margin-right: 15px;
    .sub-el-icon{
      margin-right: 15px;
    }
}
.el-menu-item i{
    color: black;
}
.el-menu-item-group__title {
    padding: 0;
}
.el-submenu .el-menu-item{
    color: #999;
}
.el-submenu .el-menu-item.is-active{
    color: #5f84ff!important;
}
.el-submenu ul{
  padding-left: 13px;
}
.el-submenu.is-active>.el-submenu__title {
    color: #5f84ff!important;
}
</style>

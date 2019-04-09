<template>
  <div class="ac-header is-flex is-between">
    <div class="ac-sidebar-toggle">
      <Icon icon="stream"
            @click="toggleSidebarFold" />
    </div>
    <div class="is-flex is-center ac-sidebar-slot">
      <component v-for="(value, key) in $store.state.dynamicComponent.HEADER_RIGHT_MENUS"
                 :key="key"
                 :is="value"></component>
      <CUserCenterEntry></CUserCenterEntry>
    </div>
  </div>
</template>
<script>
import CUserCenterEntry from '../UserCenterEntry'
export default {
  name: 'Cheader',
  components: {
    CUserCenterEntry
  },
  data: () => ({}),
  created() {
    // this.$options.components
    this.$eventBus.on('showCase/event/demo1', data => {
      this.$Notice.open({
        title: '监听到一个实时事件',
        content: data
      })
    })
    this.$eventBus.on('showCase/event/demo2', data => {
      this.$Notice.open({
        title: '监听到一个异步事件',
        content: data
      })
    })
  },
  methods: {
    toggleSidebarFold() {
      alert('暂不可用')
      // this.$store.commit(
      //   'ui/setSidebarFold',
      //   !this.$store.state.ui.sidebar.fold
      // )
    }
  }
}
</script>

<style lang="stylus">
.ac-header
  height 60px
  user-select none
  background #fff

  .ac-sidebar-toggle
    flex 0 0 60px
    height 60px
    text-align center
    line-height 60px

  .ac-sidebar-slot
    padding 15px
</style>

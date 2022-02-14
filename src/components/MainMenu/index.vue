<template>
  <div class="ac-menu" ref="mainMenu">
    <div class="ac-menu-wrapper" v-if="$store.state.ui.mainMenu.menus.length > 0">
      <CMenuItem
        v-for="(item, index) in $store.state.ui.mainMenu.menus"
        :key="index"
        :itemData="item"
      ></CMenuItem>
    </div>
    <div class="ac-menu-empty" v-else>菜单未配置</div>
  </div>
</template>
<script>
import CMenuItem from './MeunItem'
export default {
  name: 'mainMenu',
  components: {
    CMenuItem
  },
  data: () => ({
    scroll: null
  }),
  watch: {
    '$route.name': {
      handler(value) {
        // console.log(value)
        // 复显当前路由
        this.resetActivation()
        if (value !== 'home') this.active(value)
      },
      immediate: true
    },
    '$store.state.ui.mainMenu.menus': {
      handler() {
        if (this.scroll) this.scroll.refresh()
      },
      immediate: true
    }
  },
  created() { },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new this.$Scroll(this.$refs.mainMenu, {
        click: true,
        mouseWheel: {
          speed: 1,
          easeTime: 1000
        }
      })
    })
  },
  methods: {
    active(name) {
      this.$store.commit('ui/mainMenu/active', name)
    },
    resetActivation() {
      this.$store.commit('ui/mainMenu/resetActivation')
    }
  }
}
</script>

<style lang="stylus">
.ac-menu
  height: 100%
  padding-top: 35px
  overflow: hidden
  background: #1565c0

  .ac-menu-empty
    text-align: center
    padding-top: 30px
    color: #eee
</style>

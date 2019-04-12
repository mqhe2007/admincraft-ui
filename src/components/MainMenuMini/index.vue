<template>
  <div class="ac-mainmenu-mini"
       ref="mainMenu">
    <div class="ac-mainmenu-mini-wrapper"
         v-if="$store.state.mainMenu.menus.length > 0">
      <div v-for="(item, index) in $store.state.mainMenu.menus"
           :key="index">
        <Tooltip :content="item.title"
                 transfer
                 theme="light"
                 :disabled="toolTipDisabled"
                 placement="right">
          <Poptip transfer
                  padding="28px 24px 0 24px"
                  width="190"
                  placement="right"
                  @on-popper-hide="submenuClosed">
            <div v-if="item.children && item.children.length > 0"
                 class="ac-mainmenu-mini-item"
                 :class="{'ac-mainmenu-mini-item-active':item.active}"
                 @click="openSubmenu(item)">
              <div v-if="item.icon"
                   class="ac-mainmenu-mini-icon"
                   :style="{backgroundImage: `url(${item.active? item.icon[0] : item.icon[1]})`}"></div>
              <div v-else
                   class="ac-mainmenu-mini-icon">
              </div>
            </div>
            <div v-else
                 class="ac-mainmenu-mini-item"
                 :class="{'ac-mainmenu-mini-item-active':item.active}"
                 @click="$router.push({name: item.name})">
              <div v-if="item.icon"
                   class="ac-mainmenu-mini-icon"
                   :style="{backgroundImage: `url(${item.active? item.icon[0] : item.icon[1]})`}"></div>
              <fa-icon v-else
                    icon="certificate"></Icon>
            </div>
            <template v-slot:content>
              <div class="ac-mainmenu-mini-submenu">
                <div v-for="submenuItem of submenu"
                     :key="submenuItem.name"
                     class="ac-mainmenu-mini-submenu-item"
                     @click="$router.push({name: submenuItem.name})">{{submenuItem.title}}</div>
              </div>
            </template>

          </Poptip>

        </Tooltip>
      </div>
    </div>
    <div class="ac-mainmenu-mini-Empty"
         v-else>
      菜单未配置
    </div>
  </div>
</template>
<script>
export default {
  name: 'mainMenuMini',
  data: () => ({
    toolTipDisabled: false,
    submenu: [],
    scroll: null
  }),
  watch: {
    '$route.name': {
      handler(value) {
        this.resetActivation()
        if (value !== 'home') this.active(value)
      },
      immediate: true
    },
    '$store.state.mainMenu.menus': {
      handler() {
        if (this.scroll) this.scroll.refresh()
      },
      immediate: true
    }
  },
  created() {},
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
    openSubmenu(menu) {
      this.toolTipDisabled = true
      this.active(menu.name)
      this.submenu = menu.children
    },
    submenuClosed() {
      this.toolTipDisabled = false
      this.resetActivation()
      this.active(this.$route.name)
    },
    active(name) {
      this.$store.commit('mainMenu/active', name)
    },
    resetActivation() {
      this.$store.commit('mainMenu/resetActivation')
    }
  }
}
</script>

<style lang="stylus">
.ac-mainmenu-mini
  display flex
  flex-flow column
  width 60px
  height 100%
  padding-top 23px
  overflow hidden
  background #366BBB

  .ac-mainmenu-mini-item
    display flex
    justify-content center
    align-items center
    width 60px
    height 56px
    cursor pointer
    transition all 0.3s

    .ac-mainmenu-mini-icon
      width 32px
      height 32px
      border-radius 50%
      background center no-repeat
      background-size contain

    &:hover
      background #377bc7

    &.ac-mainmenu-mini-item-active
      background #fff

  .ac-mainmenu-mini-Empty
    text-align center
    padding-top 30px
    color #eee

.ac-mainmenu-mini-submenu-item
  font-size 16px
  cursor pointer
  margin-bottom 30px
  line-height 1

  &:hover
    color #366BBB
</style>

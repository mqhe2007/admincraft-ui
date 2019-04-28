<template>
  <div class="ac-menu-item"
       :class="{'ac-menu-item-end': isEnd, 'ac-menu-item-active': itemData.active}">
    <div class="ac-menu-item-title"
         @click="clickTitle">
      <fa-icon :icon="itemData.icon ? itemData.icon : 'certificate'"
            class="ac-menu-item-icon"></fa-icon>
      <span class="ac-menu-item-text">{{itemData.title}}</span>
      <fa-icon v-if="!isEnd"
            icon="chevron-down"
            class="ac-menu-item-indicator" />
    </div>
    <div v-if="!isEnd"
         class="ac-menu-item-submenu">
      <CMenuItem v-for="(item, index) in itemData.children"
                 :key="index"
                 :itemData="item"></CMenuItem>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menuItem',
  props: ['itemData'],
  computed: {
    isEnd() {
      return !this.itemData.children || this.itemData.children.length === 0
    }
  },
  beforeCreate() {
    this.$options.components.CMenuItem = require('./MeunItem.vue').default
  },
  methods: {
    clickTitle() {
      if (this.itemData.children && this.itemData.children.length > 0) {
        if (!this.itemData.active) {
          this.$store.commit('ui/mainMenu/resetActivation')
          this.$store.commit('ui/mainMenu/active', this.itemData.name)
          // 复显当前路由
          this.itemData.children.forEach(item => {
            if (item.name === this.$route.name) {
              this.$store.commit('ui/mainMenu/active', this.$route.name)
            }
          })
        } else {
          this.itemData.active = false
        }
      } else {
        // 当前菜单为导航菜单
        // 外链导航
        if (this.itemData.url) return window.open(this.itemData.url)
        // 站内导航
        this.$router.push({ name: this.itemData.name })
      }
    }
  }
}
</script>
<style lang="stylus">
.ac-menu-item
  .ac-menu-item-title
    padding 12px 24px
    display flex
    justify-content flex-start
    align-items center
    cursor pointer
    color #fff
    font-size 14px

    .ac-menu-item-icon
      flex 0 0 18px
      height 18px
      border-radius 50%
      background center no-repeat
      background-size contain

    .ac-menu-item-text
      flex auto
      margin-left 16px

    .ac-menu-item-indicator
      font-size 12px
      transition transform 0.3s

  .ac-menu-item-submenu
    display none

  &:hover
    background darken(primary, 5%)

  &.ac-menu-item-active
    background darken(primary, 10%)

    .ac-menu-item-title
      color #fff

      .ac-menu-item-indicator
        transform rotateZ(180deg)

    .ac-menu-item-submenu
      display block

      .ac-menu-item
        &:hover
          background darken(primary, 15%)

      .ac-menu-item-title
        color #fff

  &.ac-menu-item-end.ac-menu-item-active
    .ac-menu-item-title
      background #fff
      color primary
</style>


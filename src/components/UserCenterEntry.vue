<template>
  <!-- 用户信息面板 -->
  <div class="userCenterEntry">
    <div class="is-flex is-center">
      <span class="avatar has-margin and-mini and-horizontal"
            v-if="$store.state.ui.user.info.avatar"
            :style="{backgroundImage: `url(${$store.state.ui.user.info.avatar})`}"></span>
      <fa-icon class="icon has-margin and-mini and-horizontal"
               v-else
               icon="user-circle" />
      <p class="has-margin and-mini and-horizontal">{{$store.state.ui.user.info.userName}}</p>
      <fa-icon class="has-margin and-mini and-horizontal"
               icon="chevron-down" />
    </div>
    <div class="panel has-shadow">
      <template v-if="$store.state.dynamicComponent.USER_FAST_PANEL">
        <component v-for="(value, key) in $store.state.dynamicComponent.USER_FAST_PANEL"
                   :key="key"
                   :is="value"></component>
      </template>

      <div v-else>
        未定义动态组件
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userCenterEntry',
  methods: {
    logout() {
      //TODO: 模拟注销
      this.$eventBus.clean()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style lang="stylus">
.userCenterEntry
  position relative

  .icon
    font-size 35px

  .avatar
    width 35px
    height 35px
    background-size cover
    background-position center center
    overflow hidden
    border-radius 50%

  .panel
    display none
    text-align center
    position absolute
    top 100%
    right 0
    z-index 2
    background #fff
    border-radius 5px 0 5px 5px
    padding 20px
    white-space nowrap

  .userName
    font-size 15px
    font-weight bold

  &:hover
    .panel
      display flex
      flex-flow column
</style>



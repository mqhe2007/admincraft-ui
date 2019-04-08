<template>
  <div class="is-flex">
    <CSidebar>
      <AcLogo></AcLogo>
      <MainMenuMini v-if="$store.state.ui.sidebar.fold"></MainMenuMini>
      <CMainMenu v-else></CMainMenu>
    </CSidebar>
    <div class="is-flex is-auto is-vertical">
      <CHeader></CHeader>
      <CTabBar></CTabBar>
      <div class="has-padding ac-router-view">
        <router-view class="has-padding has-background-white has-shadow"></router-view>
      </div>
      <CFooter></CFooter>
      <CNoticeCenter></CNoticeCenter>
      <CBackTop></CBackTop>
    </div>
  </div>
</template>

<script>
import AcLogo from '../components/Logo'
import CHeader from '../components/Header/'
import CFooter from '../components/Footer'
import CSidebar from '../components/Sidebar'
import CTabBar from '../components/TabBar'
import CNoticeCenter from '../components/NoticeCenter/'
import CBackTop from '../components/BackTop'
import CMainMenu from '../components/MainMenu/'
import MainMenuMini from '../components/MainMenuMini/'
export default {
  name: 'layoutDefault',
  components: {
    AcLogo,
    CHeader,
    CFooter,
    CSidebar,
    CTabBar,
    CNoticeCenter,
    CBackTop,
    CMainMenu,
    MainMenuMini
  }
}
</script>
<style lang="stylus">
.ac-router-view
  flex auto
  height 0
  background darken(white, 5)
  overflow auto
</style>

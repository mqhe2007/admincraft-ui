import sidebar from './sidebar'
import mainMenu from './mainMenu'
import noticeCenter from './noticeCenter'
import tabBar from './tabBar'
import user from './user'
export default {
  namespaced: true,
  modules: {
    sidebar,
    mainMenu,
    noticeCenter,
    tabBar,
    user
  },
  state: {
    homepage: ''
  },
  mutations: {
    setHomepage(state, routeName) {
      state.homepage = routeName
    }
  }
}

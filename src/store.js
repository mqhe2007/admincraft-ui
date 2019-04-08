export default {
  namespaced: true,
  state: {
    sidebar: {
      fold: false // false:默认大尺寸，true:小尺寸
    }
  },
  mutations: {
    setSidebarFold(state, foldValue) {
      state.sidebar.fold = foldValue
    }
  }
}
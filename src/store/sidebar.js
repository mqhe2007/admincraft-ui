export default {
  namespaced: true,
  state: {
    fold: false // false:默认大尺寸，true:小尺寸
  },
  mutations: {
    setFold(state, foldValue) {
      state.fold = foldValue
    }
  }
}

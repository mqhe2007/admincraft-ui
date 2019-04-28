export default {
  namespaced: true,
  state: {
    info: {
      userName: '张三'
    },
    permissionTags: ['showcase_error'],
    modules: {}
  },
  mutations: {
    setUserInfo(state, data) {
      state.info = { ...state.info, ...data }
    },
    addUserPermissionTag(state, value) {
      if (!state.permissionTags.find(item => item === value))
        state.permissionTags.push(value)
    },
    setModules(state, data) {
      state.modules = { ...state.modules, ...data }
    }
  }
}

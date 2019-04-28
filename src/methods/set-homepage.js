export default store => (routeName, cb) => {
  store.commit('ui/setHomepage', routeName)
  if (cb && typeof cb === 'function') cb()
}

export default store => ({
  inserted: (el, binding) => {
    let bindPermission = binding.value
    let targetIndex = store.state.ui.user.permissionTags.findIndex(
      item => item === bindPermission
    )
    if (targetIndex === -1) {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  }
})

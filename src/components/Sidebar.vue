<template>
  <div class="ac-sidebar"
       :class="[$store.state.ui.sidebar.fold ? 'ac-sidebar-fold':'']">
    <slot></slot>
  </div>

</template>
<script>
export default {
  name: 'sidebar',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus">
.ac-sidebar
  flex 0 0 200px
  width 0
  height 100vh
  transition all 0.3s

  .ac-sidebar-fold
    width 60px
</style>

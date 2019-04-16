<template>
  <div class="ac-dialog is-flex is-vertical has-shadow">
    <div class="is-flex is-between is-center has-padding">
      <span class="ac-dialog-title">{{title}}</span>
      <fa-icon class="is-pointer"
               icon="times"
               @click="close"></fa-icon>
    </div>
    <div class="has-padding">
      <component :is="{render}"></component>
    </div>

  </div>
</template>
<script>
export default {
  name: 'ACDialog',
  props: ['title', 'render', 'onClosed'],
  data: () => ({
    closeTimer: null
  }),
  computed: {
    componentDefinition() {
      return { render: this.render }
    }
  },
  destroyed() {
    if (this.onClosed) {
      this.onClosed()
    }
  },
  methods: {
    close() {
      this.$Dialog.close(this.$root)
    }
  }
}
</script>
<style lang="stylus">
@keyframes zoomIn
  from
    transform scale3d(0, 0, 0) translate3d(50%, -50%, 0)

  to
    transform scale3d(1, 1, 1) translate3d(50%, -50%, 0)

.ac-dialog
  position absolute
  top 50%
  right 50%
  transform translate3d(50%, -50%, 0)
  transform-origin right top
  z-index 9
  border-radius 4px
  background #fff
  animation zoomIn 0.3s

  .ac-dialog-title
    font-size 16px
</style>



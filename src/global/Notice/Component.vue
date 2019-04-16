<template>
  <div class="ac-notice-popup is-flex has-shadow">
    <div class="ac-notice-popup-wrapper">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
    </div>
    <fa-icon class="ac-notice-popup-close is-pointer"
             icon="times"
             @click="close"></fa-icon>
  </div>
</template>
<script>
export default {
  name: 'notice',
  props: ['title', 'content', 'duration', 'onClosed'],
  data: () => ({
    closeTimer: null
  }),
  mounted() {
    if (this.duration !== 0) {
      this.closeTimer = setTimeout(() => {
        this.close()
      }, this.duration || 3000)
    }
  },
  destroyed() {
    if (this.onClosed) {
      this.onClosed()
    }
    clearTimeout(this.closeTimer)
  },
  methods: {
    close() {
      this.$Notice.close(this.$root)
    }
  }
}
</script>
<style lang="stylus">
@keyframes slideIn
  from
    right -310px

  to
    right 10px

.ac-notice-popup
  position absolute
  right 10px
  z-index 9
  width 300px
  max-height 130px
  color #555
  padding 15px
  border-radius 4px
  background #fff
  transition top 0.3s
  animation slideIn 0.5s

  .ac-notice-popup-wrapper
    flex auto

    .title
      margin-bottom 15px

    .content
      font-size 14px

  .ac-notice-popup-close
    position absolute
    top 15px
    right 15px
</style>



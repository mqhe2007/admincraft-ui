<template>
  <span class="ac-logo has-background-primary"
        @click="goHome">
    <img v-if="image"
         class="ac-logo-image"
         :src="image"
         alt="logo">
    <span class="ac-logo-text has-text-white">
      {{text}}
    </span>
  </span>
</template>
<script>
export default {
  name: 'logo',
  computed: {
    image() {
      return this.$store.state.app.options.logo.image
    },
    text() {
      return (
        this.$store.state.app.options.logo.text ||
        this.$store.state.app.options.title
      )
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="stylus">
.ac-logo
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  height: 60px

  .ac-logo-image
    height: 100%
    margin-right: 10px

  .ac-logo-text
    line-height: 1
    font-size: 20px
    font-weight: bold
</style>

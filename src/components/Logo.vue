<template>
  <div class="ac-logo is-flex is-center has-background-primary"
       @click="goHome">
    <img v-if="image"
         class="ac-logo-image"
         :src="image"
         alt="logo">
    <span v-if="text"
          class="ac-logo-text">
      {{text}}
    </span>
  </div>
</template>
<script>
export default {
  name: 'logo',
  computed: {
    image() {
      return this.$store.state.app.options.logo.image
    },
    text() {
      return this.$store.state.app.options.logo.text
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
  cursor pointer
  height 60px
  padding 5px 0
  .ac-logo-image
    height 100%
    
  .ac-logo-text
    line-height 1
    font-size 20px
    font-weight bold
    text-align center
</style>

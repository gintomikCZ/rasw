<template>
  <div id="app">
    <main-layout/>
  </div>
</template>
<script>
import MainLayout from '@/components/MainLayout.vue'
export default {
  components: {
    MainLayout
  }
}
</script>
<style lang="stylus">
body
  margin: 0
  padding: 0
  color $body-color
  & *, & *::after, & *::before
    box-sizing: border-box
a
  color: inherit
  text-decoration: none
ul
  list-style: none
  margin: 0
  padding: 0
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
main
  padding: 0 2rem
  margin-bottom: 2rem
.content
  display: flex
.left-side
  flex: 0 0 auto
.right-side
  padding-left: 5vw
  flex: 1
  & > *
    width: 100%
</style>

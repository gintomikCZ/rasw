<template>
  <nav>
    <ul>
      <li v-for="key in keys" :key="key">
        <router-link
          :to="key"
          :class="{'current-link': currentLink === key }"
        >{{ key }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    keys () {
      return ['Home'].concat(this.$store.getters.getTopicKeys)
    },
    currentLink () {
      return this.$route.path.substr(1)
    }
  }
}
</script>

<style lang="stylus">
nav
  background: $navbar-background
  & > ul
    display: flex
    justify-content: space-between
    & > li
      display: block
      flex-grow: 1
      & > a
        padding: 1em
        display: block
        transition: all 0.3s ease
        font-weight: 600
        text-align: center
        &:hover
          background: $navbar-background-hover
         &::after
          content: ""
          position: absolute
          top: 85%
          left: 10%
          min-height: 2px
          display: inline-block
          width: 0
          background: $body-color
          transition: width .4s ease
.current-link
  position: relative
  &::after
    width: 80%
</style>

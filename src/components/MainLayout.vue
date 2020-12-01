<template>
<section class="layout">
  <header>
    <nav-bar/>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <div class="tomik-signature">Tomáš Glabazňa, ControlTech s.r.o., tglabazna@controltech.cz</div>
  </footer>
</section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'MainLayout',
  components: {
    NavBar
  }
}
</script>

<style lang="stylus">
.layout
  min-height: 100vh
  width: 100vw
  display: flex
  flex-direction: column
  overflow-x: hidden
  & > main
    flex: 1
    overflow-y: auto
footer
  padding: .5em 1em
  border-top: 1px solid $border-color
.tomik-signature
  font-size: .8rem
  font-style: italic
  text-align: right
</style>

<template>
  <ul class="topic-list">
    <topic-sublist-item
       v-for="key in keys"
       :key="key"
       :item="data[key]"
       :item-key="key"/>
  </ul>
</template>
<script>
export default {
  name: 'TopicSublist',
  props: {
    topic: {
      type: String,
      required: true
    },
    subtopic: {
      type: String,
      required: true
    }
  },
  computed: {
    data () {
      return this.$store.getters.getSubtopic(this.topic, this.subtopic)
    },
    keys () {
      return Object.keys(this.data)
    }
  }
}
</script>
<style lang="stylus">
.topic-list
  background: #ffebe7
  display: inline-block
  & > li
    padding: .75em 1em
    font-size: .8rem
    text-align: left
    font-weight: 600
    border-bottom: 1px solid #cecece
    &:last-child
      border-bottom: none
</style>

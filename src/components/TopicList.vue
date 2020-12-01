<template>
  <ul class="topic-list">
    <li
      tabindex="0"
      v-for="key in keys"
      :key="key"
      :class="{'selected-key': selectedKey === key}"
      @click="onClick(key)">
      <div>{{ key }}</div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'TopicList',
  props: {
    topic: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedKey: null
    }
  },
  computed: {
    topicData () {
      return this.$store.getters.getTopic(this.topic)
    },
    keys () {
      return Object.keys(this.topicData)
    }
  },
  methods: {
    onClick (key) {
      this.selectedKey = key
      this.$emit('click', key)
    }
  }
}
</script>
<style lang="stylus">
.topic-list
  background: $list-background
  display: inline-block
  border: 1px solid $border-color
  & > li
    padding: .75em 1em
    font-size: .8rem
    text-align: left
    font-weight: 600
    border-bottom: 1px solid $border-color
    transition: all .4s ease
    cursor: pointer
    &:last-child
     border-bottom: none
    &.selected-key
      background: darken($list-background, 70%)
      color: #ffffff
</style>

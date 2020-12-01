<template>
  <div class="sublist-item">
    <div class="catalog-number">{{ itemKey }}</div>
    <div class="catalog-name">{{ catalogName }}</div>
  </div>
</template>
<script>
export default {
  name: 'TopicSublistItem',
  props: {
    itemKey: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    catalogName () {
      return this.item.name
    }
  }
}
</script>
<style lang="stylus">
.sublist-item
  display: flex
  padding: .5em .75em
  border-bottom: 1px solid $border-color
  &:last-child
    border-bottom: none
  &:nth-child(even)
    background: lighten($list-background, 60%)
  & > *:first-child
    flex: 0 0 10rem
    font-size: .8rem
  & > *:last-child
    flex: 1 1 auto
    font-size: .9rem
    font-weight: 600
</style>

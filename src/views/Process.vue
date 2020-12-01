<template>
 <div>
   <h1>{{ topic }}</h1>
   <div class="content">
    <div class="left-side">
      <topic-list :topic="topic" @click="onClick"/>
    </div>
    <div class="right-side">
      <topic-sublist v-if="subtopic" :topic="topic" :subtopic="subtopic"/>
    </div>
   </div>
 </div>
</template>

<script>

export default {
  name: 'Process',
  data () {
    return {
      topic: 'Process',
      subtopic: null
    }
  },
  methods: {
    onClick (subtopic) {
      this.subtopic = subtopic
    }
  }
}
</script>
<style lang="stylus">
</style>

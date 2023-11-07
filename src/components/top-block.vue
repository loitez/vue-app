<template>
  <div class="header">
    <div class="container">
      <p class="hello">Hi, {{ this.$store.state.user.name }}!</p>
      <p>You received</p>
      <p class="dialogues-counter">48 Messages</p>
      <p>Contact List</p>
      <ul class="stories">
        <story-item :person="person" v-for="person in this.$store.state.friends" :key="person.id"></story-item>
      </ul>
    </div>

  </div>
</template>

<script>
import storyItem from './story-item.vue'

export default {
  name: "top-block",
  components: {
    storyItem
  }
}
</script>

<style scoped>

</style>
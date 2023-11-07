<template>
  <li class="stories__item">
    <round-avatar :person="person"></round-avatar>
    <span class="stories__item-name"> {{ person.name }} </span>
  </li>
</template>

<script>
import roundAvatar from './round-avatar'

export default {
  name: "story-item",
  props: ['person'],
  components: {
    roundAvatar
  }
}
</script>

<style scoped>

</style>
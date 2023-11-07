<template>
  <button @click="deleteDialogue(person.id)">
    Delete chat
  </button>
</template>

<script>
export default {
  name: "delete-button",
  props: ['person'],
  methods: {
    deleteDialogue(index) {
      this.$store.dispatch('deleteDialogue', index)
    }
  }
}
</script>

<style scoped>

</style>
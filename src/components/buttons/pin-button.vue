<template>
  <button @click="togglePin(person.id)">
    {{ btnText(person) }}
  </button>
</template>

<script>
export default {
  name: "pin-button",
  props: ['person'],
  computed: {

  },
  methods: {
    btnText(person) {
      if(person.isPinned) {
        return 'Unpin'
      }

      return 'Pin'
    },
    togglePin(index) {
      this.$store.dispatch('togglePin', index)
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="dialogues-list-wrapper">
    <div class="container">
      <div class="pinned-messages">
        <h3 >Pinned messages</h3>
        <ul class="dialogues-list">
          <dialogue-item :person="person" v-for="person in this.$store.state.friends" :key="person.id" v-show="person.isPinned">
          </dialogue-item>
        </ul>
      </div>
      <div class="all-messages">
        <h3>All messages</h3>
        <ul class="dialogues-list">
          <dialogue-item  :person="person" v-for="person in this.$store.state.friends" :key="person.id" v-show="!person.isPinned">
          </dialogue-item>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import dialogueItem from './dialogue-item.vue'
export default {
  name: "dialogues-list",
  components: {
    dialogueItem
  },
  methods: {
  },
  computed: {
    hasClass() {
      return this.$vnode.data?.class?.["pinned"];
    },
  }
}
</script>

<style scoped>

</style>
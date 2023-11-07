<template>
  <li class="context-menu__item">
    <button class="context-menu__link" @click="doAction(action.func, message, person)">
      <span v-if="action.func === 'togglePin'">
        {{ person.isPinned ? 'Unpin dialogue' : 'Pin dialogue' }}</span>
      <span v-else>{{ action.text }}</span>

    </button>
  </li>
</template>

<script>
export default {
  name: "context-menu-item",
  props: ['action', 'message', 'person'],
/*  data() {
    return {
      whatFunc: action.func
    }
  },*/
  methods: {
    togglePin(index) {
      this.$store.dispatch('togglePin', index)
    },
    doAction(type, message, person) {
      let index = this.$store.state.friends.indexOf(person)
      console.log(index)
      console.log('CONTEXT MENU CLICKED', type)
      switch(type) {
        case 'editMessage': return editMessage()
        case 'deleteMessage': return this.$store.dispatch('deleteMessage', { messageInd: message.index, id: index})
        case 'deleteDialogue': return this.$store.dispatch('deleteDialogue', index)
        case 'togglePin': return this.$store.dispatch('togglePin', index)
      }
      function editMessage() {
        /* let index = message.id*/
        /*
       this.$store.dispatch('editMessage', {index: index, message: messageObject})



       */
        console.log('need to be edited')
      }

    },

  }
}
</script>

<style scoped>

</style>edit
<template>
  <input type="text" name="message-input" class="message-input" placeholder="Type Message" v-on:keyup.enter="send(id)" v-model="messageText" autofocus>
  <label for="message-input" class="message-input__label"></label>
</template>

<script>
export default {
  name: "message-input",
  props: ['id', 'person'],
  data() {
    return {
      messageText: ''
    }
  },
  mounted() {
    this.$el.nextElementSibling.focus()
  },
  methods: {
    send(index) {
      let messageIndex = this.$store.state.friends[index].chat?.length || 0
      let text = this.messageText;
      let options = {
        hour:  'numeric',
        hour12 : true, // время в AM-PM формате
        minute : 'numeric'
      };
      let dateNow = new Date();
/*      let hours = dateNow.getHours()*/

      let messageObject = new Object(
          {
             sender: 'user', text: text, time: dateNow.toLocaleTimeString("en-US", options).toLowerCase(), index: messageIndex, type: 'sent'
          }
      )
      this.$store.dispatch('addMessage', {index: index, message: messageObject})
      this.messageText = ''
    }
  }
}
</script>

<style scoped>

</style>
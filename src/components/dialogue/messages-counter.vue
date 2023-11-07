<template>
<!--  <svg v-if="person.chat.at(-1).type === 'new'" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7.5" fill="#6A5BC2"/>
  </svg>-->
  <div class="message-data__counter">
    {{ messagesCount }}
  </div>
</template>

<script>
export default {
  name: "messages-counter",
  props: ['person'],
  computed: {
    messagesCount: function() {
      let num = 0
      let chat = this.person.chat
      chat.filter((elem) => {
        if (elem.type === 'new') {
          num++
        }
      })
      return num
    }
  }
}
</script>

<style scoped>

</style>
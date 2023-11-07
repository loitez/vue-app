<template>
  <div class="message-itemWrapper" @load="$emit('done')" ref="wrapper">
  <div class="message-item__withAvatar">
    <round-avatar :person="person" v-show="message.sender === 'friend' " ></round-avatar>
    <div class="message-item" :class="{'user':message.sender==='user'}" @contextmenu.prevent="message.sender==='user' ? showMenu() : ''" v-click-outside="hideMenu">{{ message.text }}</div>
  </div>
    <div class="message-item__time" :class="{'user':message.sender==='user'}">{{message.time}}</div>
  </div>
  <context-menu v-if="message.sender === 'user'" :type="this.$store.state.contextmenu[0]" :class=" { active: menuIsActive }" :message="message" :person="person"></context-menu>
</template>

<script>
import roundAvatar from "@/components/round-avatar";
import contextMenu from "@/components/context-menu/context-menu"
import vClickOutside from 'v-click-outside'


export default {
  name: "message-item",
  props: ['person', 'message'],
  emits: ['done'],
  data() {
    return {
      menuIsActive: false
    }
  },
  mounted() {
    this.$el.nextElementSibling.scrollIntoView()
  },
  computed: {
    randomText:  () => {
      let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
          word = '';
      for (let i = 0; i < 6; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];

      }
      return word
    },
    /*hasClass: () => {
          return this.$parent.data?.class?.["friend"];
      }*/
    },
  methods: {
    showMenu() {
      this.menuIsActive = true;
      console.log('right click')
      /*this.$store.dispatch('addMessage', {index: index, message: messageObject})*/

    },
    hideMenu() {
      this.menuIsActive = false;
      console.log('outside click')
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    roundAvatar,
    contextMenu
  }
  }
</script>

<style scoped>

</style>
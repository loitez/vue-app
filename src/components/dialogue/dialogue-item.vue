<template>
  <div>
    <li class="dialogues-list__item" @click="$router.push({ name: 'PrivateChat', params: { id: person.id } })" @contextmenu.prevent="showMenu()">
      <round-avatar :person="person"></round-avatar>
      <div class="dialogues-list__item-text">
        <div class="message">
          <p class="person-name">
            <span> {{person.name}}</span> {{person.surname}}
          </p>
          <p class="message-text">
            <span v-if="person.chat && person.chat.at(-1).sender === 'user'" class="message-text__sender">You:</span>
            {{ person.chat ? person.chat.at(-1).text : 'No messages' }}
          </p>
        </div>
        <div class="message-data">
          <p v-if="person.chat"> {{ person.chat.at(-1).time }}</p>
          <div v-if="person.chat && person.chat.at(-1).sender === 'user'" class="message-data__info">
            <svg v-if="person.chat.at(-1).type === 'sent'" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.768219 3.3598L5.76822 9.3598M4.3753 9.21912L14.3753 1.21912" stroke="#6A5BC2" stroke-width="2"/>
            </svg>
            <svg v-if="person.chat.at(-1).type === 'read'" width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.60709 9L10.5 8.28567M10.5 8.28567L19.6071 1M10.5 8.28567V8M10.5 8.28567V8.5M1 3.14068L5.37249 8.38767M5.37249 8.38767L6 9.14069M5.37249 8.38767L4.60708 9M5.37249 8.38767L14.6071 1" stroke="#6A5BC2" stroke-width="2"/>
            </svg>



          </div>
          <messages-counter v-if="person.chat && person.chat.at(-1).sender === 'friend' && person.chat.at(-1).type === 'new'" class="message-data__info" :person="person"></messages-counter>
        </div>
      </div>
      <!--    <div class="dialogues-list__item-hover" v-longpress>
            <pin-button :person="person"></pin-button>
            <delete-button :person="person"></delete-button>
          </div>-->
    </li>
    <context-menu :type="this.$store.state.contextmenu[1]" :class=" { active: menuIsActive }" :person="person"></context-menu>
  </div>
</template>

<script>
import roundAvatar from "@/components/round-avatar";
import contextMenu from '@/components/context-menu/context-menu'
import messagesCounter from '@/components/dialogue/messages-counter'

export default {
  name: "dialogue-item",
  props: ['person'],
  data() {
    return {
      menuIsActive: false,
      /*messageValue: message.text*/
    }
  },
  components: {
    roundAvatar,
    contextMenu,
    messagesCounter
  },
  methods: {
    showMenu() {
      this.menuIsActive = true;
      console.log('right click')
      /*this.$store.dispatch('addMessage', {index: index, message: messageObject})*/
    },
    getLastIndex(person) {
      return person.chat.length - 1;
    }
  },
  directives: {
   /* longpress: function(mounted: {el}) {
    }*/
  }
}
</script>

<style scoped>
/*"*/
</style>
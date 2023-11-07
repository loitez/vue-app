<template>

  <div class="main-wrapper">
    <div class="header">
      <div class="container mx-auto private-chat">
        <div class="flex justify-center items-center">
          <return-button class=""></return-button>
          <div><span class="bold-text">{{ $store.state.friends[id].name }}</span> {{$store.state.friends[id].surname}} </div>
        </div>
        <p class="sign online" v-if="$store.state.friends[id].isOnline"> Online </p>
        <p class="sign offline" v-else> Offline </p>
      </div>
    </div>
    <private-chat :id="id"></private-chat>

  </div>
</template>

<script>


import privateChat from "@/components/private-chat";
import returnButton from "@/components/buttons/return-button";
/*import {onMounted} from "vue";*/



export default {
  name: "Private-Chat",
  props: ['id'],
  data() {
    return {
      type: 'message'
    }
  },
  /*setup(props) {
    onMounted(() => {
      this.$store.dispatch('readMessages', props.id)

    })

  },*/
  mounted() {
    console.log(this)
    console.log(this.$el )
    this.readMessages(this.id)
  },
  methods: {
    readMessages(id) {
        this.$store.dispatch('readMessages', id)
    }
  },
  components: {
    privateChat,
    returnButton

  },
}

</script>

<style scoped>

</style>
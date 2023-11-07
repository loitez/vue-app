<template>
  <div class="dialogues-list-wrapper">
    <div class="container">
      <div class="messages">
        <message-item :message="message" v-for="message in this.$store.state.friends[id].chat" :key="message.index" :person="this.$store.state.friends[id]" @done="scroll">
        </message-item>
        <div v-if="!this.$store.state.friends[id].chat" class="mock-welcome">
          <p class="mock-welcome__heading">No messages here yet...</p>
          <p class="mock-welcome__text">Say hi to {{this.$store.state.friends[id].name}}</p>
          <div class="mock-welcome__anim">
            <svg width="71" height="58" viewBox="0 0 71 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.8483 7.28125C12.8849 7.28125 3.18292 16.9957 3.18292 28.9746C3.18292 32.5178 4.03829 35.8733 5.54983 38.8299L0.851174 47.594C-0.00419148 49.1897 1.49563 51.0199 3.21808 50.5037L13.4356 47.4298C16.7516 49.4947 20.6535 50.6797 24.8483 50.6797C36.8117 50.6797 46.5136 40.9652 46.5136 28.9863C46.5136 16.9957 36.8117 7.28125 24.8483 7.28125Z" fill="url(#paint0_linear_102_7)"/>
              <g filter="url(#filter0_b_102_7)">
                <path d="M48.6136 50.9679C60.7583 47.1232 67.4871 34.1622 63.6428 22.0187C59.7985 9.87531 46.8368 3.14787 34.6921 6.9926C22.5474 10.8373 15.8186 23.7983 19.6629 35.9417C23.5073 48.0852 36.4689 54.8126 48.6136 50.9679Z" fill="url(#paint1_linear_102_7)"/>
                <path d="M62.6894 22.3206C66.367 33.9374 59.9301 46.3365 48.3118 50.0145C36.6935 53.6926 24.2939 47.2568 20.6163 35.6399C16.9387 24.0231 23.3756 11.624 34.9939 7.94597C46.6122 4.2679 59.0118 10.7037 62.6894 22.3206Z" stroke="url(#paint2_linear_102_7)" stroke-width="2"/>
              </g>
              <circle cx="31.4499" cy="28.9802" r="2.87426" fill="url(#paint3_linear_102_7)"/>
              <circle cx="41.6526" cy="28.9802" r="2.87426" fill="url(#paint4_linear_102_7)"/>
              <circle cx="51.8547" cy="28.9802" r="2.87426" fill="url(#paint5_linear_102_7)"/>
              <defs>
                <filter id="filter0_b_102_7" x="-75.4561" y="-88.127" width="234.218" height="234.214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="47.0188"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_102_7"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_102_7" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_102_7" x1="6.02602" y1="17.1386" x2="36.7061" y2="47.7791" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6A5BC2"/>
                  <stop offset="1" stop-color="#978AE2"/>
                </linearGradient>
                <linearGradient id="paint1_linear_102_7" x1="37.031" y1="23.0762" x2="48.8584" y2="46.731" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.15"/>
                  <stop offset="1" stop-color="white" stop-opacity="0.12"/>
                </linearGradient>
                <linearGradient id="paint2_linear_102_7" x1="34.6921" y1="6.9926" x2="48.6136" y2="50.9679" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_102_7" x1="31.4499" y1="26.106" x2="34.3242" y2="33.4839" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.27"/>
                  <stop offset="1" stop-color="white" stop-opacity="0.49"/>
                </linearGradient>
                <linearGradient id="paint4_linear_102_7" x1="41.6526" y1="26.106" x2="44.5268" y2="33.4839" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.27"/>
                  <stop offset="1" stop-color="white" stop-opacity="0.49"/>
                </linearGradient>
                <linearGradient id="paint5_linear_102_7" x1="51.8547" y1="26.106" x2="54.729" y2="33.4839" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.27"/>
                  <stop offset="1" stop-color="white" stop-opacity="0.49"/>
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </div>
      <div class="bottom-bar">
        <message-input :id="id" :person="person"></message-input>
      </div>
    </div>


  </div>
</template>

<script>
import messageItem from "@/components/message/message-item";
import messageInput from "@/components/message/message-input";


export default {
  name: "private-chat",
  props: ['id', 'person'],
  methods: {
    scroll() {
      console.log('need to be scrolled...')
      this.scrollIntoView()
    }
  },
  components: {
    messageItem,
    messageInput
  }
}
</script>

<style scoped>

</style>
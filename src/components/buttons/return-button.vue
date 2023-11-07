<template>
  <a @click="$router.go(-1)" class="button-return">
    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.292893 7.2928C-0.097631 7.68332 -0.0976311 8.31649 0.292893 8.70701L6.65685 15.071C7.04738 15.4615 7.68054 15.4615 8.07107 15.071C8.46159 14.6805 8.46159 14.0473 8.07107 13.6568L2.41421 7.99991L8.07107 2.34305C8.46159 1.95253 8.46159 1.31936 8.07107 0.92884C7.68054 0.538315 7.04738 0.538315 6.65685 0.92884L0.292893 7.2928ZM20.5 6.99991L1 6.99991L1 8.99991L20.5 8.99991L20.5 6.99991Z" fill="white"/>
    </svg>


  </a>
</template>

<script>
export default {
  name: "return-button"
}
</script>

<style scoped>

</style>
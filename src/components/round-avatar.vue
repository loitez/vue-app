<template>
  <div class="stories__item-photo-wrapper" :class="{ online : person.isOnline }">
    <picture class="stories__item-photo">
      <img :src="person.img" alt="">
    </picture>
  </div>
</template>

<script>

export default {
  name: "round-avatar",
  props: ['person']
}
</script>

<style scoped>

</style>
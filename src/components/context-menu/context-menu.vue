<template>
  <nav class="context-menu">
    <ul class="context-menu__items">
      <context-menu-item :action="action" v-for="action in type.actions" :key="action.id" :message="message" :person="person"></context-menu-item>
    </ul>
  </nav>
</template>

<script>

import ContextMenuItem from "@/components/context-menu/context-menu-item";

export default {
  name: "context-menu",
  props: ['type', 'message', 'person'],
  components: {
    ContextMenuItem
  }
}
</script>

<style scoped>

</style>
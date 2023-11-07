<template>
  <div class="main-wrapper">
    <top-block :user="user" :friends="friends"></top-block>
    <dialogues-list :friends="friends"></dialogues-list>
  </div>
</template>

<script>
import topBlock from '@/components/top-block.vue'
import dialoguesList from '@/components/dialogue/dialogues-list.vue'

export default {
  name: 'Chat-App',
  data() {
    return {
      friends: [
        { id: 0, name: 'Alice', surname: 'Wood', img: '/images/Alice.jpeg', isOnline: true, pinned: true},
        { id: 1, name: 'Mark', surname: 'Smith', img: '/images/Mark.jpeg', isOnline: false, pinned: false},
        { id: 2, name: 'Kate', surname: 'Rowling', img: '/images/Kate.jpeg', isOnline: true, pinned: false},
        { id: 3, name: 'Sam', surname: 'Hemsworth', img: '/images/Sam.jpeg', isOnline: false, pinned: true},
        { id: 4, name: 'Chris', surname: 'Brown', img: '/images/Chris.jpeg', isOnline: false, pinned: true},
        { id: 5, name: 'Ann', surname: 'Holland', img: '/images/Ann.jpeg', isOnline: false, pinned: true},
      ],
      user: {
        name: 'Anastasia'
      }
    }
  },
  components : {
    topBlock,
    dialoguesList
  }
}
</script>
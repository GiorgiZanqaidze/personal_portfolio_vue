<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {useRouter} from "vue-router"


const router = useRouter()

const closeModal = () => {
  router.push({name: 'home'})
}
</script>

<template>
  
  <div class=" bg-dark-blue fixed top-0 left-0 bottom-0 right-0 z-50 opacity-90 blur" @click="closeModal">
  </div>
  <div class="bg-gray w-[90%] min-h-[400px] translate-x-[-50%] left-1/2 fixed top-1/2 translate-y-[-50%] z-50 rounded-[50px]">
      
  </div>
</template>

<style scoped></style>

<script setup>
import BoxShadow from '@/UI/BoxShadow.vue'
import LandingContainer from '@/UI/LandingContainer.vue'
import SkillsSection from '@/UI/SkillsSection.vue'
import { useRoute } from 'vue-router'


function sayHello(name){
  return name
}

const route = useRoute()
</script>

<template>
  <main>
    <div class="h-screen">
      <div class="bg-dark-blue min-h-full w-full overflow-hidden relative">
        <box-shadow></box-shadow>
        <box-shadow
          class="w-1 h-1 absolute translate-x-[-40px] translate-y-[-40px] scale-[1.6] opacity-[0.3]"
          style="box-shadow: 20px 20px 500px 150px #0099ff"
        ></box-shadow>
        <box-shadow class="top-96 right-[-10px]"></box-shadow>
        <landing-container></landing-container>
        <skills-section></skills-section>
        <router-view :key="route.path"></router-view>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

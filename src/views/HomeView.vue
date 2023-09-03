<script setup>
import BoxShadow from '@/components/UI/BoxShadow.vue'
import IconDonut from '@/components/icons/IconDonut.vue'
import DarkModalToggle from '@/components/UI/DarkModalToggle.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showPortfolio = () => {
  router.push('/portfolio')
}
</script>

<template>
  <main>
    <div class="h-screen">
      <div class="dark:bg-dark-blue bg-light-gray min-h-full w-full overflow-hidden relative">
        <box-shadow></box-shadow>
        <box-shadow
          class="w-1 h-1 absolute translate-x-[-40px] translate-y-[-40px] scale-[1.6] opacity-[0.3]"
          style="box-shadow: 20px 20px 500px 150px #0099ff"
        ></box-shadow>
        <box-shadow class="top-96 right-[-10px]"></box-shadow>
        <div
          class="my-14 bg-transparent h-[50rem] rounded-[50px] border-[3px] border-border-light relative z-50 max-w-[1600px] mx-auto"
        >
          <header
            class="z-50 mt-10 mx-20 text-black dark:text-white flex justify-center relative items-center"
          >
            <dark-modal-toggle></dark-modal-toggle>
            <h1 class="sm:text-6xl text-4xl text-center font-bold">Full Stuck Web Developer</h1>
          </header>
          <article class="flex justify-center sm:justify-between sm:mx-24 dark:text-white">
            <div class="sm:w-2/5 w-4/5 flex justify-center flex-col gap-11">
              <div>
                <h1 class="text-5xl font-black tracking-tight leading-[4rem]">
                  Crafting Digital Solutions with<span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  >
                    Full-stack
                  </span>
                  Expertise
                </h1>
              </div>
              <div class="flex flex-col gap-2.5">
                <p class="dark:text-white text-xl">
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  >
                    Hello there!
                  </span>
                  I'm thrilled to have you visit my online portfolio. My name is Giorgi, and I'm a
                  passionate Web Developer based in Georgia, Tbilisi. Here, I have curated a
                  collection of my finest works and experiences that showcase my creative journey
                  and professional growth.
                </p>
                <div
                  class="flex items-center cursor-pointer bg-amber-50 w-52 justify-center px-4 py-2 rounded-2xl mt-2.5"
                  @click="showPortfolio"
                >
                  <div class="text-2xl dark:text-black">My Portfolio</div>
                  <div class="relative">
                    <img
                      src="@/components/icons/bulb-front-color.svg"
                      class="w-10 transition-all cursor-pointer"
                      alt="cce"
                    />
                    <div
                      class="absolute top-[1rem] left-1/2 translate-x-[-50%] translate-y-[-90%]"
                      style="box-shadow: 0 0 10px 10px #edcd7b"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden sm:block">
              <img src="@/components/icons/Avatar.svg" alt="avatar" class="w-[40rem]" />
            </div>
          </article>
          <icon-donut
            class="absolute bottom-3 right-0 z-10 donut-animation w-10 sm:w-60"
          ></icon-donut>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.donut-animation {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(0);
  }
}
</style>

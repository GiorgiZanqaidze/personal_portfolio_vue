<script setup>
import BoxShadow from '@/components/UI/BoxShadow.vue'
import IconDonut from '@/components/icons/IconDonut.vue'
import DarkModalToggle from '@/components/UI/DarkModalToggle.vue'
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
          class="mx-16 my-14 bg-transparent h-[50rem] rounded-[50px] border-[3px] border-border-light relative z-50"
        >
          <header class="z-50 mt-10 mx-20 text-white flex justify-center relative items-center">
            <dark-modal-toggle></dark-modal-toggle>
            <h1 class="text-4xl font-bold">Full Stuck Web Developer</h1>
          </header>
          <article class="flex justify-between mx-24">
            <div class="w-2/5 flex justify-center flex-col">
              <div>
                <h1 class="text-6xl font-bold tracking-tight">
                  Crafting Digital Solutions with<span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  >
                    Full-stack
                  </span>
                  Expertise
                </h1>
              </div>
              <div>
                <p>
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
              </div>
            </div>
            <div>
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

<script setup>
import IconDonut from '@/components/icons/IconDonut.vue'
</script>

<template>
  <div
    class="my-14 bg-transparent h-[50rem] rounded-[50px] border-[3px] border-border-light relative z-50 max-w-[1600px] mx-auto"
  >
    <header class="z-50 mt-10 mx-20 text-white flex justify-center relative items-center">
      <h1 class="sm:text-6xl text-4xl text-center font-bold tracking-wider">Web Developer</h1>
    </header>
    <article class="flex justify-center sm:justify-between sm:mx-24 text-white">
      <div class="sm:w-2/5 w-4/5 flex justify-center flex-col gap-11">
        <div class="mt-2">
          <h1 class="font-black sm:tracking-tight sm:leading-[4rem] text-3xl sm:text-6xl">
            Mastering the Art of
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            >
              Web Development
            </span>
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
            passionate Web Developer based in Georgia, Tbilisi. Here, I have curated a collection of
            my finest works and experiences that showcase my creative journey and professional
            growth.
          </p>
        </div>
      </div>
      <div class="hidden sm:block">
        <img src="../components/icons/Avatar.svg" alt="avatar" class="w-[40rem]" />
      </div>
    </article>
    <icon-donut class="absolute bottom-3 right-0 z-10 donut-animation sm:w-60"></icon-donut>
  </div>
</template>

<style scoped>
.donut-animation {
  animation: bounce 3s ease-in-out 1s infinite alternate;
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

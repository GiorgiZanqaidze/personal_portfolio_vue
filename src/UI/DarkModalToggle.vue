<script setup>
import IconMoon from '@/components/icons/IconMoon.vue'
import IconSun from '@/components/icons/IconSun.vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)
</script>

<template>
  <div
    class="absolute top-[-6rem] md:top-0 md:right-2 flex py-1 px-2 rounded-3xl gap-2 justify-between cursor-pointer h-10 w-[5.5rem] border-2 border-amber-50 scale-75 md:scale-100"
    @click="toggleDarkMode()"
  >
    <icon-moon
      class="absolute left-1 top-1/2 translate-y-[-50%] z-50"
      height="2rem"
      style="fill: white"
    ></icon-moon>
    <icon-sun
      class="absolute right-1 top-1/2 translate-y-[-50%] z-50"
      height="2rem"
      style="fill: white"
    ></icon-sun>
    <div
      class="absolute w-[2.5rem] h-[2.5rem] top-1/2 translate-y-[-50%] rounded-full z-30 transition-all shadow-md"
      :class="{
        'right-0 bg-yellow opacity-90 sun-background': !isDark,
        'left-0 bg-regal-blue opacity-50 moon-background': isDark
      }"
    ></div>
  </div>
</template>

<style scoped>
.sun-background {
  box-shadow: 0 0 5px 5px #edcd7b;
}
.moon-background {
  box-shadow: 0 0 5px 5px #0099ff;
}
</style>

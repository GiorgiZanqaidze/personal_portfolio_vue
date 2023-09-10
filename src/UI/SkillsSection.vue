<script setup>
import IconArrow from '@/components/icons/IconArrow.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showMoreSkills = () => {
  router.push({ name: 'skills' })
  console.log('dsd')
}
</script>

<template>
  <div
    class="my-14 bg-transparent h-[50rem] rounded-[50px] border-[3px] border-border-light relative z-50 max-w-[1600px] mx-auto"
  >
    <div class="flex justify-center text-white text-7xl mt-14 flex-col items-center gap-3 mb-16">
      <h1>My skills</h1>
      <div class="flex flex-col items-center gap-3">
        <h3 class="text-xl">check out for more</h3>
        <div class="bg-transparent" style="box-shadow: 0 70px 100px 50px #00c2ff"></div>
        <icon-arrow
          class="cursor-pointer hover:scale-150 transition-all"
          style="height: 50px; width: 50px"
          @click="showMoreSkills"
        ></icon-arrow>
      </div>
    </div>
    <div class="text-white flex min-h-full justify-evenly">
      <div class="flex mt-24">
        <div class="circle">
          <div class="icon absolute left-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/vue.png" class="w-full" alt="vue" />
          </div>
          <div class="icon absolute right-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/react.png" class="w-full" alt="vue" />
          </div>
          <div class="icon absolute top-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/css.png" class="w-full" alt="vue" />
          </div>
          <div class="icon absolute bottom-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/javascript.png" class="w-full" alt="vue" />
          </div>
          <!--          <img src="../assets/images/php.png" class="icon" alt="vue" />-->
          <h1 class="icon text-4xl text-center font-bold">Front End</h1>
        </div>
      </div>
      <div class="flex mt-24">
        <div class="circle">
          <div class="icon absolute left-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/laravel.png" class="w-full" alt="vue" />
          </div>
          <div class="icon absolute right-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/php.png" class="w-full" alt="vue" />
          </div>
          <div class="icon absolute top-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/nodejs.png" class="w-full" alt="vue" />
          </div>
          <div class="icon absolute bottom-32">
            <div style="box-shadow: 0 70px 100px 50px #00c2ff" class="w-20 mx-auto"></div>
            <img src="../assets/images/javascript.png" class="w-full" alt="vue" />
          </div>
          <!--          <img src="../assets/images/php.png" class="icon" alt="vue" />-->
          <h1 class="icon text-4xl text-center font-bold">Back End</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 100px;
  height: 100px;
  position: absolute;
  animation: rotate 10s linear infinite;
}

.icon {
  animation: icons 10s linear infinite;
}

@keyframes icons {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

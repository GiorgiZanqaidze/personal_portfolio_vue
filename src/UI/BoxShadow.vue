<template>
  <div
    class="absolute translate-x-[-20px] translate-y-[-20px] scale-[1.6] opacity-[0.3] box-shadow-animation"
    style="box-shadow: 100px 110px 100px 150px #ff29c3"
  ></div>
</template>
<script setup></script>

<style scoped>
@keyframes myAnimation {
  0% {
    transform: scale(1.6);
    opacity: 0.3;
  }
  50% {
    transform: scale(2.5);
    opacity: 0.4;
  }
  100% {
    transform: scale(3);
    opacity: 0.6;
  }
}
.box-shadow-animation {
  animation: myAnimation 3s ease-in-out 1s infinite alternate;
  transform: scale(2);
}
</style>

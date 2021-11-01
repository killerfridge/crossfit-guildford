<script setup>
  import { ref } from 'vue'
  import navLink from "./navbar/navLink.vue";
  import navLinkDark from "./navbar/navLinkDark.vue";

  const emit = defineEmits(['bannerEvent'])

  const props = defineProps(
      {
        show: Boolean
      }
  )
  function switchBanner(){
    emit('bannerEvent')
  }
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="bg-gray-50 text-gray-900 m-0 pb-2 grid grid-cols-2 w-screen h-32 fixed left-0 top-0 z-50">
        <div class="justify-items-start absolute left-0 bottom-0 pl-3 pb-2">
          <h1 class="font-bold text-4xl crossfit inline">
            <router-link to="/">
              CrossFit<span class="text-sm"><sup>&reg;</sup></span>
              <img src="/src/assets/lightning.png" class="inline h-12"/>Guildford
            </router-link>
          </h1>
          <p class="pl-1 uppercase text-sm">Train Together - Train Hard</p>
        </div>
      <div class="grid-rows-2 grid pb-2">
        <div class="h-1/2 hidden md:block right-0 absolute uppercase mr-8 top-2 border-b border-gray-500">
          <navLinkDark to="crossfit" text="CrossFit" />
          <navLinkDark to="Weightlifting" text="Guildford Weightlifting" />
        </div>
        <div class="hidden md:block absolute right-0 bottom-0 pr-8 uppercase">
          <navLinkDark to="/" text="Home"/>
          <navLinkDark to="/join" text="Join Us"/>
          <navLinkDark to="/contact" text="Contact"/>
          <navLinkDark to="Schedule" text="Timetable"/>
          <navLinkDark to="Blog" text="Blog"/>
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <div v-if="!show" class="bg-blue-500 pb-2 text-white m-0 grid grid-cols-2 w-screen h-32 fixed left-0 top-0 z-50">
        <div class="absolute left-0 bottom-0 justify-items-start pl-3 pb-2">
          <router-link to="weightlifting">
            <h1 class="font-extrabold text-2xl uppercase inline">Guildford</h1>
            <img src="/src/assets/lightning.png" class="inline h-12"/>
            <h1 class="font-extrabold text-2xl uppercase inline">Weightlifting
            </h1>
          </router-link>

          <p class="pl-1 uppercase text-sm">Train Together - Train Hard</p>
        </div>
      <div class="grid-rows-2 grid pb-2">
          <div class="h-1/2 hidden md:block right-0 absolute uppercase mr-8 top-2 border-b border-white-500">
            <navLink to="crossfit" text="CrossFit" />
            <navLink to="Weightlifting" text="Guildford Weightlifting" />
          </div>
        <div class="hidden md:block absolute right-0 bottom-0 pr-8 uppercase">
          <navLink to="/" text="Home" />
          <navLink to="/join" text="Join Us"/>
          <navLink to="/contact" text="Contact"/>
          <navLink to="/schedule" text="Timetable"/>
          <navLink to="/blog" text="Blog"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active{
    transition: opacity .25s;
  }

  .fade-enter-from, .fade-leave-to{
    opacity: 0;
  }
 h1{
   text-align: start;
 }
 p{
   text-align: start;
 }
 .crossfit{
   font-family: Impact
 }
</style>

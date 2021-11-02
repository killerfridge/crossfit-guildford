<script setup>
  import { ref } from 'vue'
  import navLink from "./navbar/navLink.vue";
  import navLinkDark from "./navbar/navLinkDark.vue";
  import MenuIcon from "./icons/MenuIcon.vue";
  import XIcon from "./icons/XIcon.vue";
  import Sidebar from "./Sidebar.vue";

  const emit = defineEmits(['bannerEvent'])
  let expanded = ref(false)

  function expand() {
    expanded.value = !expanded.value
  }

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
    <div v-if="show" class="bg-gray-50 text-gray-900 border border-red-900 w-screen sm:h-32 h-16 fixed left-0 top-0 z-50">
      <div class="mx-auto px-2 sm:px-6 lg:px-8 border border-gray-900">
        <div class="relative flex items-center justify-between sm:h-32 h-16 border border-gray-500">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden border border-blue-900">
            <button @click="expand()">
              <MenuIcon v-if="!expanded" class="block h-6 w-6" />
              <XIcon v-else-if="expanded" class="block h-6 w-6"/>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start border border-red-900">
            <div class="flex-shrink-0 flex items-center border border-blue-500">
              <h1 class="hidden lg:block h-8 w-auto border border-blue-300">Appears When Large</h1>
              <h1 class="block lg:hidden h-8 w-auto border border-blue-300">Appears When Small</h1>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="block flex space-x-4 justify-end items-end">
              <a>Test link 2</a>
              <a>Test link 2</a>
            </div>
            <div class="flex space-x-4">
              <a href="#">test link 1</a>
              <a href="#">test link 1</a>
              <a href="#">test link 1</a>
              <a href="#">test link 1</a>
            </div>
          </div>
        </div>
      </div>
        <Sidebar v-if="expanded" class="bg-gray-500 text-white w-32">
          <a href="#" class="block w-32">Test 1</a>
          <a href="#" class="block">Test 1</a>
          <a href="#" class="block">Test 1</a>
          <a href="#" class="block">Test 1</a>
        </Sidebar>
    </div>
  </transition>
  <transition name="fade">
    <div v-if="!show" class="bg-blue-500 pb-2 text-white m-0 grid grid-cols-2 w-screen h-32 fixed left-0 top-0 z-50">
        <div class="absolute left-0 bottom-0 justify-items-start pl-3 pb-2">
          <router-link to="weightlifting">
            <h1 class="font-extrabold text-2xl 2xl:text-5xl uppercase inline">Guildford</h1>
            <img src="/src/assets/lightning.png" class="inline h-12 2xl:h-16"/>
            <h1 class="font-extrabold text-2xl 2xl:text-5xl uppercase inline">Weightlifting
            </h1>
          </router-link>

          <p class="pl-1 uppercase text-sm 2xl:text-lg">Train Together - Train Hard</p>
        </div>
      <div class="grid-rows-2 grid pb-2">
          <div class="h-1/2 hidden lg:block right-0 2xl:text-xl 2xl:pr-8 absolute uppercase mr-8 top-2 border-b border-white-500">
            <navLink to="crossfit" text="CrossFit" />
            <navLink to="Weightlifting" text="Guildford Weightlifting" />
          </div>
        <div class="hidden lg:block 2xl:text-xl absolute right-0 bottom-0 pr-8 uppercase">
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

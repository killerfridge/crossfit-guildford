<script setup>
  import { ref } from 'vue'
  import navLink from "./navbar/navLink.vue";
  import navLinkDark from "./navbar/navLinkDark.vue";
  import MenuIcon from "./icons/MenuIcon.vue";
  import XIcon from "./icons/XIcon.vue";
  import Sidebar from "./Sidebar.vue";
  import squareLink from "./squareLink.vue";
  import SidebarLink from "./navbar/SidebarLink.vue";
  import CrossFitLogo from "./icons/CrossFitLogo.vue";
  import SidebarLinkBlue from "./navbar/SidebarLinkBlue.vue";
  import GWLogo from "./icons/GWLogo.vue";

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
    <div v-if="show" class="bg-gray-50 text-gray-900 w-screen sm:h-32 h-16 fixed left-0 top-0 z-50">
      <div class="mx-auto px-2 sm:px-6 lg:px-8 max-w-4xl">
        <div class="relative flex items-center justify-between sm:h-32 h-16">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button @click="expand()">
              <MenuIcon v-if="!expanded" class="block h-6 w-6" />
              <XIcon v-else-if="expanded" class="block h-6 w-6"/>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center mt-0 sm:mt-5 lg:mt-3">
              <div class="hidden sm:block h-8 w-auto">
                <CrossFitLogo class="h-16 lg:text-4xl md:text-3xl text-3xl"/>
                <p class="text-sm text-gray-900">Train Together - Train Hard</p>
              </div>
              <div class="block sm:hidden h-12 w-auto">
                <CrossFitLogo class="text-2xl"/>
              </div>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="block flex space-x-4 justify-end items-end h-2/12 text-right">
              <navLinkDark to="crossfit" text="CrossFit" class="uppercase border-b border-gray-900 text-right"/>
              <navLinkDark to="weightlifting" text="Guildford Weightlifting" class="w-32 uppercase border-b border-gray-900 text-right"/>
            </div>
            <div class="flex space-x-4">
              <navLinkDark to="/" text="Home"/>
              <navLinkDark to="join" text="Join Us"/>
              <navLinkDark to="contact" text="Contact"/>
              <navLinkDark to="schedule" text="Timetable"/>
              <!--<navLinkDark to="blog" text="Blog"/>!-->
            </div>
          </div>
        </div>
      </div>
      <transition name="slide">
        <Sidebar v-if="expanded" class="bg-gray-500 text-white w-60 absolute right-0">
          <SidebarLink @click="expand()" to="/" text="Home"/>
          <SidebarLink @click="expand()" to="join" text="Join Us"/>
          <SidebarLink @click="expand()" to="contact" text="Contact"/>
          <SidebarLink @click="expand()" to="schedule" text="Timetable"/>
          <!--<SidebarLink @click="expand()" to="blog" text="Blog"/>!-->
          <SidebarLink @click="expand()" to="crossfit" text="CrossFit" class="border-t border-white"/>
          <SidebarLink @click="expand()" to="weightlifting" text="Weightlifting"/>
        </Sidebar>
      </transition>
    </div>
  </transition>
  <transition name="fade">
    <div v-if="!show" class="bg-blue-500 text-white w-screen sm:h-32 h-16 fixed left-0 top-0 z-50">
        <div class="mx-auto px-2 sm:px-6 lg:px-8 max-w-4xl">
        <div class="relative flex items-center justify-between sm:h-32 h-16">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button @click="expand()">
              <MenuIcon v-if="!expanded" class="block h-6 w-6" />
              <XIcon v-else-if="expanded" class="block h-6 w-6"/>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center mt-0 sm:mt-5 lg:mt-3">
              <div class="hidden sm:block h-8 w-auto">
                <GWLogo class="h-16 lg:text-3xl md:text-2xl text-white font-extrabold text-2xl"/>
                <p class="text-sm text-white">Train Together - Train Hard</p>
              </div>
              <div class="block sm:hidden h-12 w-auto">
                <GWLogo class="text-md text-white font-extrabold"/>
              </div>
            </div>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="block flex space-x-4 justify-end items-end h-2/12 text-right">
              <navLink to="crossfit" text="CrossFit" class="uppercase border-b border-white text-right"/>
              <navLink to="weightlifting" text="Guildford Weightlifting" class="w-32 uppercase border-b border-white text-right"/>
            </div>
            <div class="flex space-x-4">
              <navLink to="/" text="Home"/>
              <navLink to="join" text="Join Us"/>
              <navLink to="contact" text="Contact"/>
              <navLink to="schedule" text="Timetable"/>
              <!--<navLink to="blog" text="Blog"/>!-->
            </div>
          </div>
        </div>
      </div>
      <transition name="slide">
        <Sidebar v-if="expanded" class="bg-blue-300 text-white w-60 absolute right-0">
          <SidebarLinkBlue @click="expand()" to="/" text="Home"/>
          <SidebarLinkBlue @click="expand()" to="join" text="Join Us"/>
          <SidebarLinkBlue @click="expand()" to="contact" text="Contact"/>
          <SidebarLinkBlue @click="expand()" to="schedule" text="Timetable"/>
          <!--<SidebarLinkBlue @click="expand()" to="blog" text="Blog"/>!-->
          <SidebarLinkBlue @click="expand()" to="crossfit" text="CrossFit" class="border-t border-white"/>
          <SidebarLinkBlue @click="expand()" to="weightlifting" text="Weightlifting"/>
        </Sidebar>
      </transition>
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

  .slide-enter-active, .slide-leave-active{
    transition: .5s ease-out;
    right: 0;
  }

  .slide-enter-from, .slide-leave-to{
    transition: .5s ease-in;
    right: -100%;
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

<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Banner from './components/Banner.vue'
  import Footer from "./components/Footer.vue";
  import { ref } from 'vue';

  const query = ref(true)
  const cfBG = 'bg-gray-500'
  const wlBG = 'bg-blue-100'
  const bg = ref(cfBG)

  function changeBanner(){
    query.value = !query.value;
    if (bg.value === cfBG){
      bg.value = wlBG;
    } else {
      bg.value = cfBG;
    }
  }

  function wlBanner(){
    query.value = false;
    bg.value = wlBG;
  }

  function cfBanner(){
    query.value = true;
    bg.value = cfBG
  }

</script>

<template>

  <Banner @bannerEvent="changeBanner" :show="query"/>
  <div class="h-32"></div>
    <div :class="bg">
        <router-view :show="query" @wlEvent="wlBanner" @cfEvent="cfBanner"></router-view>
      <Footer class="bg-white border-t-2 border-gray-900" />
    </div>


</template>

<script>

export default {
  name: 'app',
}
</script>
<style>


@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;600;700;800&display=swap');

#app {
  font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .fade-page-enter-active{
    transition: opacity .15s;
  }

  .fade-page-leave-active{
    transition: opacity 0.01s;
  }

  .fade-page-enter-from, .fade-page-leave-to{
    opacity: 0;
  }

</style>

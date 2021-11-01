<template>
  <div class="h-96 z-0 bg-cover bg-center bg-no-repeat">
    <div class="h-full relative w-full">
      <!--<img
          :src="src"
          class="mx-auto object-cover h-full w-full"
      />!-->
      <div class="absolute md:justify-items-start w-full md:w-auto m-0 justify-items-center bottom-20 md:ml-3 bg-gray-800 p-3">
        <div class="px-5 text-white block md:text-left">
          <h1 class="font-extrabold md:text-4xl text-2xl uppercase md:text-left md:m-0">{{title}}</h1>
        </div>
        <div v-if="links" class="md:justify-items-start space-x-2 px-6 font-bold uppercase block">
          <router-link v-if="router=='true'" v-for="link in links" :to="link.to"><li class="bg-blue-400 md:justify-items-start p-2 w-32 mt-1 text-white block-inline hover:bg-blue-800">{{link.text}}</li></router-link>
          <a
              v-else
              v-for="link in links"
              :href="link.to"
              class="bg-blue-400 p-2 min-w-32 w-auto text-white mt-1 hover:bg-blue-800"
              target="_blank" rel="noopener noreferrer">
            {{link.text}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heroNav",
  props: ['src', 'title', 'links', 'router']
}
</script>

<style scoped>
 .nav-container{
   height: 26rem;
 }
   li, a{
    display:inline-block;
     transition: background-color .25s ease-in;
  }
   li:hover, a{
     transition: background-color .25s ease-out;
   }
</style>

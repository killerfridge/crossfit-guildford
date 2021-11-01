<script setup>
  import squareLink from "./squareLink.vue";
  import instaLink from "./instaLink.vue";
</script>

<template>
<div class="md:grid md:grid-cols-2 bg-white">
  <div class="md:w-11/12 h-full w-full">
    <div class="w-full h-60 md:h-full md:w-full object-cover mb-2">
      <img
          :src="src"
          class="object-cover h-full w-full"
      />
    </div>
  </div>
  <div class="my-auto md:text-left md:px-5 mx-auto py-5">
    <h1 class="font-extrabold text-2xl mb-0">{{title}}</h1>
    <instaLink v-if="instalink" :link="instalink" class="mb-2"/>
    <p>{{text}}</p>
    <div v-if="links" class="md:justify-items-start md:ml-5 mx-auto space-x-2">
      <squareLink v-for="link in links" :text="link.text" :to="link.to"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "WhiteCard",
  props: ['src', 'title', 'text', 'links', 'direction', 'instalink']
}
</script>

<style scoped>

</style>

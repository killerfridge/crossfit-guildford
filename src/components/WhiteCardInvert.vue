<script setup>

  import squareLink from "./squareLink.vue";

  const props = defineProps({
    links: Object,
    title: String,
    src: String,
    text: String,
    instalink: String,
  })


</script>


<template>
<div class="md:grid md:grid-cols-2 bg-white md:justify-items-end">
  <div class="hidden md:block my-auto text-right px-5">
    <h1 class="font-extrabold text-2xl mb-2">{{title}}</h1>
    <p>{{text}}</p>
    <div v-if="links" class="justify-items-center mx-auto space-x-2">
      <squareLink v-for="link in links" :text="link.text" :to="link.to"/>
    </div>
  </div>
  <div class="md:w-11/12 h-full w-full">
    <div class="h-60 w-full md:h-full md:w-full object-cover">
      <img
          :src="src"
          class="object-cover h-full w-full"
      />
    </div>
  </div>
  <div class="block md:hidden my-auto py-5 px-5">
    <h1 class="font-extrabold text-2xl mb-2">{{title}}</h1>
    <p>{{text}}</p>
    <div v-if="links" class="justify-items-center mx-auto space-x-2">
      <squareLink v-for="link in links" :text="link.text" :to="link.to"/>
    </div>
    <instaLink v-if="instalink" :link="instalink" class="mt-3"/>
  </div>
</div>
</template>

<script>
export default {
  name: "WhiteCardInvert"
}
</script>

<style scoped>

</style>

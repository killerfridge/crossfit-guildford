<script setup>
  const props = defineProps({
    to: String,
    text: String
  })
</script>

<template>
  <router-link :to="to" class="trans p-3 w-full bg-gray-500 text-white uppercase block hover:bg-gray-300">{{text}}</router-link>
</template>

<script>
export default {
  name: "SidebarLink"
}
</script>

<style scoped>
  .trans{
    transition: background-color .25s ease-in;
  }

  .trans:hover{
    transition: background-color .25s ease-out;
  }
</style>

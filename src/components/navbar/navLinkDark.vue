<template>
    <router-link :to="to">
      <li class="uppercase h-auto my-auto py-2 text-gray-900 hover:underline">{{ text }}</li>
    </router-link>
</template>

<script>
export default {
  name: "navLink",
  props: ['to', 'text']
}
</script>

<style scoped>
   li{
    display:inline-block;
     transition: background-color .25s ease-in;
  }
   li:hover{
     transition: background-color .25s ease-out;
   }
</style>

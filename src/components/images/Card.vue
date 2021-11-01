<template>
  <div class="h-72 max-w-lg min-w-md mx-auto w-52 bg-gray-900 rounded-t rounded-b-sm">
    <img :src="src" class="w-full h-1/2 object-cover border-b border-gray-100 rounded-t-lg"/>
    <h1 class="mt-2 px-2 text-white font-bold">{{title}}</h1>
    <p class="mt-1 px-2 text-gray-200 text-sm max-w-sm mx-auto">{{text}}</p>
    <div v-if="link">
      <a class="text-blue-400" :href="link">{{linkText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['src', 'title', 'text', 'link', 'linkText']
}
</script>

<style scoped>

</style>

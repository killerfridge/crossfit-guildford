<template>
  <div class="grid grid-cols-2 bg-gray-900 border border-gray-600 rounded-lg m-2 h-60 max-w-lg mx-auto">
      <div class="flex-none w-full h-full rounded-lg">
        <img :src="src" alt="" class="rounded-l-lg inset-0 w-full h-full object-cover border border-grey-100" />
      </div>
    <div class="px-8 py-4 text-white">
      <h1 class="text-2xl font-extrabold">{{ title }}</h1>
      <p>{{ text }}</p>
      <div v-if="link">
      <a class="text-blue-400" :href="link">{{linkText}}</a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroImage",
  props: ['src', 'title', 'text', 'link', 'linkText']
}
</script>

<style scoped>

</style>

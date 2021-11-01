<template>
  <router-link :to="to" class="bg-blue-500 mt-2 p-2 block mx-auto w-32 text-l text-white uppercase font-bold">
    <p>
      {{text}}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "squareLink",
  props: ['to', 'text']
}
</script>

<style scoped>

</style>

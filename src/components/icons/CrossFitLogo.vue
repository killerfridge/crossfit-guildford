<script setup>
  import Lightning from "./Lightning.vue";
</script>

<template>
  <div class="crossfit inline"><router-link to="/">CrossFit<Lightning class="inline"/>Guildford</router-link></div>
</template>

<script>
export default {
  name: "CrossFitLogo"
}
</script>

<style scoped>
  .crossfit{
    font-family: Impact
  }
</style>

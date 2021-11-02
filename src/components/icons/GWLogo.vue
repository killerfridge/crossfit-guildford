<script setup>
  import Lightning from "./Lightning.vue";
</script>

<template>
  <div class="inline"><router-link to="weightlifting">Guildford<Lightning class="inline"/>Weightlifting</router-link></div>
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

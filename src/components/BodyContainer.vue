<script setup>
  import { ref } from 'vue'

  const emit = defineEmits(['wlEvent', 'cfEvent', 'bannerEvent'])


</script>

<template>
  <div class="bg-gray-50">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "BodyContainer"
}
</script>

<style scoped>

</style>

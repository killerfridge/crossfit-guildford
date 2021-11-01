<script setup>
  const props = defineProps({
    type: String,
    label: String,
    placeholder: String,
  })
</script>

<template>
  <label :for="label" class="my-1 py-1 block">{{label}}</label>
  <input
    :type="type"
    :id="label"
    :placeholder="placeholder"
    required
    class="border border-gray-600 focus:ring-2 focus:ring-blue-400 block"
  />
</template>

<script>
export default {
  name: "customInput"
}
</script>

<style scoped>

</style>

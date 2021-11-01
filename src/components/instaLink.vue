<script setup>

  const props = defineProps({
    'link': String
  })

  function instaHref() {
    return "https://instagram.com/" + props.link
  }
</script>

<template>
  <div>
      <a :href="instaHref()" target="_blank" rel="noopener noreferrer">
        <img src="/src/assets/insta_logo.webp" class="h-6 w-6 inline"/>
        <p class="inline">@{{link}}</p>
      </a>
  </div>
</template>

<script>
export default {
  name: "instaLink"
}
</script>

<style scoped>

</style>

<script setup>
  import heroNav from "../components/heroNav.vue";

  const emits = defineEmits(['cfEvent'])

</script>

<template>
    <heroNav
        class="bg-scroll bg-pistol bg-bottom"
        title="CrossFit"
    />
    <div class="max-w-4xl mx-auto">
      <div class="bg-gray-50 p-8">
        <p class="mb-2">
          CrossFit is constantly varied high intensity functional movements.  Here at CrossFit Guildford we believe that fitness should be broad, general and inclusive. We believe that the needs of the older person and those of Olympic athletes differ by degree not by kind. CrossFit is infinitely scaleable and as such it suitable for all ages and all levels of fitness. CrossFit is an awesome Strength and Conditioning programme.
        </p>
        <p class="mb-2">
          CrossFit is based on the 10 fundamentals of fitness:
        </p>
        <ul class="mb-2 list-inside">
          <li>Strength</li>
          <li>Speed</li>
          <li>Stamina</li>
          <li>Flexibility</li>
          <li>Balance</li>
          <li>Co-ordination</li>
          <li>Power</li>
          <li>Cardiovascular</li>
          <li>Endurance</li>
          <li>Agility</li>
          <li>Accuracy</li>
        </ul>
        <p class="mb-2">
          We believe that a short falling in any of these areas reduces not only a person’s fitness but their health. Using constantly varied high intensity functional movements, you will find that your training program never becomes dull or boring with new challenges and different workouts during your time at CrossFit Guildford.
        </p>
        <p class="mb-2">
            Furthermore CrossFit is undertaken in a class which is coached by a fully qualified CrossFit Trainer so not only do you receive the best quality coaching available but you also get the support and encouragement of your peers who will help you achieve your goals even faster.
        </p>
        <p class="mb-2">
          Still not convinced? Look at the video below, courtesy of CrossFit HQ:
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: "CrossFit",
  mounted() {
    this.$emit('cfEvent')
  }
}
</script>

<style scoped>
  h1{
    font-family: Impact;
  }
  ul{
    list-style-type: circle;
  }
</style>

<script setup>
  import heroNav from "../components/heroNav.vue";

  const emits = defineEmits(['wlEvent'])


</script>

<template>
    <div>
      <heroNav
          class="bg-overhead bg-fixed"
          title="Guildford Weightlifting"
          :links="hero_links"
          router="true"
      />
      <div class="mx-auto max-w-4xl">
      <div class="bg-white p-8 border border-gray-100">
        <p class="mb-2">Looking to get started in Weightlifting?</p>
        <p class="mb-2">Our Learn to Lift Course is the perfect way to kick off your New Year and your journey into Weightlifting and Strength Training.</p>
        <p class="mb-2">In the 5 x 1.5 Hour sessions we will cover the Snatch and Clean & Jerk along with the more basic strength lifts such as: Front and Back Squat, Push-Press, Pulls etc.</p>
        <p class="mb-2">These sessions will be run in a small group and Coached by Henry Woodason and Amanda Jayne PT.</p>
        <p class="mb-2">Suitable for all levels including complete beginners.</p>
        <p class="mb-2">Walk away with the confidence to join our club sessions or start training on your own.</p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "GuildfordWeightLifting",
  data: function () {
    return {
      hero_links: [
        {to: 'join', text: 'Join Us'},
        {to: 'schedule', text: 'Timetable'},
        {to: 'contact', text: 'Contact Us'}
      ],
      community: "https://static.wixstatic.com/media/da39dc_653669ad158f411e83a87277b82ccfa2~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/DSC00582_websize_edited.jpg",
      overhead: "https://static.wixstatic.com/media/da39dc_f60c741fe10a45f19060d70116ab028d~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/UNADJUSTEDNONRAW_thumb_4.jpg",
      crossfit: "https://static.wixstatic.com/media/da39dc_38a9cc46f49048f8917d026d66bf06a3~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/20210916_171850.jpg",
      jerk: "https://static.wixstatic.com/media/da39dc_1d157e70b2e94a49a7f563a0b5028ea8~mv2.jpg/v1/fill/w_446,h_426,al_c,q_80,usm_0.66_1.00_0.01/IMG_1488_JPG.jpg"
    }
  },
  mounted(){
    console.log("Weightlifting!")
    this.$emit('wlEvent')
  }
}
</script>

<style scoped>


 h1{
   text-align: start;
 }
 p{
   text-align: start;
 }
 .crossfit{
   font-family: Impact
 }

</style>

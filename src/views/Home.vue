<script setup>
  import Card from "../components/images/Card.vue";
  import heroNav from "../components/heroNav.vue";
  import WhiteCard from "../components/WhiteCard.vue";
  import WhiteCardInvert from "../components/WhiteCardInvert.vue";
  import squareLink from "../components/squareLink.vue";
  import instaLink from "../components/instaLink.vue"

  const props = defineProps({
    show: Boolean
  })

  const emit = defineEmits(['cfEvent'])

  const hero_links = [
      {to: 'join', text: 'Join Us'},
      {to: 'schedule', text: 'Timetable'},
      {to: 'contact', text: 'Contact Us'}
  ]

  const cfLinks = [{to: '/crossfit', text: 'Learn More'}]

  const wl_links = [
        {to: 'weightlifting', text: 'Learn More'}
      ]

  const community = "https://static.wixstatic.com/media/da39dc_653669ad158f411e83a87277b82ccfa2~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/DSC00582_websize_edited.jpg"
  const overhead ="https://static.wixstatic.com/media/da39dc_f60c741fe10a45f19060d70116ab028d~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/UNADJUSTEDNONRAW_thumb_4.jpg"
  const crossfit = "https://static.wixstatic.com/media/da39dc_38a9cc46f49048f8917d026d66bf06a3~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/20210916_171850.jpg"

</script>

<template>
  <heroNav class="bg-community bg-fixed" :links="hero_links" title="Train Together - train hard" :src="community" router="true" />
  <div class="mx-auto max-w-4xl">
    <div class="bg-white p-8 border border-gray-100 mb-3">
      Crossfit Guildford was established in 2012<br>
      Here, at CrossFit Guildford & Guildford Weightlifting, we all train together. Everyone knows everyone else and we spur each other on to work as hard as we can in a fun, supportive environment.
      CrossFit is suitable for all ages and all levels of ability.
      Small classes mean Coach to Athlete ratio is high.
      All our CrossFit Trainers are CrossFit qualified, and all our Weightlifting Coaches are British Weightlifting qualified.
      We run CrossFit , Weightlifting and Burn classes.
      We also run Kids classes and speciality classes such as Strongman, gymnastics, functional drills and skills.
    </div>
    <WhiteCard
      :src="crossfit"
      title="CrossFit Guildford"
      text="Qualified CrossFit Trainers in small classes, enables individual coaching  in supportive environment."
      class="mb-3"
      instalink="crossfitguildford"
      :links="cfLinks"
      />
    <WhiteCardInvert
      :src="community"
      title="Community"
      text="Great community where everyone knows each other making workouts fun and challenging. All ages and abilities welcome."
      class="mb-3"
      />
    <div class="md:grid md:grid-cols-2 md:my-3 mx-auto bg-white">
      <div class="md:w-11/12 h-full w-full">
        <div class="w-full h-60 md:h-full md:w-full object-cover mb-2">
          <img
              :src="overhead"
              class="object-cover h-full w-full"
          />
          </div>
        </div>
        <div class="my-auto md:text-left px-5 py-5 md:justify-items-start">
          <h1 class="font-extrabold text-2xl mb-0">Guildford Weightlifting</h1>
          <instaLink link="guildfordweightlifting" class="mb-2 mx-auto justify-items-center block"/>
          <p>Individual programmes with British Weightlifting Coaches. Support with Weightlifting competitions</p>
          <squareLink to="/weightlifting" text="Learn More" class="md:ml-0 mx-auto md:mr-0"/>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  mounted() {
    this.$emit('cfEvent')
  }
}
</script>

<style scoped>

.offset-section{
  margin-top: -50px;
}

</style>

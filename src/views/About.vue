<script setup>
  import HeroImage from "../components/images/HeroImage.vue";
</script>

<template>
<h1 class="p-3">{{title}}</h1>
  <div v-for="para in paras" class="pb-3 px-3">
    {{para}}
  </div>
  <HeroImage
      src="https://static.wixstatic.com/media/da39dc_f60c741fe10a45f19060d70116ab028d~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/UNADJUSTEDNONRAW_thumb_4.jpg"
      title="Guildford Weightlifting"
      text="Individual programmes with British Weightlifting Coaches. Support with Weightlifting competitions"
      link="https://www.instagram.com/guildfordweightlifting"
      linkText="@guildfordweightlifting"
  />
  <HeroImage
    src="https://static.wixstatic.com/media/da39dc_653669ad158f411e83a87277b82ccfa2~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/DSC00582_websize_edited.jpg"
    title="Community"
    text="Great community where everyone knows each other making workouts fun and challenging. All ages and abilities welcome."/>
  <HeroImage
    src="https://static.wixstatic.com/media/da39dc_38a9cc46f49048f8917d026d66bf06a3~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/20210916_171850.jpg"
    title="CrossFit Guildford"
    text="Qualified CrossFit Trainers in small classes, enables individual coaching  in supportive environment."/>
</template>

<script>
  export default {
    name: "About",
    data: function(){
      return {
        title: "About",
        paras: [
            "Crossfit Guildford was established in 2012",
            "Here, at CrossFit Guildford & Guildford Weightlifting, we all train together. Everyon knows everyone else and we spur each other on to work as hard as we can in a fun, supportive environment.",
            "CrossFit is suitable for all ages and all levels of ability.",
            "Small classes mean Coach to Athlete ratio is high.",
            "All our CrossFit Trainers are CrossFit qualified, and all our Weightlifting Coaches are British Weightlifting qualified.",
            "We run CrossFit , Weightlifting and Burn classes.",
            "We also run Kids classes and speciality classes such as Strongman, gymnastics, functional drills and skills."

        ]
      }
    }
  }
</script>

<style scoped>

</style>

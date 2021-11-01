<script setup>
import heroNav from "../components/heroNav.vue";

const links = [
  {to: "https://goteamup.com/p/15977-crossfit-guildford/memberships/107668/", text: "Free Trial"},
  {to: "https://goteamup.com/p/15977-crossfit-guildford/memberships/105409/", text: "CrossFit Introduction"},
  {to: "https://goteamup.com/p/15977-crossfit-guildford/memberships/114096/", text: "Weightlifting Introduction"}
]

</script>

<template>

    <heroNav
        class="bg-joining bg-fixed"
        title="Join Us"
        :links="links"
      />

  <div class="mx-auto text-center max-w-4xl">
    <div class="bg-white p-8 mx-auto text-center border border-gray-100">
      <h1 class="text-2xl font-extrabold">Want a Free Trial?</h1>
      <p class="mt-3 mb-3">Sign up here for a</p>
      <a href="https://goteamup.com/p/15977-crossfit-guildford/memberships/107668/" class="bg-gray-500 p-2 rounded-sm text-white">Free Trial Burn class</a>
      <p class="my-3">
        Burn classes are suitable for beginners.
        Once you have completed all the online admin, you can book into a Burn class on the online timetable
      </p>
      <h1 class="text-2xl font-extrabold">Want to join up but you are New to CrossFit or Weightlifting?</h1>
      <p class="my-3">
        Sign up here for our Introductory pack of three skills sessions:</p>
      <a href="https://goteamup.com/p/15977-crossfit-guildford/memberships/105409/" class="bg-gray-500 p-2 rounded-sm text-white">Introduction to CrossFit</a>
        <p class="my-3">or an </p>
      <a href="https://goteamup.com/p/15977-crossfit-guildford/memberships/114096/" class="bg-gray-500 p-2 rounded-sm text-white">Introduction to Weightlifting</a>
      <p class="mt-3">
        Class pack of three, one to one personal training skills sessions to provide you with the basic skills needed.
        Once you have completed them, you can join up to either a CrossFit membership or a Weightlifting membership.
      </p>
      <h1 class="text-2xl font-extrabold mt-3">Already a CrossFitter or Weightlifter?</h1>
        <p class="mt-3">
          Contact us at <a href="mailto:info@crossfitguildford.co.uk">info@crossfitguildford.co.uk</a>
          to discuss joining up or coming for a drop in.
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoiningUp"
}
</script>

<style scoped>

</style>

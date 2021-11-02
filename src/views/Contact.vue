<script setup>
  import customInput from "../components/customInput.vue";

</script>

<template>
  <div class="opacity-0 w-full h-2"></div>
  <div class="max-w-4xl bg-white mx-auto">
    <div class="grid grid-cols-2 py-5">
      <div class="h-96">
          <iframe
              class="w-full h-full"
              src="https://maps.google.com/maps?q=CrossFit%20Guildford&t=&z=17&ie=UTF8&iwloc=&output=embed">
          </iframe>
      </div>
    <div class="mt-3 block">
      <h1 class="font-bold text-gray-800 text-2xl pl-5">Contact Us</h1>
      <div class="justify-items-start text-left mx-auto px-10 mx-5">
        <form>
          <customInput type="text" label="Name" placeholder="Your Name"/>
          <customInput type="email" label="Email" placeholder="Your Email"/>
          <div class="block mt-2">
            <label for="message">Message</label><br>
            <textarea
                id="message"
                class="border border-gray-600 focus:ring-2 focus:ring-blue-400 block mt-2"
                rows="4"
                cols="20"
                placeholder="Your message here"
            />
            <input type="submit" class="mt-2 bg-gray-300 p-3 hover:bg-gray-600 hover:text-white"/>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style scoped>

</style>

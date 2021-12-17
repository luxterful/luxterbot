<template>
  <router-link to="/"> <p class="font-bold">&#60; back to chat</p></router-link>
  <div class="mt-4">
    <div class="w-full mb-6">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name">
        Webhook URL
      </label>
      <input
        class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
        id="grid-first-name"
        type="text"
        placeholder="http:// ..." />
    </div>
  </div>
  <div class="mt-4">
    <div class="w-full mb-6">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name">
        Webhook Secret
      </label>
      <input
        class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
        id="grid-first-name"
        type="text"
        placeholder="Secret ..." />
    </div>
  </div>
  <lux-button @click="saveConfiguration"> Save </lux-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LuxButton from "@/components/LuxButton.vue";

export default defineComponent({
  name: "App",
  components: { LuxButton },
  setup() {
    const saveConfiguration = () => {
      console.log("save");
    };
    return { saveConfiguration };
  },
});
</script>

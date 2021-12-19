<template>
  <router-link to="/"> <p class="font-bold">&#60; back to chat</p></router-link>
  <template v-if="configuration">
    <div class="mt-4">
      <div class="w-full mb-6">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name">
          Webhook URL
        </label>
        <input
          class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          v-model="configuration.webhookUrl"
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
          v-model="configuration.webhookSecret"
          type="text"
          placeholder="Secret ..." />
      </div>
    </div>
    <lux-button @click="saveConfiguration"> Save </lux-button>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LuxButton from "@/components/LuxButton.vue";
import { apiClient, Configuration } from "service-1/dist/client";

export default defineComponent({
  name: "App",
  components: { LuxButton },
  setup() {
    const configuration = ref<Configuration | null>(null);
    const client = apiClient("http://localhost:8081");

    const saveConfiguration = () => {
      if (configuration.value) {
        client.updateConfiguration(configuration.value);
      }
    };

    const fetchConfiguration = async () => {
      configuration.value = await client.getConfiguration();
    };

    fetchConfiguration();

    return { saveConfiguration, configuration };
  },
});
</script>

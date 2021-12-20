<template>
  <router-link to="/"> <p class="font-bold">&#60; back to chat</p></router-link>
  <template v-if="!loading">
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
    <div
      v-if="saved"
      class="inline-block ml-5 px-2 py-1 leading-normal text-green-700 bg-green-100 rounded-lg">
      Saved
    </div>
    <div
      v-if="error"
      class="inline-block ml-5 px-2 py-1 leading-normal text-red-700 bg-red-100 rounded-lg">
      Could not be saved
    </div>
  </template>
  <template v-else>Loading ...</template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LuxButton from "@/components/LuxButton.vue";
import { apiClient, Configuration } from "service-1";

export default defineComponent({
  name: "App",
  components: { LuxButton },
  setup() {
    const configuration = ref<Configuration>({
      webhookUrl: "",
      webhookSecret: "",
    });
    const service_1_url = "http://service-1.bot.luxterful.eu";
    const client = apiClient(service_1_url);
    const loading = ref(true);
    const saved = ref(false);
    const error = ref(false);

    const saveConfiguration = () => {
      if (configuration.value) {
        client
          .updateConfiguration(configuration.value)
          .then((newConfiguration) => {
            configuration.value = newConfiguration;
            saved.value = true;
            setTimeout(() => (saved.value = false), 1500);
          })
          .catch((err) => {
            console.error(err);
            error.value = true;
            setTimeout(() => (error.value = false), 1500);
          });
      }
    };

    const fetchConfiguration = async () => {
      configuration.value = await client.getConfiguration();

      loading.value = false;
    };

    fetchConfiguration();

    return { saveConfiguration, configuration, loading, saved, error };
  },
});
</script>

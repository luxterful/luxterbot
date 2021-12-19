<template>
  <div class="flex justify-between">
    <p class="text-lg font-bold">Chat with me</p>
    <lux-button @click="goToConfigurationPage">Settings</lux-button>
  </div>
  <div
    class="bg-white flex flex-col justify-between space-y-2 overflow-y-scroll max-h-100 p-5 rounded-md mt-5">
    <div
      v-for="(message, idx) in messages"
      :key="idx"
      class="flex"
      :class="{
        'justify-start': message.sender === 'bot',
        'justify-end': message.sender === 'user',
        'justify-center': message.sender === 'system',
      }">
      <div
        class="px-2 py-1"
        :class="{
          'bg-blue-500 rounded-t-xl rounded-r-xl': message.sender === 'bot',
          'bg-green-500 rounded-t-xl rounded-l-xl': message.sender === 'user',
          'bg-gray-500 rounded-xl text-sm text-white':
            message.sender === 'system',
        }">
        {{ message.message }}
      </div>
    </div>
  </div>
  <div class="bg-white p-2 mt-2 rounded-md flex">
    <input
      class="outline-0 focus:outline-none flex-1 mx-2"
      placeholder="Enter message ..."
      v-model="textInputMessage"
      @keydown.enter="sendMessage" />

    <lux-button @click="sendMessage" :disabled="!textInputMessageFilled">
      Send
    </lux-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref, ref } from "vue";
import { useRouter } from "vue-router";
import LuxButton from "@/components/LuxButton.vue";
import { apiClient, Message } from "service-1/dist/client";

export default defineComponent({
  name: "App",
  components: { LuxButton },
  setup() {
    const router = useRouter();
    const client = apiClient("http://localhost:8081");

    const textInputMessage = ref("");

    const messages = inject("messages") as Ref<Array<Message>>;

    const textInputMessageFilled = computed(
      () => textInputMessage.value.length > 0
    );

    const sendMessage = async () => {
      if (textInputMessageFilled.value) {
        const userMessage = textInputMessage.value;
        messages.value.push({ message: userMessage, sender: "user" });
        textInputMessage.value = "";

        client.postMessage({ message: userMessage }).then((messageResponse) => {
          messages.value.push(messageResponse);
        });
      }
    };

    const goToConfigurationPage = () => {
      router.push({
        name: "configuration",
      });
    };

    return {
      messages,
      textInputMessage,
      sendMessage,
      textInputMessageFilled,
      goToConfigurationPage,
    };
  },
});
</script>

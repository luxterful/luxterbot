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
        'justify-start': message.author === 'bot',
        'justify-end': message.author === 'user',
      }">
      <div
        class="px-2 py-1"
        :class="{
          'bg-blue-500 rounded-t-xl rounded-r-xl': message.author === 'bot',
          'bg-green-500 rounded-t-xl rounded-l-xl': message.author === 'user',
        }">
        {{ message.body }}
      </div>
    </div>
  </div>
  <div class="bg-white p-2 mt-2 rounded-md flex">
    <input
      class="outline-0 focus:outline-none flex-1 mx-2"
      placeholder="Enter message ..."
      v-model="textInputMessage" />

    <lux-button @click="sendMessage" :disabled="!textInputMessageFilled">
      Send
    </lux-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import LuxButton from "@/components/LuxButton.vue";

interface IMessage {
  body: string;
  author: "user" | "bot";
}

export default defineComponent({
  name: "App",
  components: { LuxButton },
  setup() {
    const router = useRouter();

    const textInputMessage = ref("");

    const messages = ref<Array<IMessage>>([
      { body: "Hello?", author: "user" },
      { body: "Yes, Hello! Who's there?", author: "bot" },
    ]);

    const textInputMessageFilled = computed(
      () => textInputMessage.value.length > 0
    );

    const sendMessage = () => {
      if (textInputMessageFilled.value) {
        messages.value.push({ body: textInputMessage.value, author: "user" });
        textInputMessage.value = "";
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

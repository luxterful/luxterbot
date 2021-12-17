<template>
  <div class="max-w-md m-auto bg-gray-300 p-5 mt-5 rounded-md">
    <div class="flex justify-between">
      <p class="text-lg font-bold">Chat with me</p>
      <button class="bg-black py-1 px-2 text-white rounded-md cursor-pointer">
        Settings
      </button>
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
      <button
        @click="sendMessage"
        class="bg-black opacity-50 py-1 px-2 text-white rounded-md cursor-default"
        :class="{ 'opacity-100 cursor-pointer': textInputMessageFilled }">
        Send
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

interface IMessage {
  body: string;
  author: "user" | "bot";
}

export default defineComponent({
  name: "App",
  setup() {
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
      }
    };

    return { messages, textInputMessage, sendMessage, textInputMessageFilled };
  },
});
</script>

<style lang="scss"></style>

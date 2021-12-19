<template>
  <div class="max-w-md m-auto bg-gray-300 p-5 mt-5 rounded-md">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Message } from "service-1/dist/client";
import { defineComponent, provide, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const messages = ref<Array<Message>>([
      { message: "Hello?", sender: "user" },
      { message: "Yes, Hello! Who's there?", sender: "bot" },
    ]);

    provide("messages", messages);
  },
});
</script>

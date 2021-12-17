<template>
  <div class="max-w-md m-auto bg-gray-300 p-5 mt-5 rounded-md">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
});
</script>

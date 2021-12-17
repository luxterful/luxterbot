<template>
  <button
    @click="$emit('click')"
    class="bg-black opacity-50 py-1 px-2 text-white rounded-md cursor-default"
    :class="{ 'opacity-100 cursor-pointer': !disabled }">
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "lux-button",
  props: {
    disabled: {
      default: false,
    },
  },
  emits: ["click"],
});
</script>

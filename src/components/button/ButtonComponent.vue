<template>
  <div
    :class="`bg-[#549DF2] text-[#FFFFFF] h-[2rem] flex items-center justify-center px-[12px] py-[7px] rounded-[100px] font-[16px] md:mr-[62px] hover:cursor-pointer sm:mx-2 md:mx-0 md:w-${width}`"
    @click="$emit('handleClick')"
  >
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: ["width", "title"],
});
</script>

<template>
  <div
    :class="`bg-[#549DF2] hover:scale-105 hover:drop-shadow-md text-[#FFFFFF] h-[2rem] flex items-center justify-center px-[12px] py-[7px] rounded-[100px] font-[16px] md:mr-[62px] hover:cursor-pointer sm:mx-2 md:mx-0`"
    :style="`transition: ease 0.5s;width:${width}`"
    @click="$emit('handleClick')"
  >
    <img src="/icons/i_back.png" class="pr-[0.4rem]" alt="back" v-show="icon" />
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: ["width", "title", "icon"],
});
</script>

<template>
  <!--movie card -->
  <div
    class="w-full bg-[#C4C4C4] rounded-[0.375rem] h-[12.188rem] flex items-center border border-[#C4C4C4] hover:cursor-pointer hover:scale-105 hover:drop-shadow-md"
    style="transition: ease 0.5s"
  >
    <!-- poster -->
    <div class="pl-[3px] my-[3px]">
      <img
        :src="IMAGE_URL + movie.poster_path"
        :alt="movie.title"
        class="w-[12rem] rounded-l-[0.375rem] h-[11.8rem]"
      />
    </div>
    <!-- informations -->
    <div class="flex flex-col justify-between h-full w-full">
      <p class="font-[700] px-[1.063rem] pt-[1rem]">
        {{ movie.title }}
      </p>
      <div>
        <div
          class="px-[1.063rem] text-[0.75rem] text-[#4E4E4E] flex gap-[0.43rem] pb-[14px]"
        >
          <img src="/icons/i_calender.png" :alt="movie.release_date" />
          <p>
            {{ movie.release_date }}
          </p>
        </div>
        <p class="px-[1.063rem] pb-[1.75rem]">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IMAGE_URL } from "@/statics";

export default defineComponent({
  name: "MovieCardComponent",
  props: ["movie"],
  data() {
    return {
      IMAGE_URL,
    };
  },
});
</script>

<template>
  <div class="flex flex-col mt-[10rem] items-center">
    <div class="flex justify-between mb-[14px]">
      <!-- pageination -->
      <p class="text-[#318FE7] hover:cursor-pointer text-[700]">Next Page</p>
      <div class="border-l border-[#6A6A6A] w-[1px] mx-[30px]"></div>
      <p class="text-[#318FE7] hover:cursor-pointer text-[700]">
        Previous Page
      </p>
    </div>
    <!-- results -->
    <p class="mb-[90px] text-[#989898]">Showing results 1-20</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationComponent",
});
</script>

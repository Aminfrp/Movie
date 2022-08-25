<template>
  <div class="flex flex-col mt-[10rem] items-center">
    <div class="flex justify-between mb-[14px]">
      <!-- pageination -->
      <p
        :class="[
          page === 1 ? 'text-[#0000007A]' : 'text-[#318FE7]',
          'hover:cursor-pointer text-[700]',
        ]"
        @click="$emit('handlePrevPage')"
      >
        Previous Page
      </p>
      <div class="border-l border-[#6A6A6A] w-[1px] mx-[30px]"></div>
      <p
        :class="[
          page === movies?.total_pages || page === 500
            ? 'text-[#0000007A]'
            : 'text-[#318FE7]',
          'text-[#318FE7] hover:cursor-pointer text-[700]',
        ]"
        @click="$emit('handleNextPage')"
      >
        Next Page
      </p>
    </div>
    <!-- results -->
    <p class="mb-[90px] text-[#989898]">
      Showing results {{ total - 20 + 1 }}-{{ total }}
    </p>
  </div>
</template>

<script lang="ts">
import { IMovies } from "@/interfaces/movies";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "PaginationComponent",
  props: {
    page: {
      type: Number,
    },
    total: {
      type: Number,
      default: 20,
    },
    movies: {
      type: Object as PropType<IMovies>,
    },
  },
});
</script>

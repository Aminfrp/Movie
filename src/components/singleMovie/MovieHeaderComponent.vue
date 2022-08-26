<template>
  <div
    class="bg-[#E2E2E2] md:mt-[4.375rem] sm:mt-10 md:h-[5.313rem] sm:h-[8.5rem] w-full rounded-[0.375rem] md:flex sm:flex sm:items-center md:justify-start md:items-center"
  >
    <!-- back button -->
    <div class="md:ml-[2.188rem]">
      <ButtonComponent
        title="Back"
        width="5.75rem"
        @handleClick="handleClick"
      />
    </div>
    <!-- movie title -->
    <div class="md:ml-[4rem] md:flex md:flex-col md:items-start w-full">
      <div class="font-[700] md:text-[1.125rem] sm:text-[0.9rem]">
        {{ movie?.title }}
      </div>
      <div class="md:text-[1.125rem] sm:text-[0.9rem]">
        {{ movie?.tagline }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ISingleMovie } from "@/interfaces/movies";
import { defineComponent, PropType } from "vue";
import ButtonComponent from "../button/ButtonComponent.vue";

export default defineComponent({
  name: "MovieHeaderComponent",
  props: {
    movie: {
      type: Object as PropType<ISingleMovie>,
    },
  },
  components: {
    ButtonComponent,
  },
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
});
</script>

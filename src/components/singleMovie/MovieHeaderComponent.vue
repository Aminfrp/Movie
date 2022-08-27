<template>
  <div
    class="bg-[#E2E2E2] md:mt-[4.375rem] sm:mt-10 md:h-[5.313rem] sm:h-[8.5rem] w-full rounded-[0.375rem] md:flex sm:flex sm:items-center md:justify-start md:items-center"
  >
    <!-- back button -->
    <div class="md:ml-[2.188rem]">
      <ButtonComponent
        title="Back"
        width="5.75rem"
        :icon="true"
        @handleClick="handleClick"
      />
    </div>
    <!-- movie title -->
    <div
      class="md:ml-[4rem] md:flex md:flex-col md:items-start w-full md:text-left sm:text-center"
    >
      <div class="font-[700] md:text-[1.125rem] sm:text-[0.9rem]">
        <SkeletonComponent
          width="15rem"
          height="1rem"
          radius="0.1rem"
          v-if="loading"
        />
        <p v-else>
          {{ movie?.title }}
        </p>
      </div>
      <div class="md:text-[1.125rem] sm:text-[0.9rem]">
        <SkeletonComponent
          width="15rem"
          height="1rem"
          radius="0.1rem"
          v-if="loading"
        />
        <p v-else>
          {{ movie?.tagline }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ISingleMovie } from "@/interfaces/movies";
import { defineComponent, PropType } from "vue";
import ButtonComponent from "../button/ButtonComponent.vue";
import SkeletonComponent from "@/components/Skeleton/SkeletonComponent.vue";

export default defineComponent({
  name: "MovieHeaderComponent",
  props: {
    movie: {
      type: Object as PropType<ISingleMovie>,
    },
    loading: {
      type: Boolean,
    },
  },
  components: {
    ButtonComponent,
    SkeletonComponent,
  },
  methods: {
    handleClick() {
      this.$router.push("/");
    },
  },
});
</script>

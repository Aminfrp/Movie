<template>
  <!--movie card -->
  <div
    class="w-full bg-[#C4C4C4] rounded-[0.375rem] h-[12.188rem] flex items-center border border-[#C4C4C4] hover:cursor-pointer hover:scale-105 hover:drop-shadow-md"
    style="transition: ease 0.5s"
    @click="navigateToMovie(movie?.id.toString() as string)"
  >
    <!-- poster -->
    <div class="pl-[3px] my-[3px]">
      <SkeletonComponent
        width="8rem"
        height="11.8rem"
        radius="0.375rem"
        v-if="loading"
      />
      <img
        v-else
        :src="IMAGE_URL + movie?.poster_path"
        :alt="movie?.title"
        class="w-[12rem] rounded-l-[0.375rem] h-[11.8rem]"
      />
    </div>

    <!-- informations -->
    <div class="flex flex-col justify-between h-full w-full">
      <div class="font-[700] px-[1.063rem] pt-[1rem]">
        <SkeletonComponent
          width="70%"
          height="1rem"
          radius="0.1rem"
          v-if="loading"
        />
        <p v-else>{{ movie?.title }}</p>
      </div>

      <div>
        <!-- release date -->
        <div
          class="px-[1.063rem] text-[0.75rem] text-[#4E4E4E] flex gap-[0.43rem] pb-[14px]"
        >
          <SkeletonComponent
            width="6rem"
            height="1rem"
            radius="0.1rem"
            v-if="loading"
          />
          <div v-else class="flex gap-2">
            <img src="/icons/i_calender.png" :alt="movie?.release_date" />
            <p>
              {{ movie?.release_date }}
            </p>
          </div>
        </div>
        <!-- genres -->
        <div class="px-[1.063rem] pb-[1.75rem] flex flex-wrap items-center">
          <SkeletonComponent
            width="2rem"
            height="1rem"
            radius="0.1rem"
            v-if="loading"
          />
          <SkeletonComponent
            width="2rem"
            height="1rem"
            radius="0.1rem"
            v-if="loading"
          />
          <SkeletonComponent
            width="2rem"
            height="1rem"
            radius="0.1rem"
            v-if="loading"
          />
          <div
            v-else
            v-for="(genre, i) in getGenres"
            :key="i"
            class="flex items-center text-[12px] text-[#505050]"
          >
            {{ genre.name }}
            <i
              class="fa fa-circle fa-sm mx-2 text-[4px]"
              aria-hidden="true"
              v-if="getGenres?.length !== i + 1"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IMAGE_URL } from "@/statics";
import { IGenres, IMovie, IGanre } from "@/interfaces/movies";
import SkeletonComponent from "@/components/Skeleton/SkeletonComponent.vue";

export default defineComponent({
  name: "MovieCardComponent",
  components: {
    SkeletonComponent,
  },
  props: {
    movie: {
      type: Object as PropType<IMovie>,
    },
    genres: {
      type: Object as PropType<IGenres>,
    },
    loading: {
      type: Boolean,
    },
  },
  computed: {
    getGenres(): IGanre[] | undefined {
      const movieGenres = this.genres?.genres?.filter((genre) =>
        this.movie?.genre_ids.includes(genre.id)
      );
      return movieGenres;
    },
  },
  data() {
    return {
      IMAGE_URL,
    };
  },
  methods: {
    navigateToMovie(id: string) {
      this.$router.push(`/${id}`);
    },
  },
});
</script>

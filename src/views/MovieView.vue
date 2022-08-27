<template>
  <!-- header -->
  <MovieHeaderComponent :movie="currentMovie" :loading="loading" />
  <!-- info -->
  <MovieBodyComponent :movie="currentMovie" :loading="loading" />
  <!-- movie description -->
  <template v-if="loading">
    <template v-for="(_, i) in Array(8)" :key="i">
      <SkeletonComponent
        width="100%"
        height="1rem"
        radius="0.1rem"
        color="#E2E2E2"
        v-if="!loading"
      />
    </template>
  </template>
  <div class="mt-[3.313rem]" v-else>{{ currentMovie.overview }}</div>
  <!-- cast members -->
  <div class="mt-[5rem] mb-[5rem]">
    <p class="font-[700] text-[18px] mb-[0.75rem]">Credit:</p>
    <template v-if="loading">
      <template v-for="(_, i) in Array(2)" :key="i">
        <SkeletonComponent
          width="100%"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="!loading"
        />
      </template>
    </template>
    <p class="text-[14px]" v-else>
      <span v-for="(actor, key) in getTopTenActors()?.topTen" :key="key">{{
        key + 1 === getTopTenActors()?.topTen.length
          ? actor.original_name
          : actor.original_name + " , "
      }}</span>
      and {{ getTopTenActors()?.count }} more.
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import movieAxios from "@/axios/movieAxios";
import { ICredits, ISingleMovie } from "@/interfaces/movies";
import MovieHeaderComponent from "../components/singleMovie/MovieHeaderComponent.vue";
import MovieBodyComponent from "../components/singleMovie/MovieBodyComponent.vue";
import SkeletonComponent from "@/components/Skeleton/SkeletonComponent.vue";

export default defineComponent({
  name: "MovieView",
  components: {
    MovieHeaderComponent,
    MovieBodyComponent,
    SkeletonComponent,
  },
  data() {
    return {
      currentMovie: {} as ISingleMovie,
      credits: {} as ICredits,
      loading: false as boolean,
    };
  },
  methods: {
    // get movie
    async getCurrentMovie(movieId: string) {
      try {
        this.loading = true;
        const response = await movieAxios.fetchOneMovie(movieId);
        this.currentMovie = response.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        this.loading = false;
      }
    },
    // get movie credits
    async getCredits(movieId: string) {
      this.loading = true;
      try {
        const response = await movieAxios.fetchCredits(movieId);
        this.credits = response.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        this.loading = false;
      }
    },
    // get top ten actors and number of all actors
    getTopTenActors() {
      if (Object.keys(this.credits).length) {
        const popularityActors = this.credits.cast
          .filter((castItem) => castItem.known_for_department === "Acting")
          .sort((a, b) => b.popularity - a.popularity);
        return {
          topTen: popularityActors?.splice(0, 10),
          count: popularityActors?.length,
        };
      }
    },
  },
  created() {
    this.getCurrentMovie(this.$route.params.id as string);
    this.getCredits(this.$route.params.id as string);
  },
});
</script>

<template>
  <!-- header -->
  <MovieHeaderComponent :movie="currentMovie" />
  <!-- info -->
  <MovieBodyComponent :movie="currentMovie" />
  <!-- movie description -->
  <div class="mt-[3.313rem]">{{ currentMovie.overview }}</div>
  <!-- cast members -->
  <div class="mt-[5rem] mb-[5rem]">
    <p class="font-[700] text-[18px] mb-[0.75rem]">Credit:</p>
    <p class="text-[14px]">
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

export default defineComponent({
  name: "MovieView",
  components: {
    MovieHeaderComponent,
    MovieBodyComponent,
  },
  data() {
    return {
      currentMovie: {} as ISingleMovie,
      credits: {} as ICredits,
    };
  },
  methods: {
    // get movie
    async getCurrentMovie(movieId: string) {
      try {
        const response = await movieAxios.fetchOneMovie(movieId);
        this.currentMovie = response.data;
      } catch (error) {
        alert(error);
      }
    },
    // get movie credits
    async getCredits(movieId: string) {
      try {
        const response = await movieAxios.fetchCredits(movieId);
        this.credits = response.data;
      } catch (error) {
        alert(error);
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

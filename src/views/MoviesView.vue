<template>
  <!-- movies filter -->
  <SearchBoxComponent />
  <!-- movies cards -->
  <div
    class="w-full md:mt-[7.438rem] grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-[4.188rem] md:gap-y-[2.375rem] sm:gap-[2.375rem] sm:my-10"
  >
    <div v-for="(movie, i) in movies.results" :key="i">
      <MovieCardComponent :movie="movie" :genres="genres" />
    </div>
  </div>
  <PaginationComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBoxComponent from "@/components/searchbox/SearchBoxComponent.vue";
import MovieCardComponent from "@/components//movieCard/MovieCardComponent.vue";
import PaginationComponent from "@/components//pagination/PaginationComponent.vue";
import movieAxios from "@/axios/movieAxios";
import { IGenres, IMovies } from "@/interfaces/movies";

export default defineComponent({
  name: "MoviesView",
  components: {
    SearchBoxComponent,
    MovieCardComponent,
    PaginationComponent,
  },
  data() {
    return {
      movies: {} as IMovies,
      genres: {} as IGenres,
    };
  },
  methods: {
    // get fetch  all movies
    async getMovies() {
      try {
        const response = await movieAxios.fetchMovies();
        this.movies = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    // get fetch  all genres
    async getGenres() {
      try {
        const response = await movieAxios.fetchGenres();
        this.genres = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getMovies();
    this.getGenres();
  },
});
</script>

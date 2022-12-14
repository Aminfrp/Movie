<template>
  <!-- movies filter -->
  <SearchBoxComponent @filterMovies="filterMovies" @resetFilter="resetFilter" />
  <!-- movies cards -->
  <div
    class="w-full md:mt-[7.438rem] grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-[4.188rem] md:gap-y-[2.375rem] sm:gap-[2.375rem] sm:my-10"
  >
    <div v-for="(movie, i) in movies.results || Array(20)" :key="i">
      <MovieCardComponent :movie="movie" :genres="genres" :loading="loading" />
    </div>
  </div>
  <!-- pagination -->
  <PaginationComponent
    @handleNextPage="nextPage"
    @handlePrevPage="previusPage"
    :page="page"
    :total="total"
    :movies="movies"
  />
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
      page: 1 as number,
      total: 20 as number,
      releaseDates: null as null | string[],
      loading: false as boolean,
    };
  },
  methods: {
    // get fetch  all movies
    async getMovies(page = 1 as number, releaseDate = null as string[] | null) {
      this.loading = true;
      try {
        const response = await movieAxios.fetchMovies(page, releaseDate);
        this.movies = response.data;
        this.loading = false;
      } catch (error) {
        this.$snackbar.add({
          type: "error",
          text: error,
        });
        this.loading = false;
      }
    },
    // get fetch  all genres
    async getGenres() {
      this.loading = true;
      try {
        const response = await movieAxios.fetchGenres();
        this.genres = response.data;
        this.loading = false;
      } catch (error) {
        this.$snackbar.add({
          type: "error",
          text: error,
        });
        this.loading = false;
      }
    },
    // handel next page
    nextPage() {
      if (this.page === this.movies.total_pages || this.page === 500) return;
      this.page += 1;
      this.total += 20;
    },
    // handle previus page
    previusPage() {
      if (this.page === 1) return;
      this.page -= 1;
      this.total -= 20;
    },
    // filter Movies
    filterMovies(dates: Date[] | null) {
      if (dates) {
        this.page = 1;
        this.total = 20;
        const releaseDate = dates.map((date) => date.toISOString());
        this.releaseDates = releaseDate;
        this.getMovies(1, releaseDate);
      }
    },
    resetFilter() {
      this.releaseDates = null;
      this.page = 1;
      this.total = 20;
      this.getMovies(1, null);
    },
  },
  async created() {
    await this.getMovies();
    this.getGenres();
  },
  watch: {
    page(currentPage) {
      this.getMovies(currentPage, this.releaseDates);
    },
  },
});
</script>

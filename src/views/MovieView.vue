<template>
  <div class="about">
    <MovieHeaderComponent :movie="currentMovie" />
    <h1>{{ currentMovie.title }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import movieAxios from "@/axios/movieAxios";
import { ISingleMovie } from "@/interfaces/movies";
import MovieHeaderComponent from "../components/movieHeader/MovieHeaderComponent.vue";

export default defineComponent({
  name: "MovieView",
  components: {
    MovieHeaderComponent,
  },
  data() {
    return {
      currentMovie: {} as ISingleMovie,
    };
  },
  methods: {
    async getCurrentMovie(movieId: string) {
      try {
        const response = await movieAxios.fetchOneMovie(movieId);
        this.currentMovie = response.data;
      } catch (error) {
        alert(error);
      }
    },
  },
  created() {
    this.getCurrentMovie(this.$route.params.id as string);
  },
});
</script>

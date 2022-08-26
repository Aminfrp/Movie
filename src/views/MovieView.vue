<template>
  <!-- header -->
  <MovieHeaderComponent :movie="currentMovie" />
  <!-- info -->
  <MovieBodyComponent :movie="currentMovie" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import movieAxios from "@/axios/movieAxios";
import { ISingleMovie } from "@/interfaces/movies";
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

<template>
  <div
    class="md:mt-[4.875rem] sm:my-10 flex md:flex-row sm:flex-col sm:items-center md:items-start"
  >
    <!-- movie poster -->
    <div class="md:w-[330px] sm:w-full md:h-[495px] sm:h-full">
      <SkeletonComponent
        width="100%"
        height="500px"
        radius="12px"
        color="#E2E2E2"
        v-if="loading"
      />
      <img
        v-else
        :src="IMAGE_URL + movie?.poster_path"
        :alt="movie?.title"
        class="rounded-[12px]"
      />
    </div>
    <!-- movie info -->
    <div class="md:pl-[4.375rem] w-full sm:p-5">
      <!-- budget -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">Budget</p>
        <SkeletonComponent
          width="4rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <p v-else>
          $
          {{ movie?.budget ? (movie?.budget as number).toLocaleString() : 0 }}
        </p>
      </div>
      <!-- revenue -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">Revenue</p>
        <SkeletonComponent
          width="4rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <p v-else>
          $
          {{ movie?.revenue ? (movie?.revenue as number).toLocaleString() : 0 }}
        </p>
      </div>
      <!-- release date -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">Release Date</p>
        <SkeletonComponent
          width="4rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <p v-else>{{ movie?.release_date ? movie?.release_date : "_" }}</p>
      </div>
      <!-- runtime -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">Runtime</p>
        <SkeletonComponent
          width="4rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <p v-else>
          {{
            movie?.runtime ? secondsToHms((movie?.runtime as number) * 60) : "_"
          }}
        </p>
      </div>
      <!-- score -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">Score</p>
        <SkeletonComponent
          width="15rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <div class="flex items-center" v-else>
          <star-rating
            :rating="(movie?.vote_average as number) / 2"
            :read-only="true"
            :star-size="20"
            :show-rating="false"
            :increment="0.1"
          ></star-rating>
          <span class="ml-1">{{
            `${movie?.vote_average} (${movie?.vote_count} votes)`
          }}</span>
        </div>
      </div>
      <!-- genre -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">Genres</p>
        <SkeletonComponent
          width="10rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <p v-else>
          <span v-for="(genre, key) in movie?.genres" :key="key">
            {{
              movie?.genres.length === key + 1 ? genre.name : genre.name + " , "
            }}
          </span>
        </p>
      </div>
      <!-- imdb -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">IMDB Link</p>
        <SkeletonComponent
          width="2rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <div v-else>
          <a
            :href="`https://www.imdb.com/title/${movie?.imdb_id}`"
            v-if="movie?.imdb_id"
            class="text-[#318FE7] underline"
            >Link</a
          >
          <p v-else>_</p>
        </div>
      </div>
      <!-- home page link -->
      <div class="flex justify-between py-[9px]">
        <p class="font-[700]">Homepage Link</p>
        <SkeletonComponent
          width="2rem"
          height="1rem"
          radius="0.1rem"
          color="#E2E2E2"
          v-if="loading"
        />
        <div v-else>
          <a
            :href="movie.homepage"
            v-if="movie?.homepage"
            class="text-[#318FE7] underline"
            >Link</a
          >
          <p v-else>_</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ISingleMovie } from "@/interfaces/movies";
import { IMAGE_URL } from "@/statics";
import { defineComponent, PropType } from "vue";
import StarRating from "vue-star-rating";
import SkeletonComponent from "@/components/Skeleton/SkeletonComponent.vue";

export default defineComponent({
  name: "MovieBodyComponent",
  components: {
    StarRating,
    SkeletonComponent,
  },
  props: {
    movie: {
      type: Object as PropType<ISingleMovie>,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      IMAGE_URL,
    };
  },
  methods: {
    // convert second to hour format
    secondsToHms(d: number) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);

      var hDisplay = h > 0 ? h + "h " : "";
      var mDisplay = m > 0 ? m + "m " : "";
      return hDisplay + mDisplay;
    },
  },
});
</script>

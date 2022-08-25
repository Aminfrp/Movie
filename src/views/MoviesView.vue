<template>
  <SearchBoxComponent />
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBoxComponent from "@/components/searchbox/SearchBoxComponent.vue";

export default defineComponent({
  name: "MoviesView",
  components: {
    SearchBoxComponent,
  },
});
</script>

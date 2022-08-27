<template>
  <teleport to="body">
    <vue3-snackbar bottom center :duration="4000"></vue3-snackbar>
  </teleport>
  <LayoutsComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutsComponent from "@/components/layouts/LayoutsComponent.vue";

export default defineComponent({
  name: "AppView",
  components: {
    LayoutsComponent,
  },
});
</script>

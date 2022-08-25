<template>
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

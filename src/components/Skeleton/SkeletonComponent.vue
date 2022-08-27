<template>
  <div class="animate-pulse">
    <div
      :style="`height: ${height};width: ${width};border-radius: ${radius};background-color:${color};margin:2px`"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkeletonComponent",
  props: {
    width: { type: String },
    height: { type: String },
    radius: { type: String },
    color: { type: String, default: "#FFFFFF" },
  },
});
</script>

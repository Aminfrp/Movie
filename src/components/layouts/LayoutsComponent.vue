<template>
  <!-- header -->
  <HeaderComponent />
  <!-- page container -->
  <div class="mt-[70px]">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./HeaderComponent.vue";

export default defineComponent({
  name: "LayoutsComponent",
  components: { HeaderComponent },
});
</script>

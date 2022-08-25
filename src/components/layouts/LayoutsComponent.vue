<template>
  <!-- application base pages -->
  <div class="h-screen">
    <!-- header -->
    <HeaderComponent />
    <!-- page container -->
    <div class="md:mt-[4.375rem] sm:mt-2 md:px-[13rem] sm:px-[1rem] h-full">
      <router-view />
    </div>
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

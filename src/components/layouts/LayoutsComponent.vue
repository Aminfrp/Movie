<template>
  <HeaderComponent />
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./HeaderComponent.vue";

export default defineComponent({
  name: "LayoutsComponent",
  components: { HeaderComponent },
});
</script>

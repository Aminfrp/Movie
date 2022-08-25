<template>
  <div
    class="bg-[#E2E2E2] md:h-[5.313rem] sm:h-[8.5rem] w-full rounded-[0.375rem] md:flex md:justify-between md:items-center"
  >
    <!-- filter date -->
    <div
      class="md:ml-[5.063rem] sm:ml-2 sm:my-5 md:flex md:items-center sm:flex sm:p-3"
    >
      <p class="mr-[1.813rem]">Search by release date:</p>
      <div
        class="h-[2.063rem] bg-[#FFFFFF] w-[13.813rem]"
        style="border: 1px solid #cfcfcf"
      ></div>
    </div>
    <!-- search button -->
    <ButtonComponent title="Search" width="[10px]" @handleClick="handleClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "../button/ButtonComponent.vue";

export default defineComponent({
  name: "SearchBoxComponent",
  components: {
    ButtonComponent,
  },
  methods: {
    handleClick: () => {
      console.log("click");
    },
  },
});
</script>

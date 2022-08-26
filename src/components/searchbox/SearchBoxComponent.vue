<template>
  <div
    class="bg-[#E2E2E2] md:h-[5.313rem] sm:mt-10 sm:h-[8.5rem] w-full rounded-[0.375rem] md:flex md:justify-between md:items-center"
  >
    <!-- filter date -->
    <div
      class="md:ml-[5.063rem] sm:ml-2 sm:items-center md:flex md:items-center sm:flex sm:p-3"
    >
      <p class="mr-[1.813rem]">Search by release date:</p>
      <DatePicker
        v-model="date"
        range
        multiCalendars
        @cleared="resetFilter"
        :enableTimePicker="false"
      ></DatePicker>
    </div>
    <!-- search button -->
    <ButtonComponent
      title="Search"
      width="4.625rem"
      @handleClick="handleClick"
    />
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
  data() {
    return {
      date: null as null | Date[],
    };
  },
  methods: {
    handleClick() {
      this.$emit("filterMovies", this.date);
    },
    resetFilter() {
      this.date = null;
      this.$emit("resetFilter");
    },
  },
});
</script>

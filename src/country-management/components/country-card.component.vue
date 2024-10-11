<script setup>
import { defineProps } from "vue";
import Country from "../models/country.entity.js";

defineOptions({
  name: 'country-card'
});

const props = defineProps({
  country: {
    type: Country,
    required: true
  }
});

</script>

<template>
  <div class="border border-gray-300 rounded p-3">
    {{ props.country.name}}
  </div>
</template>

<style scoped>

</style>
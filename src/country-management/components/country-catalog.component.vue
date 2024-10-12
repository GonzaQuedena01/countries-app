<script setup>
import CountryCard from "./country-card.component.vue";
import { defineProps } from "vue";

defineOptions({
  name: 'country-catalog'
});

const props = defineProps({
  countries: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <div class="catalog grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    <country-card v-for="country in props.countries" :key="country.name" :country="country"/>
  </div>
</template>

<style scoped>

</style>
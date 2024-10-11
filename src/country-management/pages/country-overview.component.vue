<script setup>
import CountryService from "../services/country.service.js";
import { onMounted, ref } from "vue";

const countries = ref([]);
const apiCountries = new CountryService();

const _fetchCountries = async () => {
  try {
    const response = await apiCountries.fetchCountries();
    countries.value = response.data;
    console.log(countries.value);
  }
  catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  _fetchCountries();
});

</script>

<template>

</template>

<style scoped>

</style>
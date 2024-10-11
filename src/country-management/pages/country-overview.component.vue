<script setup>
import CountryService from "../services/country.service.js";
import { onMounted, ref } from "vue";

import CountryCatalog from "../components/country-catalog.component.vue";
import Country from "../models/country.entity.js";

const countries = ref([]);
const apiCountries = new CountryService();

const _buildCountryFromApiResponse = (response) => {
  return response.map((country) => {
    return new Country({
      name: country.name.common,
      capital: country.capital,
      cca3: country.cca3,
      flags: { alt: country.name.common, png: country.flags.png },
      population: country.population,
      region: country.region,
    });
  });
}

const _fetchCountries = async () => {
  try {
    const response = await apiCountries.fetchCountries();
    countries.value = _buildCountryFromApiResponse(response.data);
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
  <country-catalog :countries="countries"/>
</template>

<style scoped>

</style>
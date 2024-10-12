<script setup>
import CountryService from "../services/country.service.js";
import { onMounted, ref, watch, computed } from "vue";

import CountryCatalog from "../components/country-catalog.component.vue";
import CountryFilter from "../components/country-filter.component.vue";
import PaginatorButton from '../../shared/components/pagination-button.vue'
import Country from "../models/country.entity.js";

const countries = ref([]);
const inputText = ref('');
const filteredCountries = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(12);
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
    filteredCountries.value = countries.value;
  }
  catch (error) {
    console.error(error);
  }
};

const _handleUpdate = (countrySearched) => {
  inputText.value = countrySearched;
}

const _filterCountries = () => {
  filteredCountries.value = countries.value.filter((country) => {
    return country.name.toLowerCase().includes(inputText.value.toLowerCase());
  });
}

const paginatedCountries = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredCountries.value.slice(start, end);
});

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value * itemsPerPage.value < filteredCountries.value.length) {
    currentPage.value++;
  }
};

watch(inputText, _filterCountries);

onMounted(() => {
  _fetchCountries();
});
</script>

<template>
  <div class="overview flex flex-col gap-4 mt-12 mb-4">
    <country-filter @update-filter="_handleUpdate"/>

    <paginator-button :current-page="currentPage" :total-items="filteredCountries.length"
                      :items-per-page="itemsPerPage" @previous="previousPage" @next="nextPage"/>

    <country-catalog :countries="paginatedCountries"/>
  </div>
</template>

<style scoped>
</style>

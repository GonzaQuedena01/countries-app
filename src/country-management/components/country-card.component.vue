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

const capitals = props.country.capital ?
    (Array.isArray(props.country.capital) ? props.country.capital : [props.country.capital]) : [];

const sortedCapitals = capitals.sort((a, b) => a.length - b.length);

</script>

<template>
  <div class="card border border-gray-300 rounded p-3 bg-gray-100 flex flex-col gap-3">

    <div class="card__image">
      <img class="w-full h-40"
           :src="props.country.flags.png"
           :alt="props.country.flags.alt"/>
    </div>

    <h4 class="text-xl font-bold text-gray-600">{{ props.country.name }}</h4>

    <div class="text-sm text-gray-400">
      <span v-if="sortedCapitals.length > 1">Capitales:</span>
      <span v-else>Capital:</span>
      <ul>
        <li v-for="capital in sortedCapitals" :key="capital" class="font-bold">{{ capital }}</li>
      </ul>
    </div>

    <p class="text-sm text-gray-400">
      Population: <span class="font-bold">{{ props.country.population?.toLocaleString() }}</span>
    </p>

    <p class="text-sm text-gray-400">
      Region: <span class="font-bold">{{ props.country.region }}</span>
    </p>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { ref } from "vue";

defineOptions({
  name: 'search-filter'
});

const countrySearched = ref('');
const emit = defineEmits(['update-filter']);

const handleInput = () => {
  emit('update-filter', countrySearched.value);
}
</script>

<template>
  <div class="mb-4">
    <input type="text" class="border border-gray-300 rounded w-full p-1 px-4" placeholder="Search by country name"
           v-model="countrySearched"
            @input="handleInput"/>
  </div>
</template>

<style scoped>

</style>
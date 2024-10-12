<script setup>
import {computed} from "vue";

defineOptions({
  name: 'pagination-button'
})

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, required: true }
});

const emit = defineEmits(['previous', 'next']);

const isPreviousDisabled = computed(() => {
  return props.currentPage === 1;
});

const isNextDisabled = computed(() => {
  return props.currentPage * props.itemsPerPage >= props.totalItems;
});

const onPrevious = () => {
  if (!isPreviousDisabled.value) {
    emit('previous');
  }
};

const onNext = () => {
  if (!isNextDisabled.value) {
    emit('next');
  }
};

</script>

<template>
  <div class="pagination__buttons flex justify-between px-4">
    <button class="pagination__button" @click="onPrevious" :disabled="isPreviousDisabled">Previous</button>
    <button class="pagination__button" @click="onNext" :disabled="isNextDisabled">Next</button>
  </div>
</template>

<style scoped>
.pagination__button {
  background: #cccccc;
  padding: 5px 10px;
  border-radius: .5rem;
}

.pagination__button:hover {
  background: #aaaaaa;
}

</style>
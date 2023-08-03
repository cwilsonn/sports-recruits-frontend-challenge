<template>
  <section class="flex flex-col items-start gap-y-4 sm:gap-y-0 sm:flex-row academic-fit__athlete-summary gap-x-3">
    <AcademicFitAthleteImage :athlete-name="computedAthlete.name"
      :image-url="computedAthlete.profile_image" />
    <div>
      <div class="inline-flex flex-row items-center gap-x-2 group">
        <h2 class="text-xl font-bold border-b border-transparent text-brand-primary"
          v-if="!showForm">{{ computedAthlete.name }}</h2>
        <FormAthleteEditName v-else
          @cancel-form="handleCancel"
          @submit-form="handleSubmit" />
        <button v-show="!showForm"
          type="button"
          class="p-2 text-white rounded-lg opacity-0 group-hover:transition-opacity bg-brand-primary group-hover:flex group-hover:opacity-100"
          @click="showForm = !showForm">
          <span class="sr-only">Edit</span>
          <IconUniconsPen class="w-4 h-4 m-auto" />
        </button>
      </div>
      <ul class="list-none md:columns-2">
        <li v-for="(detail, label) in computedAthleteDetails"
          :key="label">
          <label class="font-bold">{{ label }}:</label>
          {{ detail }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

import { useGlobalStore } from '@/store';

import AcademicFitAthleteImage from '@/components/AcademicFitAthleteImage.vue';
import FormAthleteEditName from '@/components/FormAthleteEditName.vue';
import IconUniconsPen from '@/components/IconUniconsPen.vue';

const { state } = useGlobalStore();

const showForm = ref(false);

const computedAthlete = computed(() => state.data[0]);
const computedAthleteDetails = computed(() => {
  return {
    Sport: computedAthlete.value.sport,
    Class: computedAthlete.value.grad_year,
    Club: computedAthlete.value.club.name,
    'High School': computedAthlete.value.high_school.name,
    GPA: computedAthlete.value.gpa,
    'Desired Major': computedAthlete.value.major,
  };
});

const handleSubmit = (form) => {
  state.data[0].name = form.name;
  showForm.value = false;
};

const handleCancel = () => {
  showForm.value = false;
};
</script>

<template>
  <section class="flex flex-col items-start gap-y-4 sm:gap-y-0 sm:flex-row academic-fit__athlete-summary gap-x-3">
    <AcademicFitAthleteImage :athlete-name="athlete.name"
      :image-url="athlete.profile_image"></AcademicFitAthleteImage>
    <div>
      <h2 class="text-xl font-bold text-brand-primary">{{ athlete.name }}</h2>
      <ul class="list-none md:columns-2">
        <li v-for="(detail, label) in athleteDetails"
          :key="label">
          <label class="font-bold">{{ label }}:</label>
          {{ detail }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

import AcademicFitAthleteImage from './AcademicFitAthleteImage.vue';

const props = defineProps({
  athlete: {
    type: Object,
    required: true,
  },
});

const athleteDetails = computed(() => {
  return {
    Sport: props.athlete.sport,
    Class: props.athlete.grad_year,
    Club: props.athlete.club.name,
    'High School': props.athlete.high_school.name,
    GPA: props.athlete.gpa,
    'Desired Major': props.athlete.major,
  }
});
</script>

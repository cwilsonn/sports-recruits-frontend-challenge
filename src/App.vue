<template>
  <div class="container">
    <AcademicFitReport :athlete="athleteData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useGlobalStore } from '@/store';
import AcademicFitReport from '@/components/AcademicFitReport.vue';

const { state } = useGlobalStore();

const athleteData = ref(state.data[0]);
</script>

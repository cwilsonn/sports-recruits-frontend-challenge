<template>
  <div class="container">
    <AcademicFitReport :athlete="athleteData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import AcademicFitReport from "@/components/AcademicFitReport.vue";
import AthleteData from "@/assets/data.json";

const athleteData = ref(AthleteData.data[0]);
</script>

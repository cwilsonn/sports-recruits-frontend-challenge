<template>
  <article class="grid grid-flow-row grid-cols-[3rem_auto_3rem] grid-rows-auto">
    <div class="h-2 col-span-2 row-span-1 bg-brand-primary"></div>
    <section
      class="flex flex-col items-start justify-between col-span-1 col-start-2 row-span-1 py-16 gap-y-12 lg:gap-x-4 lg:flex-row lg:gap-y-0 academic-fit__summary">
      <AcademicFitAthleteSummary :athlete="athlete" />
      <div class="flex flex-col items-end -order-1 lg:order-2">
        <img src="../assets/images/sr-insights-logo.png"
          alt="SportsRecruits Insights logo"
          class="max-h-16">
        <h1 class="text-lg">Academic Fit Report</h1>
      </div>
    </section>
    <AcademicFitTable class="col-span-1 col-start-2 row-span-1 mb-8"
      :report="athlete.report" />
    <div class="h-2 col-span-3 row-span-1 bg-brand-primary"></div>
  </article>
</template>

<script setup>
import AcademicFitAthleteSummary from '@/components/AcademicFitAthleteSummary.vue';
import AcademicFitTable from '@/components/AcademicFitTable.vue';

defineProps({
  athlete: {
    type: Object,
    required: false,
  },
});
</script>

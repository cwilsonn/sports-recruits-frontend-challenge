<template>
  <tr>
    <td class="sticky left-0 z-10 p-2"
      :class="computedStripeClass">
      {{ row.school }}
    </td>
    <td class="p-2 text-center"
      :class="computedStripeClass">
      {{ row.division }}
    </td>
    <td class="p-2"
      :class="computedStripeClass">
      {{ row.conference }}
    </td>
    <td class="p-2 text-center"
      :class="computedStripeClass">
      {{ row.ranking }}
    </td>
    <template v-for="(gpa, key) in row.gpa"
      :key="key">
      <td class="p-2 text-center"
        :class="computedStripeClass"
        v-if="key !== '50%'">
        {{ gpa }}
      </td>
      <AcademicFitTableGPACell v-else
        :gpa="gpa" />
    </template>
    <td class="p-2 text-center"
      :class="computedStripeClass">
      {{
        row.sat.reading.min === 'N/A' || row.sat.reading.max === 'N/A'
        ? 'Not Reported'
        : row.sat.reading.min + '-' + row.sat.reading.max
      }}
    </td>
    <td class="p-2 text-center"
      :class="computedStripeClass">
      {{
        row.sat.math.min === 'N/A' || row.sat.math.max === 'N/A'
        ? 'Not Reported'
        : row.sat.math.min + '-' + row.sat.math.max
      }}
    </td>
    <td class="p-2 text-center"
      :class="computedStripeClass">
      {{
        row.act.min === 'N/A' || row.act.max === 'N/A'
        ? 'Not Reported'
        : row.act.min + '-' + row.act.max
      }}
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue';

import AcademicFitTableGPACell from './AcademicFitTableGPACell.vue';

const props = defineProps({
  row: {
    type: Object,
    required: true,
  },
  isOdd: {
    type: Boolean,
    required: false,
  },
});

const computedStripeClass = computed(() => {
  return {
    'bg-[#e8f0fe]': props.isOdd,
    'bg-white': !props.isOdd,
  };
});
</script>

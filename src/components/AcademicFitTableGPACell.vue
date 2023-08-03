<template>
  <td :class="computedClasses">
    {{ gpa }}
  </td>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  gpa: {
    type: Number,
    required: true,
  },
  referenceGpa: {
    type: Number,
    required: true,
  },
});

const computedClasses = computed(() => {
  const gpaCeil = +props.referenceGpa + 0.1;
  const gpaFloor = +props.referenceGpa - 0.1;

  // List of colors to use for the background of the cell
  // The colors are in order from highest to lowest
  // The hex values are stored in TailwindCSS arbitrary value syntax to be picked up by PurgeCSS
  const bgColors = [
    'bg-[#d7737d]',
    'bg-[#c194b5]',
    'bg-[#b4a7d6]',
    'bg-[#a6a8da]',
    'bg-[#75ace5]',
  ];

  const classes = [
    'text-center',
    'p-2',
  ];

  if (props.gpa > gpaCeil) {
    classes.push(bgColors[0])
  } else if (props.gpa > props.referenceGpa && props.gpa <= gpaCeil) {
    classes.push(bgColors[1]);
  } else if (props.gpa === props.referenceGpa) {
    classes.push(bgColors[2])
  } else if (props.gpa < props.referenceGpa && props.gpa >= gpaFloor) {
    classes.push(bgColors[3]);
  } else if (props.gpa < gpaFloor) {
    classes.push(bgColors[4])
  }

  return classes;
});
</script>

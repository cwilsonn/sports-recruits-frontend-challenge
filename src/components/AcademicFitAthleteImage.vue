<template>
  <div class="overflow-hidden rounded-full w-28 h-28 athlete-image">
    <img class="rounded-full athlete-image__image"
      v-if="imageUrl"
      :src="imageUrl"
      :alt="athleteName">
    <div v-else
      :class="computedAthleteImgFallbackClasses">
      {{ athleteInitials }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  imageUrl: {
    type: String,
    required: false,
  },
  athleteName: {
    type: String,
    required: true,
  },
});

// This is a map between regex patterns and associated colors.
// The regex is used to match the first letter of the athlete's last name.
// We're using the full TailwindCSS arbitrary values for the colors explicitly so they're picked up by PurgeCSS.
const regexTailwindBgColorMap = {
  '^[A-E]': 'bg-[#f1603c]',
  '^[F-I]': 'bg-[#6082fa]',
  '^[J-M]': 'bg-[#827cb8]',
  '^[N-Q]': 'bg-[#0097a4]',
  '^[R-U]': 'bg-[#ffe066]',
  '^[V-Z]': 'bg-[#ffa94d]',
}

// This computed property returns the first matching regex pattern from the map above for the given athlete's last name.
const computedAthleteImgFallbackClasses = computed(() => {
  return Object.keys(regexTailwindBgColorMap).map(key => {
    const regex = new RegExp(key);
    if (regex.test(props.athleteName.split(' ')[1])) {
      return `athlete-image__fallback flex items-center justify-center h-full w-full font-bold text-xl ${regexTailwindBgColorMap[key]}`;
    }
  });
});

const athleteInitials = computed(() => {
  const name = props.athleteName;
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
});
</script>

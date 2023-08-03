import data from '@/assets/data.json';

import { reactive } from 'vue';

import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', () => {
  const state = reactive(data);

  return {
    state,
  };
});

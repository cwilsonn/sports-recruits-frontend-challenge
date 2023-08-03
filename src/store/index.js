import { reactive } from 'vue';

import { defineStore } from 'pinia';

import data from '../assets/data.json';

export const useGlobalStore = defineStore('global', () => {
  const state = reactive(data);

  return {
    state,
  };
});

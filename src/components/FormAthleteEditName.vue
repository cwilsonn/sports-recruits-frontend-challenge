<template>
  <form
    id="athlete-name-form"
    class="flex flex-row items-center gap-x-2"
    @submit.prevent="handleSubmit">
    <label class="sr-only"
      for="athlete-name">Athlete Name</label>
    <input id="athlete-name"
      type="text"
      name="athlete-name"
      class="text-xl font-bold bg-transparent border-b w-min text-brand-primary border-brand-primary"
      v-model="form.name" />
    <button type="submit"
      class="flex p-2 text-white bg-green-500 rounded-lg">
      <span class="sr-only">Save</span>
      <IconUniconsCheck class="w-4 h-4 m-auto text-white" />
    </button>
    <button type="button"
      class="flex p-2 text-black bg-red-500 rounded-lg"
      @click="handleCancel">
      <span class="sr-only">Cancel</span>
      <IconUniconsTimes class="w-4 h-4 m-auto text-white" />
    </button>
  </form>
</template>

<script setup>
import { reactive, onMounted, defineEmits } from 'vue';

import { useGlobalStore } from '@/store';
import IconUniconsCheck from '@/components/IconUniconsCheck.vue';
import IconUniconsTimes from '@/components/IconUniconsTimes.vue';

const { state } = useGlobalStore();

const form = reactive({
  name: '',
});

const emit = defineEmits([
  'cancel-form',
  'submit-form',
]);

const handleSubmit = () => emit('submit-form', form);
const handleCancel = () => emit('cancel-form');

onMounted(() => form.name = state.data[0].name);
</script>

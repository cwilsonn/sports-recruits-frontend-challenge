import { createTestingPinia } from '@pinia/testing';

import { shallowMount } from '@vue/test-utils';

import { useGlobalStore } from '../../src/store';
import AcademicFitTableGPACell from '../../src/components/AcademicFitTableGPACell.vue';

const referenceGpa = 3.5;
const gpaColorMap = {
  3.3: 'bg-[#75ace5]',
  3.4: 'bg-[#a6a8da]',
  3.5: 'bg-[#b4a7d6]',
  3.6: 'bg-[#c194b5]',
  3.7: 'bg-[#d7737d]',
};

describe('AcademicFitTableGPACell', () => {
  it('should display a GPA given a gpa prop', () => {
    const wrapper = shallowMount(AcademicFitTableGPACell, {
      global: {
        plugins: [createTestingPinia()],
      },
      propsData: {
        gpa: 3.5,
      },
    });

    // Override the store for this test
    const { state } = useGlobalStore();
    state.data[0].gpa = referenceGpa;

    expect(wrapper.text()).toContain('3.5');
  });

  it('should display a dynamic background color given a referenceGpa and gpa prop', () => {
    for (const [gpa, bgColor] of Object.entries(gpaColorMap)) {
      const wrapper = shallowMount(AcademicFitTableGPACell, {
        global: {
          plugins: [createTestingPinia()],
        },
        propsData: {
          gpa: +gpa,
        },
      });

      // Override the store for this test
      const { state } = useGlobalStore();
      state.data[0].gpa = referenceGpa;

      // Ensure expected dynamic background color class has been applied
      expect(wrapper.classes()).toContain(bgColor);
    }
  });
});

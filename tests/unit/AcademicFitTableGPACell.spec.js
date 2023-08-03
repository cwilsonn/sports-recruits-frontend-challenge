import { shallowMount, mount } from '@vue/test-utils';

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
      propsData: {
        gpa: 3.5,
        referenceGpa,
      },
    });

    expect(wrapper.text()).toContain('3.5');
  });

  it('should display a dynamic background color given a referenceGpa and gpa prop', () => {
    for (const [gpa, bgColor] of Object.entries(gpaColorMap)) {
      const wrapper = mount(AcademicFitTableGPACell, {
        propsData: {
          gpa: +gpa,
          referenceGpa,
        },
      });

      // Ensure expected dynamic background color class has been applied
      expect(wrapper.classes()).toContain(bgColor);
    }
  });
});

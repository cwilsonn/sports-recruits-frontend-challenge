import { shallowMount } from '@vue/test-utils';

import AcademicFitAthleteImage from '../../src/components/AcademicFitAthleteImage.vue';

describe('AcademicFitAthleteImage', () => {
  it('should display an image given an imageUrl prop', () => {
    const wrapper = shallowMount(AcademicFitAthleteImage, {
      propsData: {
        athleteName: 'Test Athlete',
        imageUrl: 'https://via.placeholder.com/150',
      },
    });

    expect(wrapper.find('img').attributes('src')).toBe('https://via.placeholder.com/150');
  });

  it('should display an image fallback when an imageUrl prop is not present', () => {
    const wrapper = shallowMount(AcademicFitAthleteImage, {
      propsData: {
        athleteName: 'Test Athlete',
      },
    });

    // Ensure an image is not present
    expect(wrapper.find('img').exists()).toBe(false);
    // Ensure the initials are displayed
    expect(wrapper.text()).toContain('TA');
    // Ensure the correct background color is displayed given the first letter of the athlete's last name
    expect(wrapper.find('.athlete-image__fallback').classes()).toContain('bg-[#f1603c]');
  });
});

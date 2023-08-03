import { shallowMount } from '@vue/test-utils';

import AcademicFitAthleteImage from '../../src/components/AcademicFitAthleteImage.vue';

const athleteNameColorMap = {
  'Amanda Athlete': 'bg-[#f1603c]',
  'Freethrow Francis': 'bg-[#6082fa]',
  'Layup Larryson': 'bg-[#827cb8]',
  'Overtime Ollie': 'bg-[#0097a4]',
  'Slamdunk Sally': 'bg-[#ffe066]',
  'Yellowcard Yolanda': 'bg-[#ffa94d]',
}

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
    for (const [athleteName, bgColor] of Object.entries(athleteNameColorMap)) {
      const wrapper = shallowMount(AcademicFitAthleteImage, {
        propsData: {
          athleteName,
        },
      });

      // Ensure an image is not present
      expect(wrapper.find('img').exists()).toBe(false);
      // Ensure the initials are displayed
      expect(wrapper.text()).toContain(athleteName.split(' ').map((name) => name[0]).join(''));
      // Ensure the correct background color is displayed given the first letter of the athlete's last name
      expect(wrapper.find('.athlete-image__fallback').classes()).toContain(bgColor);
    }

    // const wrapper = shallowMount(AcademicFitAthleteImage, {
    //   propsData: {
    //     athleteName: 'Test Athlete',
    //   },
    // });

    // // Ensure an image is not present
    // expect(wrapper.find('img').exists()).toBe(false);
    // // Ensure the initials are displayed
    // expect(wrapper.text()).toContain('TA');
    // // Ensure the correct background color is displayed given the first letter of the athlete's last name
    // expect(wrapper.find('.athlete-image__fallback').classes()).toContain('bg-[#f1603c]');
  });
});

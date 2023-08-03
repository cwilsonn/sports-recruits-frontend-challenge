<template>
  <section class="relative max-w-full overflow-scroll text-xs academic-fit__table-inner">
    <table class="w-full academic-fit__table">
      <thead class="text-center text-white align-middle bg-brand-black">
        <tr>
          <th class="sticky left-0 min-w-[7.5rem] z-10 bg-brand-black"
            rowspan="2">School Name</th>
          <th rowspan="2">Athletic Div</th>
          <th rowspan="2">Conference</th>
          <th rowspan="2">
            Ranking<a aria-describedby="academic-fit-footnotes"
              href="#academic-fit-ranking">*</a><br />
            <span class="font-normal">(DI NCAA)<br />(DII & DIII Hero Sports)</span>
          </th>
          <th colspan="5">GPA <a href="#academic-fit-gpa">**</a></th>
          <th rowspan="2">
            SAT Reading<a aria-describedby="academic-fit-footnotes"
              href="#academic-fit-sat-act">***</a><br />
            25%-75%
          </th>
          <th rowspan="2">
            SAT Math<a aria-describedby="academic-fit-footnotes"
              href="#academic-fit-sat-act">***</a><br />
            25%-75%
          </th>
          <th rowspan="2">
            ACT Composite<a aria-describedby="academic-fit-footnotes"
              href="#academic-fit-sat-act">***</a><br />
            25%-75%
          </th>
        </tr>
        <tr>
          <th>Min</th>
          <th>25%</th>
          <th>50%</th>
          <th>75%</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <AcademicFitTableRow v-for="(row, key) in report"
          :key="key"
          :row="row"
          :is-odd="key % 2 > 0" />
      </tbody>
    </table>
    <footer class="academic-fit__table-footer mt-36 text-[13px]">
      <!-- Accessible footnotes @see: https://www.sitepoint.com/accessible-footnotes-css/ -->
      <h2 id="academic-fit-footnotes"
        class="sr-only">Footnotes</h2>
      <ul class="list-none">
        <li id="academic-fit-ranking"
          class="target:bg-yellow-400">
          <span class="align-text-top">*</span>Rankings for Division I schools based on NCAA data (www.ncaa.com) and
          rankings for Division II & III schools are based on data from Hero Sports (www.herosports.com/rankings)
        </li>
        <li id="academic-fit-gpa"
          class="target:bg-yellow-400">
          <span class="align-text-top">**</span>GPA is based on SportsRecruits members who have shown interest in
          (favorited) the school and have provided their GPA on their profile
        </li>
        <li id="academic-fit-sat-act"
          class="target:bg-yellow-400">
          <span class="align-text-top">***</span>SAT and ACT scores based on national data provided by the National Center
          of Education Statistics- https://nces.ed.gov/ipeds/
        </li>
      </ul>
    </footer>
  </section>
</template>

<script setup>
import AcademicFitTableRow from './AcademicFitTableRow.vue';

defineProps({
  report: {
    type: Object,
    required: true,
  },
});
</script>

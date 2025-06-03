<template>
  <q-page>
    <HeaderComponent />
    <AboutPage />
    <SpecialitiesPage />
    <HistoryComponent />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'src/components/HeaderComponent/HeaderComponent.vue';
import AboutPage from './AboutPage/AboutPage.vue';
import SpecialitiesPage from './SpecialtiesPage/SpecialtiesPage.vue';
import HistoryComponent from 'src/components/HistoryComponent/HistoryComponent.vue';
import FooterComponent from 'src/components/FooterComponent/FooterComponent.vue';
export default {
  name: 'AboutUsPage',
  components: {
    HeaderComponent,
    AboutPage,
    SpecialitiesPage,
    HistoryComponent,
    FooterComponent,
  },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<template>
  <q-page>
    <HeaderComponent />
    <AboutPage />
    <SpecialitiesPage />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'src/components/HeaderComponent/HeaderComponent.vue';
import AboutPage from 'src/pages/AboutPage/AboutPage.vue';
import SpecialitiesPage from 'src/pages/SpecialitiesPage/SpecialitiesPage.vue';
import FooterComponent from 'src/components/FooterComponent/FooterComponent.vue';
export default {
  name: 'LandingPage',
  components: {
    HeaderComponent,
    AboutPage,
    SpecialitiesPage,
    FooterComponent,
  },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
};
</script>

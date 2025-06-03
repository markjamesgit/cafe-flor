<template>
  <q-page>
    <HeaderComponent />
    <HeroSectionPage />
    <OurPassionPage />
    <BaristaPremiumPage />
    <OurGalleryPage />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'src/components/HeaderComponent/HeaderComponent.vue';
import HeroSectionPage from 'src/pages/HeroSectionPage/HeroSectionPage.vue';
import OurPassionPage from 'src/pages/OurPassionPage/OurPassionPage.vue';
import BaristaPremiumPage from 'src/pages/BaristaPremiumPage/BaristaPremiumPage.vue';
import OurGalleryPage from 'src/pages/OurGalleryPage/OurGalleryPage.vue';
import FooterComponent from 'src/components/FooterComponent/FooterComponent.vue';
export default {
  name: 'LandingPage',
  components: {
    HeaderComponent,
    HeroSectionPage,
    OurPassionPage,
    BaristaPremiumPage,
    OurGalleryPage,
    FooterComponent,
  },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
};
</script>

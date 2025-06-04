<template>
  <q-page>
    <HeaderComponent />
    <HeroSectionPage />
    <OurPassionPage />
    <BaristaPremiumPage />
    <OurGalleryPage />
    <HistoryComponent />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'src/components/HeaderComponent/HeaderComponent.vue';
import HeroSectionPage from './HeroSectionPage/HeroSectionPage.vue';
import OurPassionPage from './OurPassionPage/OurPassionPage.vue';
import BaristaPremiumPage from './BaristaPremiumPage/BaristaPremiumPage.vue';
import OurGalleryPage from './OurGalleryPage/OurGalleryPage.vue';
import HistoryComponent from 'src/components/HistoryComponent/HistoryComponent.vue';
import FooterComponent from 'src/components/FooterComponent/FooterComponent.vue';
export default {
  name: 'LandingPage',
  components: {
    HeaderComponent,
    HeroSectionPage,
    OurPassionPage,
    BaristaPremiumPage,
    OurGalleryPage,
    HistoryComponent,
    FooterComponent,
  },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
};
</script>

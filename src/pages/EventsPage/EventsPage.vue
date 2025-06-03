<template>
  <q-page>
    <HeaderComponent />
    <OurEventsPage />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'src/components/HeaderComponent/HeaderComponent.vue';
import OurEventsPage from './OurEventsPage/OurEventsPage.vue';
import FooterComponent from 'src/components/FooterComponent/FooterComponent.vue';
export default {
  name: 'EventsPage',
  components: { HeaderComponent, OurEventsPage, FooterComponent },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
};
</script>

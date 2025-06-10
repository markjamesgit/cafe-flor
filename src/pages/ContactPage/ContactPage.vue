<template>
  <q-page>
    <HeaderComponent />
    <ContactFormPage />
    <HistoryComponent />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'src/components/HeaderComponent/HeaderComponent.vue';
import ContactFormPage from './ContactFormPage/ContactFormPage.vue';
import HistoryComponent from 'src/components/HistoryComponent/HistoryComponent.vue';
import FooterComponent from 'src/components/FooterComponent/FooterComponent.vue';
export default {
  name: 'ContactPage',
  components: { HeaderComponent, ContactFormPage, HistoryComponent, FooterComponent },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
};
</script>

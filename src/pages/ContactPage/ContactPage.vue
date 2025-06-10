<template>
  <q-page>
    <HeaderComponent />
    <ContactFormPage />
    <FooterComponent />
  </q-page>
</template>

<script lang="ts">
import HeaderComponent from 'src/components/HeaderComponent/HeaderComponent.vue';
import ContactFormPage from './ContactFormPage/ContactFormPage.vue';
import FooterComponent from 'src/components/FooterComponent/FooterComponent.vue';
export default {
  name: 'ContactPage',
  components: { HeaderComponent, ContactFormPage, FooterComponent },
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<template>
  <q-page class="flex flex-center">
    <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 30vh">404</div>

        <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<template>
  <div class="history-container">
    <div class="history-content">
      <!-- Left Section -->
      <div class="history-left">
        <div class="content">
          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            class="history-title"
          >
            HISTORY
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            class="history-description"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button
            data-aos="fade"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            class="read-more-btn"
          >
            Read More
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div class="history-right">
        <img
          data-aos="fade"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          src="../../assets/background-images/history1.png"
          alt="Cafe History"
          class="history-image"
        />
      </div>

      <!-- Overlay Image -->
      <div class="overlay-image-container">
        <img
          data-aos="zoom-out"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          src="../../assets/logo/established-logo.png"
          alt="History Overlay"
          class="overlay-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HistoryComponent',
};
</script>
<style lang="scss" scoped>
@import './HistoryComponent.scss';
</style>

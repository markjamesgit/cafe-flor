<template>
  <div class="our-passion-container">
    <div class="background-images">
      <img
        src="../../../assets/icons/steak.png"
        alt="Background decoration 2"
        class="bg-image bg-image-2"
      />
    </div>

    <div class="container">
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        class="first-section"
      >
        <p>OUR SPECIALTIES</p>
        <div class="horizontal-line"></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        class="second-section"
      >
        <img src="../../../assets/background-images/special1.png" alt="" />
        <img src="../../../assets/background-images/special2.png" alt="" />
        <img src="../../../assets/background-images/special3.png" alt="" />
        <img src="../../../assets/background-images/special4.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SpecialtiesPage',
};
</script>
<style lang="scss" scoped>
@import './SpecialtiesPage.scss';
</style>

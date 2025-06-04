<template>
  <div class="our-passion-container">
    <div class="background-images">
      <img
        src="../../../assets/icons/pastry.png"
        alt="Background decoration 1"
        class="bg-image bg-image-1"
      />
      <img
        src="../../../assets/icons/brew.png"
        alt="Background decoration 2"
        class="bg-image bg-image-2"
      />
      <img
        src="../../../assets/icons/splash1.png"
        alt="Background decoration 3"
        class="bg-image bg-image-3"
      />
      <img
        src="../../../assets/icons/splash3.png"
        alt="Background decoration 4"
        class="bg-image bg-image-4"
      />
    </div>
    <div class="left-section">
      <div class="image-overlay-container">
        <img
          src="../../../assets/background-images/our-passion-bg1.png"
          alt="Espresso Machine"
          class="main-image"
        />
        <h1 class="title overlay">OUR PASSIONS</h1>
      </div>
      <p class="description">
        A story brewed with passion, poured with purpose, and served with heart. We're more than
        just a place to grab your morning coffee or unwind with an evening drink; we're a
        destination where comfort meets craft. By day, the rich aroma of freshly ground beans
        welcomes you into a space of calm focus and warm connection. By night, the café transforms,
        glowing with ambient energy as curated cocktails and good conversation flow freely.
      </p>
    </div>
    <div class="right-section">
      <div class="sip-blooms">
        <h2>Where every sip blooms.</h2>
        <p>
          Step into a place where flavor blossoms with every pour. From aromatic coffees to crafted
          cocktails, each sip is a moment of beauty waiting to unfold. Welcome to Cafe Flor + Bar
        </p>
      </div>
      <div class="pastry-image-container">
        <img
          src="../../../assets/background-images/our-passion-bg2.png"
          alt="Pastry and Coffee"
          class="pastry-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'OurPassionPage',
};
</script>

<style lang="scss" scoped>
@import './OurPassionPage.scss';
</style>

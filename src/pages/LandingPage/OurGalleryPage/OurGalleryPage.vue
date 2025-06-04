<template>
  <div class="gallery-page">
    <div class="gallery-header">
      <span class="gallery-our">Our</span>
      <span class="gallery-title">GALLERY</span>
    </div>
    <div class="gallery-carousel">
      <button class="gallery-arrow left" @click="prev" :disabled="currentIndex === 0">&#60;</button>
      <div class="gallery-images-viewport">
        <div
          class="gallery-images"
          :style="{ transform: `translateX(-${currentIndex * (100 / imagesToShow)}%)` }"
        >
          <img
            v-for="(img, idx) in images"
            :key="idx"
            :src="img"
            :alt="`Gallery ${idx + 1}`"
            :class="{ active: idx >= currentIndex && idx < currentIndex + imagesToShow }"
          />
        </div>
      </div>
      <button
        class="gallery-arrow right"
        @click="next"
        :disabled="currentIndex >= images.length - imagesToShow"
      >
        &#62;
      </button>
    </div>
    <div class="gallery-instagram">
      <span class="ig-icon">&#x1F4F7;</span>
      <span class="ig-handle">@cafeflor+bar</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import gallery1 from '../../../assets/background-images/gallery1.png';
import gallery2 from '../../../assets/background-images/gallery2.png';
import gallery3 from '../../../assets/background-images/gallery3.png';
import gallery4 from '../../../assets/background-images/gallery4.png';

const images = [
  gallery1,
  gallery1,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  // Add more images as needed
];

const imagesToShow = ref(4);
if (window.innerWidth < 900) imagesToShow.value = 2;

const currentIndex = ref(0);

const next = () => {
  if (currentIndex.value < images.length - imagesToShow.value) {
    currentIndex.value++;
  }
};
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>
<style lang="scss" scoped>
@import './OurGalleryPage.scss';
</style>

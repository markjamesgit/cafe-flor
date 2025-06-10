<template>
  <header class="header">
    <!-- Burger Menu (Mobile Only) -->
    <button class="burger" @click="toggleMenu" aria-label="Open navigation" v-if="isMobile">
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
      <span :class="{ open: menuOpen }"></span>
    </button>

    <!-- Mobile Nav Drawer -->
    <transition name="slide">
      <nav class="mobile-nav" v-if="menuOpen && isMobile">
        <router-link to="/" class="nav-item" exact-active-class="active" exact @click="closeMenu"
          >HOME</router-link
        >
        <router-link to="/about" class="nav-item" active-class="active" @click="closeMenu"
          >ABOUT US</router-link
        >
        <router-link to="/contact" class="nav-item" active-class="active" @click="closeMenu"
          >CONTACT US</router-link
        >
        <router-link to="/events" class="nav-item" active-class="active" @click="closeMenu"
          >EVENTS</router-link
        >
        <div class="mobile-social">
          <a href="https://www.facebook.com/cafeflorandbar" target="_blank" class="social-icon">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/cafeflorplusbar" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" class="social-icon">
            <i class="fab fa-tiktok"></i>
          </a>
        </div>
        <div class="mobile-contact">
          <span>0900 - 863 - 2739</span>
        </div>
      </nav>
    </transition>

    <!-- Desktop Navigation (hidden on mobile) -->
    <nav class="nav-links" v-if="!isMobile">
      <router-link to="/" class="nav-item" exact-active-class="active" exact>HOME</router-link>
      <router-link to="/about" class="nav-item" active-class="active">ABOUT US</router-link>
      <router-link to="/contact" class="nav-item" active-class="active">CONTACT US</router-link>
      <router-link to="/events" class="nav-item" active-class="active">EVENTS</router-link>
    </nav>

    <!-- Logo (right on mobile, center on desktop) -->
    <div class="logo-container">
      <img src="../../assets/logo/cafe-flor-logo.png" alt="Cafe Flor Logo" class="logo" />
    </div>

    <!-- Right Section (hidden on mobile) -->
    <div class="right-section" v-if="!isMobile">
      <div class="social-links">
        <a href="https://www.facebook.com/cafeflorandbar" target="_blank" class="social-icon">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/cafeflorplusbar" target="_blank" class="social-icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" class="social-icon">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
      <div class="contact-info">
        <span>0900 - 863 - 2739</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'HeaderComponent',
  setup() {
    const menuOpen = ref(false);
    const isMobile = ref(window.innerWidth <= 1023);

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 1023;
      if (!isMobile.value) menuOpen.value = false;
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    return { menuOpen, isMobile, toggleMenu, closeMenu };
  },
};
</script>

<style lang="scss" scoped>
@import './HeaderComponent.scss';
</style>

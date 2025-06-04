<template>
  <header class="header">
    <!-- Left Navigation -->
    <nav class="nav-links">
      <router-link to="/" class="nav-item" exact-active-class="active" exact>HOME</router-link>
      <router-link to="/about" class="nav-item" active-class="active">ABOUT US</router-link>
      <router-link to="/contact" class="nav-item" active-class="active">CONTACT US</router-link>
      <router-link to="/events" class="nav-item" active-class="active">EVENTS</router-link>
    </nav>

    <!-- Center Logo -->
    <div class="logo-container">
      <img src="../../assets/logo/cafe-flor-logo.png" alt="Cafe Flor Logo" class="logo" />
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <!-- Social Media Links -->
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
      <!-- Contact Info -->
      <div class="contact-info">
        <span>0900 - 863 - 2739</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss" scoped>
@import './HeaderComponent.scss';
</style>

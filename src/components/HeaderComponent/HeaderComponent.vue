<template>
  <header class="header">
    <!-- Left Navigation -->
    <nav class="nav-links">
      <a href="/" class="nav-item">HOME</a>
      <a href="/about" class="nav-item">ABOUT US</a>
      <a href="/contact" class="nav-item">CONTACT US</a>
      <a href="/events" class="nav-item">EVENTS</a>
    </nav>

    <!-- Center Logo -->
    <div class="logo-container">
      <img src="../../assets/logo/cafe-flor-logo.png" alt="Cafe Flor Logo" class="logo" />
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <!-- Social Media Links -->
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" class="social-icon">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="social-icon">
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

<template>
  <div>
    <footer class="footer-container">
      <div class="footer-content">
        <div class="footer-box">
          <span class="footer-label">OPENING HOURS</span>
          <span class="footer-value">2:00 PM TO 12:00 MN</span>
        </div>
        <div class="footer-box">
          <span class="footer-label">STORE BRANCH LOCATION</span>
          <span class="footer-value">SAN PEDRO, HAGONOY, BULACAN</span>
        </div>
        <div class="footer-box">
          <span class="footer-label">FOLLOW US ON</span>
          <div class="footer-socials">
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
        </div>
      </div>
    </footer>
    <div class="footer-copyright">
      Copyright © {{ currentYear }} Cafe Flor + Bar. All Rights Reserved.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
  computed: {
    currentYear(): number {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
@import './FooterComponent.scss';
</style>

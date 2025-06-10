<template>
  <div class="main-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Find Us</h1>
        <p class="hero-subtitle">CONTACT</p>
      </div>
    </div>

    <div class="container">
      <div class="left-section">
        <h5 class="title">OPENNING HOURS</h5>
        <div class="rows">
          <div class="data-row">
            <p>Working Days</p>
            <p>10:00 am to 12:00 mn</p>
          </div>
          <div class="data-row">
            <p>Saturday</p>
            <p>10:00 am to 12:00 mn</p>
          </div>
          <div class="data-row">
            <p>Sunday</p>
            <p>11:00 am to 12:00 mn</p>
          </div>
        </div>
        <div class="bottom-row">
          <div class="address">
            <p class="label">ADDRESS</p>
            <p class="value">7885 Purok 4, Barangay San Pedro, Hagonoy, Philippines</p>
          </div>
          <div class="contact">
            <p class="label">CUSTOMER SUPPORT</p>
            <p class="value">0900 - 863 - 2739</p>
          </div>
        </div>
      </div>
      <div class="right-section">
        <div class="form card">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input id="subject" type="text" placeholder="Subject" />
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" placeholder="Type your message"></textarea>
          </div>
          <button class="btn">Send Message</button>
        </div>
      </div>
    </div>
    <div class="map-container">
      <iframe
        width="100%"
        height="600"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=7885+Purok+4,+Barangay+San+Pedro,+Hagonoy,+Philippines&output=embed"
      >
      </iframe>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactFormPage',
};
</script>
<style lang="scss" scoped>
@import './ContactFormPage.scss';
</style>

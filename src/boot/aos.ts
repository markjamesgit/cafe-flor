// src/boot/aos.ts
import { boot } from 'quasar/wrappers';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default boot(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});

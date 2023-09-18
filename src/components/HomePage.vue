<template>
  <hero-section :is-dark="isDark" />
  <about-section :is-dark="isDark" />
  <experience-section :is-dark="isDark"/>
  <portfolio-section :is-dark="isDark" />
  <blog-section :is-dark="isDark" />
</template>

<script>
import HeroSection from './sections/HeroSection.vue';
import AboutSection from './sections/AboutSection.vue';
import ExperienceSection from './sections/ExperienceSection.vue';
import PortfolioSection from "./sections/PortfolioSection.vue";
import BlogSection from './sections/BlogSection.vue';

export default {
    name: 'HomePage',
    props: ['isDark'],
    components: {
      HeroSection,
      AboutSection,
      ExperienceSection,
      PortfolioSection,
      BlogSection,
    },
};
</script>
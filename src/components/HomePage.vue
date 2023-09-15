<template>
  <hero-section :is-dark="isDark" />
  <about-section :is-dark="isDark" />
  <experience-section :is-dark="isDark"/>
  <portfolio-section :is-dark="isDark" />
</template>

<script>
import HeroSection from './home/HeroSection.vue';
import AboutSection from './home/AboutSection.vue';
import ExperienceSection from './home/ExperienceSection.vue';
import PortfolioSection from "./home/PortfolioSection.vue";

export default {
    name: 'HomePage',
    props: ['isDark'],
    components: {
      HeroSection,
      AboutSection,
      ExperienceSection,
      PortfolioSection,
    },
};
</script>

<style scoped>

</style>
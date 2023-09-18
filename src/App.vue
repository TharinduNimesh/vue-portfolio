<template>
  <div class="cursor-default duration-300">
    <loading-screen :is-dark="isDark" :is-loading="isLoading" />
    <home-header :is-dark="isDark" :show-background="headerBackground" />
    <main
      class="bg-repeat-y lg:bg-contain duration-300"
      :style="`background-image: url(/img/projects-bg-${theme}.png);`"
    >
      <home-page :is-dark="isDark" />
    </main>

    <toggle-theme :is-dark="isDark" @changeTheme="setTheme" />
  </div>
</template>

<script>
// Components
import HomeHeader from "./components/home/HomeHeader.vue";
import ToggleTheme from "./components/ToggleTheme.vue";
import HomePage from "./components/HomePage.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  name: "App",
  components: {
    HomeHeader,
    ToggleTheme,
    HomePage,
    LoadingScreen,
  },
  data() {
    return {
      isDark: false,
      isLoading: true,
      headerBackground: false,
    };
  },
  beforeMount() {
    const theme = localStorage.getItem("theme");
    this.isDark = theme === "dark" ? true : false;
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    window.addEventListener("scroll", this.setHeaderBackground);
  },
  methods: {
    setHeaderBackground(e) {
      this.headerBackground = window.scrollY > 100 ? true : false;
    },
    setTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
    },
  },
  computed: {
    theme() {
      return this.isDark ? "dark" : "light";
    },
  },
};
</script>
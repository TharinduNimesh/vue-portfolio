<template>
  <div class="py-3 px-5 fixed w-full z-40">
    <header
      class="w-full h-16 rounded-xl flex justify-between items-center px-5 duration-300 backdrop-blur-md"
      :class="{
        'bg-dark shadow-slate-700': isDark && showBackground,
        'bg-light': !isDark && showBackground,
        'shadow-md ' : showBackground,
      }"
    >
      <my-logo :isDark="isDark"/>
      <nav class="p-0 m-0 hidden lg:flex justify-center">
        <nav-item
          v-for="(item, index) in items"
          :key="item.name"
          :name="item.name"
          :path="item.path"
          :isDark="isDark"
          :isActive="index === activePage"
        />
      </nav>
      <div class="hidden md:flex">
        <social-media link="#" file="facebook.png" />
        <social-media link="#" file="github.png" />
        <social-media link="#" file="linkedin.png" />
        <social-media link="#" file="youtube.png" />
      </div>
    </header>
  </div>
</template>

<script>
// Components
import NavItem from "./NavItem.vue";
import MyLogo from "../MyLogo.vue";
import SocialMedia from "./SocialMedia.vue";

export default {
  name: "HomeHeader",
  props: ["isDark", "scrollTop", "showBackground"],
  components: {
    NavItem,
    MyLogo,
    SocialMedia,
  },
  data() {
    return {
      activePage: 0,
      items: [
        {
          path: "#",
          name: "Home",
        },
        {
          path: "#",
          name: "About",
        },
        {
          path: '#',
          name: 'Experience'
        },
        {
          path: '#',
          name: 'Portfolio'
        },
        {
          path: "#",
          name: "Blog",
        },
        {
          path: "#",
          name: "Contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: rgba(3, 7, 18, 0.6);
}

.bg-light {
  background-color: rgba(233, 239, 245, 0.6);
}
</style>
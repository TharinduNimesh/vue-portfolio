<template>
  <div
    class="fixed shadow-md"
    :class="{
      'bg-slate-900 shadow-gray-700': isDark,
      'bg-slate-200': !isDark,
    }"
  >
    <div class="toggle cursor-pointer" @click="$emit('changeTheme')">
      <div
        class="img w-full h-full duration-300"
        :class="{
          light: !isDark,
          dark: isDark,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleTheme",
  props: ["isDark"],
};
</script>

<style scoped>
.fixed {
  width: 80px;
  height: 60px;
  top: 120px;
  right: 0;
  border-radius: 30px 0 0 30px;
  padding: 5px;
}

.toggle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  padding: 2px;
  transition: padding 0.2s ease-in-out;
}

.toggle:hover .img {
  transform: rotate(360deg);
}

.img {
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.dark {
  background-image: url("/img/dark-theme.png");
}

.light {
  background-image: url("/img/light-theme.png");
}
</style>
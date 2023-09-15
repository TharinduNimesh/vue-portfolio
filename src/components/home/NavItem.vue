<template>
  <a
    :href="path"
    class="mx-5 duration-300 cursor-pointer"
    :class="{
      'text-gray-600': !isDark,
      'text-slate-300': isDark,
      active: isActive,
    }"
    >{{ name }}</a
  >
</template>

<script>
export default {
  name: "NavItem",
  props: ["path", "name", "isDark", "isActive"],
};
</script>

<style scoped>
a {
  position: relative;
  font-size: 14px;
  transform-origin: left;
  padding: 0 10px;
  font-weight: 500;
}

a::before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease-in-out;
  transform-origin: left;
}

a:hover::before,
.active::before {
  width: 100%;
}

.active {
  transition: all 0.3s ease-in-out;
  font-weight: 600;
}

a:hover,
.active {
  color: var(--primary);
}
</style>
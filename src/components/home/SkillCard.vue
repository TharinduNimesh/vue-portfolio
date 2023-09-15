<template>
  <div
    class="w-80 h-full p-5 rounded-lg shadow-md backdrop-blur duration-300 hover:-translate-y-4 hover:shadow-lg"
    :class="{
      'bg-dark hover:!bg-slate-950': isDark,
      'bg-light hover:!bg-slate-50': !isDark,
    }"
  >
    <div class="w-full p-3 flex flex-col items-center">
      <div
        class="w-14 h-14 bg-blue-400 rounded flex justify-center items-center p-3">
        <div 
          class="w-full h-full bg-cover bg-center duration-300" 
          :style="`background-image: url('/img/skill/${image}-${theme}.png');`"
        ></div>
      </div>
      <h2 class="text-lg font-bold font-monteserrat mt-5 text-primary uppercase text-center">
        {{ skill }}
      </h2>
      <p
        class="text-center font-monteserrat-alt mt-3 duration-300"
        :class="{
          'text-white': isDark,
        }"
      >
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["isDark", "skill", "image"],
  computed: {
    theme() {
      return this.isDark ? "dark" : "light";
    },
  },
};
</script>

<style scoped>
.bg-light {
  background-color: #f5f8ffb4;
}

.bg-dark {
  background-color: #1f232cb4;
}
</style>
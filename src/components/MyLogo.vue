<template>
  <div class="flex gap-5 h-12">
    <div class="w-12 h-100 p-1 bg-gray-950 rounded-full">
      <img src="/img/logo.png" class="h-full object-cover" />
    </div>
    <h2 
      class="text-xl font-bold self-center duration-300"
      :class="{
        'text-white': isDark,
        'text-black': !isDark,
      }"
    >Tharindu</h2>
  </div>
</template>

<script>
export default {
  name: "MyLogo",
  props: ["isDark"],
};
</script>

<style>
</style>
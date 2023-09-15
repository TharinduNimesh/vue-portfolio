<template>
  <a :href="link" class="cursor-pointer">
    <img
      :src="`/img/social/${file}`"
      class="grayscale hover:filter-none duration-300 w-8 hover:-translate-y-2 hover:scale-110 mx-1"
    />
  </a>
</template>

<script>
export default {
  name: "SocialIcons",
  props: ["link", "file"],
};
</script>
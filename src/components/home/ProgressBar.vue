<template>
  <div class="w-full mt-5 duration-300">
    <p 
        class="ml-4 font-monteserrat-alt text-sm duration-300"
        :class="{
            'text-white': isDark,
        }"    
    >{{ name }}</p>
    <div
      class="w-full h-5 rounded-xl duration-300"
      :class="{
        'bg-black': isDark,
        'bg-white': !isDark,
      }"
    >
      <div
        class="relative h-full rounded-xl "
        :style="`width: ${percentage}%; background-image: var(--primary-gradient);`"
      >
        <span 
            class="absolute -right-3 -top-full duration-300"
            :class="{
                'text-white': isDark,
            }">
            {{ percentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["isDark", "percentage", "name"],
};
</script>

<style scoped>
</style>
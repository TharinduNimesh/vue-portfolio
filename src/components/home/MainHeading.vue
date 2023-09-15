<template>
  <div class="py-3 mb-10 h-fit w-full">
    <div 
        class="px-10 relative h-fit w-fit"
        :class="{
            'text-gray-800': !isDark,
            'text-white': isDark,
        }"
    >
      <div class="main-heading duration-300">
        {{ mainHeading }}
      </div>
      <div class="sub-heading duration-300">
        {{ subHeading }} <span class="text-primary">{{ lastSymbol }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeading",
  props: ["isDark", "mainHeading", "subHeading", "lastSymbol"],
};
</script>

<style scoped>
.main-heading {
  font-size: 54px;
  font-weight: 800;
  opacity: 0.2;
  position: relative;
  text-transform: uppercase;
}

.sub-heading {
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  right: 0;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .main-heading {
    font-size: 62px;
  }

  .sub-heading {
    font-size: 34px;
  }
}
</style>
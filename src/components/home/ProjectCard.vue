<template>
  <div
    class="card w-96  flex flex-col rounded-lg shadow-md backdrop-blur duration-300 hover:shadow-xl"
    :class="{
      'bg-dark hover:!bg-slate-950': isDark,
      'bg-light hover:!bg-slate-50': !isDark,
    }"
  >
    <div class="w-100 h-60 rounded overflow-hidden">
      <img
        :src="`/img/projects/${image}`"
        class="duration-300 object-cover"
      />
    </div>
    <div
      class="w-100 p-4"
      :class="{
        'text-white': isDark,
      }"
    >
      <h2 class="text-xl font-bold font-monteserrat">
        {{ title }}
      </h2>
      <div class="flex flex-wrap gap-3">
        <span
          class="text-sm font-bold px-2 py-1 bg-blue-400 rounded"
          v-for="technology in technologies"
          :key="technology"
          >{{ technology }}</span
        >
      </div>
      <p class="font-monteserrat-alt my-3">
        <slot></slot>
      </p>
      <div class="w-100 flex justify-center mt-7">
        <a
          :href="reference"
          class="px-4 py-2 rounded duration-300 shadow-md hover:shadow-lg hover:-translate-y-2 cursor-pointer"
          :class="{
            'bg-gray-800 text-white': !isDark,
            'bg-gray-900 text-slate-100': isDark,
            'opacity-60 hover:transform-none !cursor-grab': disabled,
          }"
          >{{ button }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    'isDark' : Boolean,
    'title' : String,
    'reference' : String,
    'technologies' : Array,
    'button': {
      type: String,
      default: "Learn More",
    },
    'image': String,
    'disabled': {
      Boolean,
      default: false,
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

.card:hover img {
  transform: rotate(5deg) scale(1.2);
}

</style>

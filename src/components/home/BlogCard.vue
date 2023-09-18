<template>
  <div
    class="root relative w-full md:w-11/12 lg:w-4/5 flex justify-center lg:flex-col lg:mt-0 py-5 lg:h-80 rounded-lg mt-20 lg:left-6 shadow-md duration-300 backdrop-blur-md hover:shadow-lg hover:-translate-y-2"
    :class="{
      'bg-dark hover:!bg-gray-950': isDark,
      'bg-light hover:!bg-slate-50': !isDark,
    }"
  >
    <div
      class="-top-20 absolute w-3/4 md:w-1/2 h-60 lg:top-10 lg:w-2/5 xl:w-1/4 lg:-left-12 rounded-lg"
    >
      <img
        :src="`/img/blogs/${image}`"
        alt="blog image"
        class="w-full h-full object-cover rounded-lg duration-300 blog-img"
      />
    </div>
    <div
      class="flex flex-col mt-44 lg:mt-0 px-7 text-center content lg:text-left"
    >
      <div>
        <p class="font-bold text-gray-500">{{ publishedAt }}</p>
        <h2
          class="text-xl font-bold font-monteserrat duration-300"
          :class="{
            'text-white': isDark,
          }"
        >
          {{ title }}
        </h2>
        <p
          class="font-monteserrat-alt mt-2 duration-300"
          :class="{
            'text-gray-400': isDark,
            'text-gray-600': !isDark,
          }"
        >
          <slot></slot>
          <span class="text-primary text-lg font-bold">...</span>
        </p>
        <div class="flex justify-center mt-5">
          <primary-button text="Read More" :is-dark="isDark" class="lg:mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "../PrimaryButton.vue";

export default {
  name: "BlogCard",
  props: ["isDark", "publishedAt", "title", "image"],
  components: {
    PrimaryButton,
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
.root:hover .blog-img {
  transform: scale(1.1);
}

@media (min-width: 1024px) {
  .content {
    margin-left: calc(40% - 3rem);
  }
}

@media (min-width: 1280px) {
  .content {
    width: 70%;
    margin-left: calc(25% - 1rem);
  }
}
</style>
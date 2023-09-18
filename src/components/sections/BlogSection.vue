<template>
  <section>
    <main-heading
      main-heading="Insights"
      sub-heading="My Articles"
      last-symbol="."
      :is-dark="isDark"
    />
    <div class="flex flex-col gap-y-7 items-center px-5 lg:px-10">
      <blog-card
        :is-dark="isDark"
        title="How To Get Started In Web Development"
        image="blog-3.jpg"
        published-at="03 October 2023"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex id
        quam quod labore cupiditate.
      </blog-card>

      <blog-card
        :is-dark="isDark"
        title="Why Your Business Should Have A Website"
        image="blog-2.avif"
        published-at="18 September 2023"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex id
        quam quod labore cupiditate.
      </blog-card>

      <blog-card
        :is-dark="isDark"
        title="My Experience In Software Engineering"
        image="blog-1.png"
        published-at="13 September 2023"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex id
        quam quod labore cupiditate.
      </blog-card>
    </div>
  </section>
</template>

<script>
import MainHeading from "../home/MainHeading.vue";
import BlogCard from "../home/BlogCard.vue";

export default {
  name: "BlogSection",
  props: ["isDark"],
  components: {
    MainHeading,
    BlogCard,
  },
};
</script>

<style>
</style>
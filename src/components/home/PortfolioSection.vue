<template>
  <section
    class="snap-start bg-cover bg-left-bottom duration-300 flex flex-col"
    :style="`background-image: url('/img/projects-bg-${theme}.png');`"
  >
    <main-heading
      :is-dark="isDark"
      main-heading="Portfolio"
      sub-heading="What Have I Done "
      last-symbol="?"
    />
    <div class="flex flex-wrap">
      <div
        class="w-full lg:w-1/2 px-4 md:px-10 lg:px-16 order-2 lg:order-1 duration-300"
        :class="{
          'text-white': isDark,
        }"
      >
        <p class="font-monteserrat-alt">
          <span class="text-2xl font-bold text-primary">M</span>y digital
          journey spans across the vast spectrum of technology, where I've
          sculpted innovation into every project. With a rich tapestry of
          experience in web development, cross-platform mobile applications, and
          desktop solutions, I've transformed ideas into reality.
        </p>
        <p class="mt-3 underline-primary font-monteserrat-alt">
          The diversity of my portfolio speaks for itself. It encompasses web
          solutions that gracefully traverse screens, mobile applications that
          engage users on multiple platforms, and desktop applications built for
          intuitive experiences. These projects embody the fusion of code and
          creativity, resulting in solutions that transcend the ordinary.
        </p>
        <p class="mt-5 italic font-monteserrat-alt">
          You're invited to explore my ever-growing repository of digital
          creations, each one a unique testament to the art of software
          development. Join me on this voyage of innovation, where technology
          and imagination converge to shape the digital world.
        </p>
        <div class="w-full flex justify-center">
            <primary-button text="Visit My Github" class="mt-5" :is-dark="isDark" />
        </div>
      </div>
      <div class="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
        <img src="/img/portfolio-man.png" class="w-2/3 primary-bounce" />
      </div>
    </div>
  </section>
</template>

<script>
import MainHeading from "./MainHeading.vue";
import PrimaryButton from "../PrimaryButton.vue";

export default {
  name: "PortfolioSection",
  props: ["isDark"],
  components: {
    MainHeading,
    PrimaryButton,
  },
  computed: {
    theme() {
      return this.isDark ? "dark" : "light";
    },
  },
};
</script>

<style scoped>
.primary-bounce {
  width: 66%;
  max-width: 500px;
  height: auto;
}
</style>
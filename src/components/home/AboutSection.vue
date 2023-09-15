<template>
  <section class="snap-start bg-cover bg-center duration-300 flex flex-col">
    <main-heading
      main-heading="About"
      sub-heading="Who Am I "
      last-symbol="?"
      :is-dark="isDark"
    />
    <div class="flex px-5">
      <div class="w-1/2 justify-center items-center hidden lg:flex">
        <img src="/img/man.png" class="man " />
      </div>
      <div
        class="w-full lg:w-1/2 h-100 blue-line px-5 duration-300"
        :class="{
          'text-white': isDark,
        }"
      >
        <p class="mb-5 font-monteserrat">
          I'm <strong class="text-primary font-monteserrat-alt">Tharindu Nimesh</strong>, a
          passionate student at the
          <a 
            href="https://javainstitute.edu.lk"
            class="underline text-blue-500 cursor-pointer"
          > Java Institute For Advanced Technology (JIAT) </a> based in Sri Lanka. My
          tech journey has been an exciting adventure, driven by my fascination
          with web development, especially backend work. This intrigue led me
          into the intricate world of coding, where I've honed skills in
          programming languages, databases, and server-side scripting during my
          time at JIAT. My passion lies in crafting robust, efficient, and
          secure web applications, whether it's creating scalable APIs,
          optimizing databases, or solving complex server issues. I'm eager to
          continue growing as a backend developer, contributing to the
          ever-evolving web technology landscape.
        </p>

        <p class="mb-5 font-monteserrat">
          Beyond code, I love exploring new programming paradigms, staying
          updated with tech blogs, and collaborating with peers on innovative
          projects. I strongly believe in technology's power to shape the
          future, and I'm excited to be part of this dynamic field. Please
          explore my portfolio and reach out to discuss potential collaborations
          on cutting-edge web solutions. Together, let's code the future!
        </p>
        <div class="flex justify-center mt-5">
          <primary-button text="Contact Me" :is-dark="isDark" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainHeading from "./MainHeading.vue";
import PrimaryButton from "../PrimaryButton.vue";

export default {
  name: "AboutSection",
  props: ["isDark"],
  components: {
    MainHeading,
    PrimaryButton,
  },
};
</script>

<style scoped>
.man {
  width: 100%;
  max-width: 500px;
}

.blue-line {
  position: relative;
}

.blue-line::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  width: 60%;
  height: 2px;
  background-color: var(--primary);
}

</style>
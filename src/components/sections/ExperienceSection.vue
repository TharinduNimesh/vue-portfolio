<template>
  <section
    class="snap-start bg-cover bg-left-bottom duration-300 flex flex-col"
    :style="`background-image: url(/img/experience-bg-${theme}.png);`"
  >
    <main-heading
      :isDark="isDark"
      main-heading="Experience"
      sub-heading="What Can I Do "
      last-symbol="?"
    />
    <div class="flex flex-1 flex-wrap">
      <div
        class="w-full lg:w-1/2 px-3 md:px-10 xl:px-24"
        :class="{
          'text-white': isDark,
          'text-black': !isDark,
        }"
      >
        <h3 class="text-[24px] font-bold mb-3 font-monteserrat-alt">
          Crafting Digital Experiences: {{ experience }} Years of Web Wizardry
        </h3>
        <p class="mb-3 font-monteserrat">
          <span class="text-2xl font-bold text-primary">W</span>ith
          {{ numberToWord(experience) }} captivating years of journeying through
          the digital landscape, I've sculpted my mark as a web magician. From
          mastering the fundamental intricacies of web development to conjuring
          captivating user interfaces with Laravel, Vue.js, Tailwind, and
          Bootstrap, my passion for pixel-perfect code runs deep. I've danced
          with databases, both relational (MySQL) and NoSQL (MongoDB),
          orchestrating data with finesse.
        </p>
        <p class="mb-3 font-monteserrat">
          Yet, my skills stretch beyond the web horizon. I've donned my mobile
          sorcerer's hat, diving into the realm of React Native for crafting
          enchanting mobile applications. My journey is a tapestry of creativity
          and innovation, where every line of code tells a story. Join me on
          this spellbinding journey as we transform ideas into digital dreams.
        </p>
      </div>
      <div class="w-full lg:w-1/2 px-3 md:px-10 flex items-center mt-4 lg:mt-0">
        <div
          class="w-full px-5 pt-5 pb-10 rounded-lg bg-gray backdrop-blur shadow-md duration-300"
          :style="`background-color: #${bgColor}`"
        >
          <div class="flex flex-col">
            <h3
              class="uppercase self-center text-xl font-bold font-monteserrat underline-primary duration-300"
              :class="{
                'text-white': isDark,
              }"
            >
              My Proficiencies
            </h3>
          </div>
          <progress-bar name="HTML & CSS" percentage="96" :is-dark="isDark" />
          <progress-bar name="Javascript" percentage="80" :is-dark="isDark" />
          <progress-bar name="Vue JS" percentage="64" :is-dark="isDark" />
          <progress-bar name="Laravel" percentage="78" :is-dark="isDark" />
          <progress-bar name="Databases" percentage="93" :is-dark="isDark" />
          <progress-bar name="SEO" percentage="54" :is-dark="isDark" />
        </div>
      </div>
    </div>
  </section>

  <section
    class="bg-cover bg-left-bottom duration-300 flex flex-col py-8"
    :style="`background-image: url('/img/skill-bg-${theme}.png')`"
  >
    <div class="flex flex-1 justify-center flex-wrap gap-8">
      <skill-card
        :is-dark="isDark"
        skill="Crafting User Experiences"
        image="frontend"
      >
        Experience the art of web basics and the power of Vue.js, where
        creativity meets functionality to build engaging and dynamic web
        interfaces.
      </skill-card>

      <skill-card
        :is-dark="isDark"
        skill="Building the Digital Backbone"
        image="backend"
      >
        Leverage the robustness of Laravel and Django to create efficient and
        scalable backend solutions that drive your web applications forward.
      </skill-card>

      <skill-card
        :is-dark="isDark"
        skill="Data Design Mastery Unleashed"
        image="database"
      >
        Molding data with finesse using MySQL and NoSQL databases, ensuring your
        applications store and retrieve information seamlessly.
      </skill-card>

      <skill-card
        :is-dark="isDark"
        skill="Navigating the Mobile Realm"
        image="mobile"
      >
        Embark on an exciting mobile journey with Flutter and the React Native.
        Transform your ideas into captivating cross-platform apps that deeply
        engage and connect users.
      </skill-card>

      <skill-card
        :is-dark="isDark"
        skill="Bridging the Digital Divide"
        image="desktop"
      >
        Unleash the potential of Java Swing and Electron JS to develop desktop
        applications that bring user-friendly experiences to the desktop
        environment.
      </skill-card>

      <skill-card
        :is-dark="isDark"
        skill="Embracing Lifelong Learning Ahead"
        image="progress"
      >
        As the tech landscape evolves, I'm committed to continuous learning,
        exploring emerging technologies, and staying ahead in this ever-changing
        field.
      </skill-card>
    </div>
  </section>
</template>

<script>
import numberToWords from "number-to-words";

// Components
import MainHeading from "../home/MainHeading.vue";
import ProgressBar from "../home/ProgressBar.vue";
import SkillCard from "../home/SkillCard.vue";

export default {
  name: "ExperienceSection",
  props: ["isDark"],
  components: {
    MainHeading,
    ProgressBar,
    SkillCard,
  },
  computed: {
    theme() {
      return this.isDark ? "dark" : "light";
    },
    bgColor() {
      return this.isDark ? "1f2937ab" : "f5f8ffb9";
    },
  },
  data() {
    return {
      experience: new Date().getFullYear() - 2021,
    };
  },
  methods: {
    numberToWord(number) {
      return numberToWords.toWords(number);
    },
  },
};
</script>

<style>
</style>
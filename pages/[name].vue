<template>
  <div class="work">
    <IntroSection class="work__intro" />
    <Section class="work__work">
      <WorkSection :next="nextWork" :data="findCurrentProject" />
    </Section>
    <Section>
      <WorksSection :list="worksData" />
    </Section>
  </div>
</template>

<script setup>
import IntroSection from "../components/sections/intro.vue";
import WorkSection from "../components/sections/work.vue";
import Section from "../components/atoms/section.vue";
import WorksSection from "../components/sections/works.vue";

const route = useRoute();

const {
  data: {
    value: { body: worksData },
  },
} = await useAsyncData("works", () => queryContent("/works").findOne());

const {
  data: {
    value: { body: projectsData },
  },
} = await useAsyncData("projects", () => queryContent("/projects").findOne());

const nextWork = computed(() => {
  let currentIndex = worksData.findIndex(
    (item) => item.name === route.params.name,
  );

  currentIndex += 1;

  if (currentIndex >= worksData.length) currentIndex = 0;

  return worksData[currentIndex].name;
});

const findCurrentProject = computed(() =>
  projectsData.find((item) => item.name === route.params.name),
);
</script>

<style lang="scss">
.work {
  display: flex;
  flex-direction: column;
  position: relative;

  &__work {
    padding-top: 0;
  }

  &__intro {
    margin-bottom: 32px;

    @media (min-width: $bp-tablet) {
      position: absolute;
      margin-bottom: 0;
    }
  }
}
</style>

<template>
  <div class="work">
    <IntroSection class="work__intro" />
    <Section> <WorkSection :next="nextWork()" /></Section>
    <Section> <WorksSection :list="worksData" /></Section>
  </div>
</template>

<script setup>
import IntroSection from "../components/sections/intro.vue";
import WorkSection from "../components/sections/work.vue";
import Section from "../components/atoms/section.vue";
import WorksSection from "../components/sections/works.vue";

const {
  data: {
    value: { body: worksData },
  },
} = await useAsyncData("works", () => queryContent("/works").findOne());

const route = useRoute();

const isActiveWorkName = computed(
  () => (item) => item.name !== route.params.name,
);

const nextWork = () => {
  let currentIndex = worksData.findIndex(
    (item) => item.name === isActiveWorkName,
  );
  currentIndex += 1;

  if (currentIndex > worksData.length) currentIndex = 0;

  debugger;

  return worksData[currentIndex].name;
};
</script>

<style lang="scss">
.work {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 128px;

  &__intro {
    margin-bottom: 32px;

    @media (min-width: $bp-tablet) {
      margin-bottom: 0;
    }
  }
}
</style>

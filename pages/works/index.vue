<template>
  <div class="works">
    <IntroSection />
    <Section> <WorksSection :list="worksData" /></Section>
  </div>
</template>

<script setup>
import IntroSection from "../../components/sections/intro.vue";
import Section from "../../components/atoms/section.vue";
import WorksSection from "../../components/sections/works.vue";

const {
  data: {
    value: { body: worksData },
  },
} = await useAsyncData("works", () => queryContent("/works").findOne());
</script>

<style lang="scss">
.works {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

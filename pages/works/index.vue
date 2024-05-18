<template>
  <div class="works">
    <NavigationSection />
    <Section> <WorksSection :list="worksData" /></Section>
  </div>
</template>

<script setup>
import NavigationSection from "../../components/sections/navigation.vue";
import Section from "../../components/atoms/section.vue";
import WorksSection from "../../components/sections/works.vue";

const {
  data: {
    value: { body: worksData },
  },
} = await useAsyncData("works", () => queryContent("/works").findOne());
</script>

<style lang="scss">
html,
body {
  background-color: $brown;
}

.works {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

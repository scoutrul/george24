<template>
  <div class="work">
    <IntroSection />
    <Section> <WorkSection /></Section>
    <Section> <WorksSection /></Section>
  </div>
</template>

<script setup>
import IntroSection from "../components/sections/intro.vue";
import WorkSection from "../components/sections/work.vue";
import Section from "../components/atoms/section.vue";
import WorksSection from "../components/sections/works.vue";
</script>

<style lang="scss">
.work {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

<template>
  <div class="page">
    <NavigationSection class="section section--navigation" />
    <PosterSection class="section section--poster" />
    <Section class="section section--present"> <PresentSection /></Section>
    <Section class="section section--works">
      <WorksSection :list="worksData"
    /></Section>
    <Section class="section section--achieve"> <AchieveSection /></Section>
    <Section class="section section--reviews">
      <ReviewSection :list="reviewsData"
    /></Section>
    <Section class="section"> <StackSection /></Section>
    <Section class="section section--footer"> <FooterSection /></Section>
  </div>
</template>

<script setup>
import Section from "../components/atoms/section.vue";
import PosterSection from "../components/sections/poster.vue";
import NavigationSection from "../components/sections/navigation.vue";
import PresentSection from "../components/sections/present.vue";
import WorksSection from "../components/sections/works.vue";
import AchieveSection from "../components/sections/achieves.vue";
import ReviewSection from "../components/sections/reviews.vue";
import StackSection from "../components/sections/stack.vue";
import FooterSection from "../components/sections/footer.vue";

const { y } = useWindowScroll({ behavior: "instant" });

onMounted(() => {
  y.value = 0;
});

const {
  data: {
    value: { body: worksData },
  },
} = await useAsyncData("works", () => queryContent("/works").findOne());

const {
  data: {
    value: { body: reviewsData },
  },
} = await useAsyncData("reviews", () => queryContent("/reviews").findOne());
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  position: relative;

  .section {
    z-index: 11;
    position: relative;
    @include page-home-padding;

    &--poster {
      z-index: 20;
      margin: 0;
      max-width: 100%;
      padding: 0;
    }

    &--navigation {
      z-index: 12;
      position: fixed;
      margin: auto;
      min-height: 0;
      height: 0;
      padding: 0;
    }

    &--present {
      @media (max-width: $bp-tablet) {
        min-height: auto;
      }
    }

    &--achieve {
      z-index: 10;
    }

    &--reviews {
      position: static; // temp
    }

    &--footer {
      padding-bottom: 0;
      padding-top: 0;
    }
  }
}
</style>

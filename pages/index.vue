<template>
  <div class="home-page">
    <PosterSection class="section section__poster" />
    <IntroSection class="section section__intro" />
    <PresentSection class="section section__present" />
    <WorksSection class="section" :list="workList" />
    <AchieveSection class="section" />
    <ReviewSection class="section" :list="reviewList" />
    <StackSection class="section" />
    <section class="section section__footer">
      It’s time to plan, design, grow. Together.
    </section>
  </div>
</template>

<script setup>
import PosterSection from "../components/sections/poster.vue";
import IntroSection from "../components/sections/intro.vue";
import PresentSection from "../components/sections/present.vue";
import WorksSection from "../components/sections/works.vue";
import AchieveSection from "../components/sections/achieves.vue";
import ReviewSection from "../components/sections/reviews.vue";
import StackSection from "../components/sections/stack.vue";

const reviewList = [
  {
    text: "We’ve got a really amazing design system.",
    name: "Nick Boes",
    from: "Head of design at Athletic Greens",
  },
  {
    text: "We have reached a new level in how quickly we can launch new products.",
    name: "Igor Lukyanov",
    from: "Managing partner at AdGuard",
  },
  {
    text: "One of the best designers I’ve ever worked with.",
    name: "Mohammed Gafarov",
    from: "CEO at Celestial Group",
  },
  {
    text: "Just a brilliant work.",
    name: "Kirill Maimistov",
    from: "CTO at Medaboutme",
  },
];
const workList = [
  {
    header: "Athletic Greens",
    text: "Original Foundational Nutrition drink to provide daily support where the body needs it most",
  },
  {
    header: "Futurebox",
    text: "Sell real estate under construction using AR/VR technologies",
  },
  {
    header: "AdGuard DNS",
    text: "DNS service to help people protect all web traffic on their devices from malicious content",
  },
  {
    header: "Exynex",
    text: "Discover what services track your data online",
  },
  {
    header: "Superseed",
    text: "Advanced cloud storage for geeks & gamers",
  },
  {
    header: "VCards",
    text: "Mobile wallet for managing your virtual cards",
  },
];
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  background: $brown;
  position: relative;

  .section {
    min-height: 320px;
    z-index: 11;
    position: relative;
    margin: auto;
    width: 100%;
    box-sizing: border-box;

    @include page-padding;
    @include page-height;

    &__poster {
      z-index: 20;
      margin: 0;
      max-width: 100%;
    }

    &__intro {
      z-index: 12;
      position: fixed;
      margin: auto;
      min-height: 0;
      height: 0;
      padding: 0;
    }

    &__present {
      @media (max-width: $bp-tablet) {
        min-height: auto;
      }
    }

    &__footer {
      @include font28-40;

      padding-top: 40px;

      @media (min-width: $bp-tablet) {
        padding-top: 80px;
      }

      @media (min-width: $bp-desktop) {
        @include font64;
        padding-top: 160px;
      }

      @media (min-width: $bp-full) {
        padding-top: 208px;
      }
    }
  }
}
</style>

<template>
  <div class="home-page">
    <PosterSection class="section section__poster" />
    <IntroSection class="section section__intro" />
    <PresentSection class="section" />
    <WorksSection class="section" :list="workList" />
    <section class="achieves section">
      <div class="achieves__value">32.6M</div>
      <div class="achieves__message">
        people interact with my solutions monthly in over 30 countries.
      </div>
    </section>
    <section class="reviews section">reviews</section>
    <section class="stack section">stack</section>
    <section class="call section">call</section>
    <section class="contacts section">contacts</section>
  </div>
</template>

<script setup>
import PosterSection from "../components/sections/poster.vue";
import IntroSection from "../components/sections/intro.vue";
import PresentSection from "../components/sections/present.vue";
import WorksSection from "../components/sections/works.vue";

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
    header: "Teamkraft",
    text: "Mobile app to find sporting activities nearby",
  },
  {
    header: "VCards",
    text: "Mobile wallet for managing your virtual cards",
  },
];
</script>

<style lang="scss">
.home-page {
  position: relative;
  display: flex;
  flex-direction: column;
  background: $brown;

  .section {
    box-sizing: border-box;
    width: 100%;
    min-height: 320px;
    z-index: 11;
    position: relative;
    margin: auto;

    @include page-padding;
    @include page-height;

    @media (min-width: $bp-tablet) {
      max-width: $bp-tablet;
    }

    @media (min-width: $bp-desktop) {
      max-width: $bp-desktop;
    }

    @media (min-width: $bp-full) {
      max-width: $bp-full;
    }

    &__poster {
      z-index: 20;
      margin: 0;
      max-width: 100%;
    }

    &__intro {
      z-index: 12;
      min-height: auto;
      height: 96px;

      @media (min-width: $bp-tablet) {
        height: 128px;
      }
    }
  }
}
</style>

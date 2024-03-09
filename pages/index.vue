<template>
  <div class="home-page">
    <PosterSection class="section poster" />
    <IntroSection class="section intro" />
    <PresentSection class="section" />
    <section class="works section">works</section>
    <section class="achieves section">achieves</section>
    <section class="reviews section">reviews</section>
    <section class="stack section">stack</section>
    <section class="call section">call</section>
    <section class="contacts section">contacts</section>
  </div>
</template>

<script>
import PosterSection from "../components/sections/poster.vue";
import IntroSection from "../components/sections/intro.vue";
import PresentSection from "../components/sections/present.vue";

export default {
  components: { PosterSection, IntroSection, PresentSection },
};
</script>
<style lang="scss">
.home-page {
  position: relative;
  display: flex;
  flex-direction: column;
  background: $brown;

  .section {
    min-height: 320px;
    z-index: 11;
    position: relative;
    @include page-padding;
    margin: auto;

    @media (min-width: $bp-tablet) {
      max-width: $bp-tablet;
    }

    @media (min-width: $bp-desktop) {
      max-width: $bp-desktop;
    }

    @media (min-width: $bp-full) {
      max-width: $bp-full;
    }
  }

  .poster {
    z-index: 20;
    margin: 0;
    max-width: 100%;
  }

  .intro {
    z-index: 12;
    min-height: auto;
    height: 64px;
  }
}
</style>

<template>
  <div class="page-home">
    <poster class="section" />
    <section class="intro section">
      <logo is-black class="logo-black" />
    </section>
    <section class="works section">works</section>
    <section class="achieves section">achieves</section>
    <section class="reviews section">reviews</section>
    <section class="stack section">stack</section>
    <section class="call section">call</section>
    <section class="contacts section">contacts</section>
  </div>
</template>

<script>
import Logo from "../components/atoms/logo.vue";
import Poster from "../components/sections/poster.vue";
export default {
  components: { Poster, Logo },
};
</script>
<style lang="scss">
.page-home {
  position: relative;
}

.logo-black {
  position: fixed;
  z-index: 5;
  @include main-padding;
}

.section {
  min-height: 320px;
  background: $brown;
  z-index: 1;
  position: relative;
  @include page-padding;
}

.intro {
  z-index: 3;
}
</style>

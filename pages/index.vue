<template>
  <div class="page">
    <section class="poster section"></section>

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
export default {
  components: { Logo },
};
</script>
<style lang="scss">
@mixin page-padding {
  padding: 16px;

  @media (min-width: 900px) {
    padding: 32px 40px;
  }

  @media (min-width: 1440px) {
    padding: 32px 64px;
  }

  @media (min-width: 1920px) {
    padding: 32px 80px;
  }
}

.page {
  position: relative;
}

.logo-black {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 10px;
  @include page-padding;
}

.logo-white {
  position: fixed;
  z-index: 5;
  top: 0;
  @include page-padding;
}

.section {
  min-height: 320px;
  background: #f0ece3;
  z-index: 1;
  position: relative;
  @include page-padding;
}
.poster {
  background-color: #0f2e2f;
  min-height: 520px;
  z-index: 4;

  background-image: url(@/assets/logo-white.svg);
  background-size: 64px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 27px 16px;

  @media (min-width: 900px) {
    background-position: 52px 32px;
  }

  @media (min-width: 1440px) {
    background-position: 75px 32px;
  }

  @media (min-width: 1920px) {
    background-position: 90px 32px;
  }
}

.intro {
  z-index: 3;
}
</style>

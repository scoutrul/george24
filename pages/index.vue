<template>
  <div>
    <section class="poster section">
      <div class="header">header1</div>
    </section>

    <section class="intro section">intro</section>
    <section class="works section">works</section>
    <section class="achieves section">achieves</section>
    <section class="reviews section">reviews</section>
    <section class="stack section">stack</section>
    <section class="call section">call</section>
    <section class="contacts section">contacts</section>
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 1;
}
.section {
  min-height: 320px;
  background: #f0ece3;
  z-index: 2;
  position: relative;
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
.poster {
  background: #0f2e2f;
  min-height: 520px;
}
</style>

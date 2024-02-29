<template>
  <div class="page">
    <section class="poster section">
      <div class="logo-white"></div>
      <ul class="nav">
        <li>works</li>
        <li>get cv</li>
      </ul>
      <img src="@/assets/george.png" class="george-pic" />
      <NuxtMarquee auto-fill class="marquee">
        <div>plan,&nbsp;</div>
        <div>design,&nbsp;</div>
        <div>grow,&nbsp;</div>
      </NuxtMarquee>
    </section>

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
.marquee {
  font-size: 300px;
  font-weight: 700;
  line-height: 300px;
  letter-spacing: -0.03em;
  color: #f0ece3;
  user-select: none;
  position: absolute;
  min-width: 100vw;
  left: 0;
  height: 100%;
  top: 0;
  z-index: 0;
}
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

.nav {
  padding: 0;
  display: flex;
  list-style: none;
  height: 64px;
  margin: 0 0 0 auto;
  align-items: center;
  width: fit-content;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f0ece3;

  li {
    margin-left: 24px;
  }
}

.logo-black {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 10px;
}

.logo-white {
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  background-image: url(@/assets/logo-white.svg);
  background-size: 64px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 16px 16px;

  @media (min-width: 900px) {
    background-position: 32px 32px;
  }

  @media (min-width: 1440px) {
    background-position: 75px 32px;
  }

  @media (min-width: 1920px) {
    background-position: 90px 32px;
  }
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
  overflow: hidden;
}

.george-pic {
  width: 872px;
  left: 50%;
  top: 82px;
  transform: translateX(-50%);
  z-index: 1;
  position: relative;
}
.intro {
  z-index: 3;
}
</style>

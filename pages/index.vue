<template>
  <div class="page">
    <section class="poster section">
      <div class="logo-white"></div>
      <ul class="nav">
        <li>works</li>
        <li>get cv</li>
      </ul>

      <picture>
        <source
          media="(max-width: 360px)"
          srcset="@/assets/bg_art_mobile.png, @/assets/bg_art_mobile@2x.png"
        />
        <source
          media="(min-width: 361px) and (max-width: 900px)"
          srcset="@/assets/bg_art_tablet.png, @/assets/bg_art_tablet@2x.png"
        />
        <source
          media="(min-width: 900px) and (max-width: 1299px)"
          srcset="@/assets/bg_art_desktop.png, @/assets/bg_art_desktop@2x.png"
        />
        <source
          media="(min-width: 1300px)"
          srcset="@/assets/bg_art_desktop2x.png"
        />
        <img
          src="@/assets/bg_art_desktop2x.png"
          alt="Georgy"
          class="george-pic"
        />
      </picture>

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
@mixin main-padding {
  left: 16px;
  top: 16px;

  @media (min-width: 900px) {
    left: 32px;
    top: 32px;
  }

  @media (min-width: 1440px) {
    top: 32px;
    left: 75px;
  }

  @media (min-width: 1920px) {
    top: 32px;
    left: 90px;
  }
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
  @include main-padding;
}

.logo-white {
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  background-image: url("@/assets/logo-white.svg");
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
  min-height: 820px;
  z-index: 4;
  overflow: hidden;

  @media (min-width: 900px) {
    min-height: 1094px;
  }

  @media (min-width: 1440px) {
    min-height: 980px;
  }

  @media (min-width: 1920px) {
    min-height: 1091px;
  }
}

.george-pic {
  height: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 1;
  position: absolute;
}

.intro {
  z-index: 3;
}
</style>

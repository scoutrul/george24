<template>
  <section class="poster">
    <div class="logo-white"></div>
    <NavMenu />
    <Contacts />

    <picture>
      <source
        media="(orientation: portrait)"
        srcset="@/assets/bg_art_portrait.png, @/assets/bg_art_portrait@2x.png"
      />
      <source
        media="(orientation: landscape)"
        srcset="@/assets/bg_landscape.png, @/assets/bg_landscape@2x.png"
      />
      <img src="@/assets/bg_art_mobile.png" alt="" class="george-pic" />
    </picture>

    <MarqueeText />
  </section>
</template>

<script setup>
import MarqueeText from "../components/atoms/marquee.vue";
import NavMenu from "../components/atoms/nav.vue";
import Contacts from "../components/atoms/contacts.vue";
</script>

<style lang="scss" scoped>
.poster {
  background-color: $green-black;
  min-height: 440px;
  height: 100vh;
  box-sizing: border-box;
  z-index: 20;
  overflow: hidden;
  position: relative;
  user-select: none;

  @media (orientation: landscape) {
    min-height: 660px;
  }

  @media (min-width: $bp-tablet) {
    max-height: 1094px;
  }
}

.george-pic {
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 1;
  position: absolute;
  min-width: 360px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.logo-white {
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 10;
  left: -8px;
  top: 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url("@/assets/logo-white.svg");
    background-size: 64px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: $padding-min $padding-min;

    @media (min-width: $bp-tablet) {
      background-position: $padding-mid - $padding-step $padding-mid;
    }

    @media (min-width: $bp-desktop) {
      background-position: $padding-large - $padding-step $padding-mid;
    }

    @media (min-width: $bp-full) {
      background-position: $padding-extra - $padding-step $padding-mid;
    }
  }
}
</style>

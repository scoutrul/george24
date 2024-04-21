<template>
  <section v-if="isPosterLoading" class="poster poster--loading">
    <svg
      class="poster__logo"
      xmlns="http://www.w3.org/2000/svg"
      width="214"
      height="214"
      viewBox="0 0 214 214"
      fill="none"
    >
      <path
        d="M70 107L107 144L134.5 116.5H189.5L107 199L15 107L107 15"
        stroke="#E3DED1"
        stroke-width="20"
        stroke-linecap="square"
      />
    </svg>
  </section>
  <section v-else ref="poster" class="poster">
    <div class="poster__logo-white" />
    <NavMenu />
    <Contacts />

    <img :src="src" alt="" class="poster__poster" />

    <MarqueeText v-if="targetIsVisible" />
  </section>
</template>

<script setup>
import { useImage } from "@vueuse/core";
import { useAnime } from "#anime";

import MarqueeText from "../atoms/marquee.vue";
import NavMenu from "../atoms/nav.vue";
import Contacts from "../atoms/contacts.vue";

const src = ref(
  "http://localhost:3000/george24/assets/assets/bg_landscape@2x.webp",
);
const poster = ref(null);
const targetIsVisible = useElementVisibility(poster);
const { isLoading: isPosterLoading } = useImage({ src: src.value });

onMounted(() => {
  // if (!isPosterLoading.value) {
  useAnime({
    targets: ".poster__logo path",
    strokeDashoffset: [useAnime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
  // }
});
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

  &--loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    margin: auto;
    padding-left: 24px;
  }

  &__poster {
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

  &__logo-small {
    width: 100vw;
    height: 100%;
    position: absolute;
    z-index: 10;
    left: 0;
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
        background-position: $padding-mid + $padding-step $padding-mid;
      }

      @media (min-width: $bp-desktop) {
        background-position: $padding-large - $padding-step $padding-mid;
      }
    }
  }
}
</style>

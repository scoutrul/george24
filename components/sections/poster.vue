<template>
  <section ref="poster" class="poster">
    <section
      class="poster poster--loading"
      :class="{
        'poster--finish': !isPosterLoading && !isPending,
      }"
    >
      <svg
        class="poster__logo glitch"
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
    <div class="poster__logo-white" />
    <NavMenu />
    <Contacts />

    <img :src="src" alt="" class="poster__poster" />

    <MarqueeText v-if="targetIsVisible" />
  </section>
</template>

<script setup>
import { useImage, useTimeoutFn } from "@vueuse/core";

import MarqueeText from "../atoms/marquee.vue";
import NavMenu from "../atoms/nav.vue";
import Contacts from "../atoms/contacts.vue";

const src = ref(
  "http://localhost:3000/george24/assets/assets/bg_landscape@2x.webp",
);
const poster = ref(null);
let targetIsVisible = ref(false);
const { isLoading: isPosterLoading } = useImage({ src: src.value });

const { start, isPending } = useTimeoutFn(() => {}, 5000);

onMounted(() => {
  targetIsVisible = useElementVisibility(poster);

  useAnime({
    targets: ".poster__logo path",
    strokeDashoffset: [useAnime.setDashoffset, 0],
    easing: "easeInOutExpo",
    duration: 2500,
    direction: "alternate",
    loop: true,
  });
  start();
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
  transition: 0.5s ease-out;

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
  &--finish {
    opacity: 0;
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

  .glitch {
    position: relative;
    animation:
      glitch 1.3s 1.3s infinite,
      glitch 3.5s 3.5s infinite;
  }

  @keyframes glitch {
    1% {
      transform: rotateX(50deg) skewX(90deg);
    }
    2% {
      @media (min-width: $bp-tablet) {
        transform: rotateX(0deg) skewX(0deg);
      }
    }
    3% {
      transform: rotateX(0deg) skewX(0deg);
    }
  }
}
</style>

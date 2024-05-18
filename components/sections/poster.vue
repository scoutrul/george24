<template>
  <section class="poster">
    <section
      class="poster poster--loading"
      :class="{
        'poster--finish': isLogoAnimationFinished,
      }"
    >
      <svg
        class="poster__logo glitch-global"
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
          class="poster__logo-path"
        />
      </svg>
    </section>

    <div class="poster__logo-small" />
    <NavMenu />
    <Contacts />

    <img
      v-show="isLogoAnimationFinished && isTextAnimationFinished"
      :src="src"
      alt=""
      class="poster__poster"
    />

    <div
      v-if="isLogoAnimationFinished || isTextAnimationFinished"
      class="poster__view glitch"
    >
      <CycleText
        v-if="isLogoAnimationFinished && !isTextAnimationFinished"
        text="plan design grow "
        :count="2"
        :speed="60"
        @is-animation-end="endCycleTextAnimation"
      />
      <MarqueeText
        v-if="isLogoAnimationFinished && isTextAnimationFinished"
        text="plan, design, grow,"
        :speed="100"
      />
    </div>
  </section>
</template>

<script setup>
import { useImage, useElementVisibility } from "@vueuse/core";
import { useRuntimeConfig } from "nuxt/app";

import CycleText from "../atoms/cycleText.vue";
import MarqueeText from "../atoms/marquee.vue";
import NavMenu from "../atoms/nav.vue";
import Contacts from "../atoms/contacts.vue";

const {
  app: { baseURL },
} = useRuntimeConfig();

const src = ref(`${baseURL}bg_landscape@2x.webp`);

const { isLoading: isPosterLoading } = useImage({ src: src.value });

const logoAnimation = ref(null);
const logoAnimationTimes = ref(0);
const isLogoAnimationFinished = ref(false);
const isTextAnimationFinished = ref(false);

const endCycleTextAnimation = () => {
  isTextAnimationFinished.value = true;
  document.body.style.overflow = "initial";
};

onBeforeMount(() => {
  document.body.style.overflow = "hidden";
  document.body.style.background = "#0f2e2f";

  logoAnimation.value = useAnime({
    targets: ".poster__logo-path",
    strokeDashoffset: [useAnime.setDashoffset, 0],
    easing: "cubicBezier(0.83, 0, 0.17, 1)",
    duration: 2500,
    direction: "alternate",
    loop: true,
    update: (instance) => {
      if (instance.progress === 100) {
        logoAnimationTimes.value += 1;

        if (logoAnimationTimes.value >= 1 && !isPosterLoading.value) {
          logoAnimation.value.pause();
          isLogoAnimationFinished.value = true;
        }
      }
    },
  });

  logoAnimation.value.play();
});

onBeforeUnmount(() => {
  document.body.style.background = "";
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

  &--finish {
    display: none;
  }

  &__view {
    position: absolute;
    min-width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    color: $brown;
    user-select: none;
    font-size: 300px;
    font-weight: 700;
    line-height: 300px;
    letter-spacing: -0.03em;
  }

  &__slogan {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    color: $brown;
    user-select: none;
    font-size: 300px;
    font-weight: 700;
    line-height: 300px;
    letter-spacing: -0.03em;
  }

  &__logo {
    margin: auto;
    opacity: 0;
    position: absolute;
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

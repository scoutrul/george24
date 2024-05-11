<template>
  <section ref="poster" class="poster">
    <section
      class="poster poster--loading"
      :class="{
        'poster--finish': isPreloaderLogoAnimationFinished,
      }"
    >
      <svg
        class="poster__logo"
        :class="{
          poster__glitchOpacity: isPreloaderLogoAnimationFinished,
          poster__glitch: !isPreloaderLogoAnimationFinished,
        }"
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
      v-show="isPreloaderLogoAnimationFinished"
      :src="src"
      alt=""
      class="poster__poster"
      :class="{ 'poster__poster--show': isPreloaderLogoAnimationFinished }"
    />

    <MarqueeText v-if="isPreloaderLogoAnimationFinished && targetIsVisible" />
  </section>
</template>

<script setup>
import { useImage, useElementVisibility } from "@vueuse/core";
import { useRuntimeConfig } from "nuxt/app";

import MarqueeText from "../atoms/marquee.vue";
import NavMenu from "../atoms/nav.vue";
import Contacts from "../atoms/contacts.vue";

const {
  app: { baseURL },
} = useRuntimeConfig();

const src = ref(`${baseURL}bg_landscape@2x.webp`);
const poster = ref(null);

const { isLoading: isPosterLoading } = useImage({ src: src.value });
const targetIsVisible = useElementVisibility(poster);

const logoAnimation = ref(null);
const logoAnimationTimes = ref(0);
const isPreloaderLogoAnimationFinished = ref(false);

onBeforeMount(() => {
  document.body.style.overflow = "hidden";

  logoAnimation.value = useAnime({
    targets: ".poster__logo-path",
    strokeDashoffset: [useAnime.setDashoffset, 0],
    easing: "cubicBezier(0.83, 0, 0.17, 1)",
    duration: 2500,
    direction: "alternate",
    loop: true,
    update: (instance) => {
      if (instance.progress === 100) {
        logoAnimationTimes.value++;

        if (logoAnimationTimes.value >= 1 && !isPosterLoading.value) {
          logoAnimation.value.pause();
          isPreloaderLogoAnimationFinished.value = true;

          document.body.style.overflow = "initial";
        }
      }
    },
  });

  logoAnimation.value.play();
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
    z-index: -1;
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
    opacity: 0;
    transition: 3s 6s;

    &--show {
      opacity: 1;
    }
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

  &__glitch {
    animation:
      glitch 1.3s 1.3s infinite,
      glitch 3s 3s infinite;
  }

  &__glitchOpacity {
    animation: glitchOpacity 0.2s;
    animation-iteration-count: 1;
  }

  @keyframes glitch {
    1% {
      transform: rotateX(50deg) skewX(90deg);
      opacity: 0;
    }
    2% {
      @media (min-width: $bp-tablet) {
        transform: rotateX(0deg) skewX(0deg);
      }
    }

    3% {
      transform: rotateX(0deg) skewX(0deg);
      opacity: 1;
    }
    99% {
      opacity: 1;
    }
  }

  @keyframes glitchOpacity {
    1% {
      transform: rotateX(0deg) skewX(0deg);
      opacity: 1;
    }

    3% {
      transform: rotateX(90deg) skewX(180deg);
      opacity: 0;
    }

    7% {
      transform: rotateX(0deg) skewX(0deg);
      opacity: 1;
    }

    33% {
      transform: rotateX(90deg) skewX(180deg);
      opacity: 0;
    }

    60% {
      transform: rotateX(0deg) skewX(0deg);
      opacity: 1;
    }

    70% {
      transform: rotateX(90deg) skewX(180deg);
      opacity: 0;
    }
  }
  @keyframes posterOpacity {
    1% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>

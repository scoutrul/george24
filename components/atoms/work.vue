<template>
  <NuxtLink
    ref="itemElement"
    no-prefetch
    :to="name"
    class="work__container"
    :class="{ 'work__container--hover': isActive }"
  >
    <div class="work__header">
      <template v-if="!isActive"> {{ header }} </template>
      <Link v-else :text="header" pre-start />
    </div>
    <div class="work__text">{{ text }}</div>
    <div
      v-if="!isMobileWindowSize && targetIsVisible"
      v-show="isActive"
      ref="popupElement"
      class="work__pop"
      :style="{
        left: popLeft,
        top: popTop,
      }"
    >
      <img :src="getPreviewImage" class="work__pop-img" :alt="name" />
    </div>
  </NuxtLink>
</template>

<script setup>
import Link from "../atoms/link.vue";
import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  text: { type: String, default: "" },
  header: { type: String, default: "" },
  name: { type: String, default: "" },
  preview: { type: String, default: "" },
});

const itemElement = ref();
const popupElement = ref();

const isActive = ref(false);
const isMobileWindowSize = ref(false);

const targetIsVisible = useElementVisibility(itemElement);

const keyframes = [{ filter: "blur(10px)" }, { filter: "blur(0)" }];

const { play, finish } = useAnimate(popupElement, keyframes, 200);

const {
  elementX,
  elementY,
  isOutside,
  sourceType,
  elementWidth,
  elementPositionY,
} = useMouseInElement(itemElement);

const { elementHeight: popupHeight, elementWidth: popupWidth } =
  useMouseInElement(popupElement);

const { y: windowScrollY } = useWindowScroll();
const { width: windowSizeWidth } = useWindowSize();
isMobileWindowSize.value = windowSizeWidth.value < 900;

const {
  app: { baseURL },
} = useRuntimeConfig();

const getPreviewImage = computed(() => `${baseURL}previews/${props.preview}`);

const popLeft = computed(() => {
  return elementX.value > elementWidth.value - popupWidth.value
    ? elementX.value - popupWidth.value + "px"
    : elementX.value + "px";
});

const popTop = computed(() => {
  if (!window) return;

  return elementPositionY.value -
    window.screen.availHeight / 2 +
    popupHeight.value / 2 >
    windowScrollY.value
    ? elementY.value - popupHeight.value + "px"
    : elementY.value + "px";
});

watch(isOutside, (value) => {
  isActive.value = !value;
  if (isActive.value) {
    play();
  } else {
    finish();
  }
});

watch(sourceType, (value, old) => {
  if (old === "touch" && value === "mouse") {
    isActive.value = false;
  }
});

watch(windowSizeWidth, (val) => {
  isMobileWindowSize.value = val < 900;
});
</script>

<style lang="scss" scoped>
.work {
  &__pop {
    position: absolute;
    width: 200px;
    height: 434px;
    border-radius: 20px;
    z-index: 10000;
    display: none;
    transform: translateY(8px);
    background: $grey;
    box-shadow: 0 20px 40px 0 #00000033;

    @media (min-width: $bp-tablet) {
      display: flex;
    }
  }

  &__pop-img {
    border-radius: 20px;
  }

  &__container {
    padding: 28px 8px 24px;
    display: flex;
    flex-direction: column;
    position: relative;
    left: -8px;
    min-width: calc(100%);
    text-decoration: none;
    transition: 0.3s;

    &--hover,
    &:hover {
      cursor: pointer;
      background: $brown-dark;
      border-radius: 8px;

      .work__text {
        color: $green-black;
      }
    }

    @media (min-width: $bp-tablet) {
      flex-direction: row;
      gap: 24px;
      padding: 32px 40px;
      left: 0;
      min-width: auto;
    }
  }

  &__header {
    @include font28-40;
    color: $green-black;
    margin-bottom: 24px;
    display: flex;

    @media (min-width: $bp-tablet) {
      flex: 1 0 50%;
      margin-bottom: 0;
    }
  }

  &__text {
    @include font18;
    color: $grey;

    @media (min-width: $bp-tablet) {
      flex: 1 1 50%;
      @include font28;
    }
  }
}
</style>

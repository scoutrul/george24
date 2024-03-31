<template>
  <NuxtLink
    ref="itemElement"
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
      v-if="isActive"
      class="work__pop"
      :style="{
        left:
          elementX > elementWidth - 200
            ? elementX - 200 + 'px'
            : elementX + 'px',
        top: elementY + 'px',
      }"
    >
      <img :src="getPreviewImage" class="work__pop-img" />
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

const isActive = ref(false);

const itemElement = ref();

const { elementX, elementY, isOutside, sourceType, elementWidth } =
  useMouseInElement(itemElement);

const getPreviewImage = computed(() => {
  return "/george24/previews/" + props.preview;
});

watch(isOutside, (value) => {
  isActive.value = !value;
});

watch(sourceType, (value, old) => {
  if (old === "touch" && value === "mouse") {
    isActive.value = false;
  }
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

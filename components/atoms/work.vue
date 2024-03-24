<template>
  <div ref="itemElement" class="work__container">
    <div class="work__header">
      <template v-if="!isActive">
        {{ header }}
      </template>
      <Link v-else :text="header" pre-start />
    </div>
    <div class="work__text">
      {{ text }}
    </div>
    <div
      v-if="isActive"
      class="work__pop"
      :style="{
        left: elementX + 'px',
        top: elementY + 'px',
      }"
    ></div>
  </div>
</template>

<script setup>
import Link from "../atoms/link.vue";

import { useMouseInElement } from "@vueuse/core";

const props = defineProps({
  text: { type: String, default: "" },
  header: { type: String, default: "" },
});

const isActive = ref(false);

const itemElement = ref();

const { elementX, elementY, isOutside } = useMouseInElement(itemElement);

watch(isOutside, (value) => {
  isActive.value = !value;
});
</script>

<style lang="scss" scoped>
.work {
  &__pop {
    position: absolute;
    width: 200px;
    height: 434px;
    transform: translateX(-50%);
    background: #000;
    border-radius: 20px;
    z-index: 100;
    transition: 0.2s;
  }

  &__container {
    padding: 28px 0 24px;
    display: flex;
    flex-direction: column;
    position: relative;

    @media (min-width: $bp-tablet) {
      &:hover {
        cursor: pointer;

        background: $brown-dark;
        border-radius: 8px;

        .work__text {
          color: $green-black;
        }
      }
    }

    @media (min-width: $bp-tablet) {
      flex-direction: row;
      gap: 24px;
      padding: 32px 40px;
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

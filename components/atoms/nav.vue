<template>
  <ul class="nav" :class="{ 'nav--black': isBlack, 'nav--float': isFloat }">
    <li><Link text="works" @click="toWorks" /></li>
    <li>
      <a href="./CV-George-Vorobyov.pdf" target="_blank">
        <Link text="get&nbsp;cv" />
      </a>
    </li>
  </ul>
</template>

<script setup>
import Link from "./link.vue";

defineProps({
  isBlack: Boolean,
  isFloat: Boolean,
});

const { y } = useWindowScroll({ behavior: "smooth" });

const toWorks = () => {
  if (!window?.document) return;

  const worksSection =
    window.document.getElementsByClassName("section__works")[0];

  y.value = worksSection.offsetTop;
};
</script>

<style lang="scss" scoped>
.nav {
  z-index: 10;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  padding: 0 0 0 64px;
  display: flex;
  list-style: none;
  height: 64px;
  margin: 0 0 0 auto;
  align-items: center;
  width: fit-content;
  text-align: center;
  color: $brown;
  position: absolute;
  top: $padding-min;
  right: $padding-min;
  left: $padding-min;

  @media (min-width: $bp-tablet) {
    right: $padding-mobile;
    left: $padding-mobile;
    top: $padding-mid;
  }

  @media (min-width: $bp-desktop) {
    right: $padding-tablet;
    left: $padding-tablet;
    top: $padding-mobile;
  }

  @media (min-width: $bp-full) {
    right: $padding-desktop;
    left: $padding-desktop;
  }

  @include font18;

  @media (min-width: $bp-tablet) {
    @include font28;
  }

  li {
    margin-left: 14px;
  }

  &--float {
    position: fixed;
  }

  &--black {
    color: $green-black;

    @media (min-width: $bp-tablet) {
      top: $padding-mobile - $padding-step;
    }
  }
}
</style>

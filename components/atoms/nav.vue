<template>
  <ul class="nav" :class="{ '--black': isBlack, '--float': isFloat }">
    <li>works</li>
    <li>get cv</li>
  </ul>
</template>

<script setup>
defineProps({
  isBlack: Boolean,
  isFloat: Boolean,
});
</script>

<style lang="scss" scoped>
.nav {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  padding: 0 0 0 64px;
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
  color: $brown;
  font-family: "ABC Diatype Light", sans-serif;

  @media (min-width: $bp-tablet) {
    font-size: 28px;
    line-height: 34px;
  }

  li {
    margin-left: 24px;
  }

  &.--float {
    position: fixed;
    top: $padding-min;
    right: $padding-min;
    left: $padding-min;

    @media (min-width: $bp-tablet) {
      right: $padding-mobile;
      left: $padding-mobile;
      top: $padding-mobile;
    }

    @media (min-width: $bp-desktop) {
      right: $padding-tablet;
      left: $padding-tablet;
      top: $padding-desktop;
    }

    @media (min-width: $bp-full) {
      right: $padding-desktop;
      left: $padding-desktop;
    }
  }

  &.--black {
    color: $green-black;
  }
}
</style>

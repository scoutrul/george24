<template>
  <ul class="contacts" :class="{ '--black': isBlack, '--float': isFloat }">
    <li>hello.geovo@gmail.com</li>
    <li>telegram</li>
  </ul>
</template>

<script setup>
defineProps({
  isBlack: Boolean,
  isFloat: Boolean,
});
</script>

<style lang="scss" scoped>
.contacts {
  list-style: none;
  padding: 0;
  position: absolute;
  z-index: 10;
  bottom: $padding-v-min;
  right: $padding-min;
  left: $padding-min;
  display: flex;
  gap: 40px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0;
  font-family: "ABC Diatype Light", sans-serif;
  color: $brown;

  @media (min-width: $bp-tablet) {
    justify-content: end;
    right: $padding-mobile;
    left: $padding-mobile;
    bottom: $padding-mobile;
    font-size: 28px;
    line-height: 34px;
  }

  @media (min-width: $bp-desktop) {
    right: $padding-tablet;
    left: $padding-tablet;
    bottom: $padding-desktop;
  }

  @media (min-width: $bp-full) {
    right: $padding-desktop;
    left: $padding-desktop;
  }

  &.--float {
    position: fixed;
  }

  &.--black {
    color: $green-black;
  }
}
</style>

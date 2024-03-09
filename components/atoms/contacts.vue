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
  display: flex;
  gap: 40px;
  text-align: center;
  margin: 0;
  color: $brown;
  @include font18;
  @include screen-padding;

  @media (min-width: $bp-tablet) {
    justify-content: end;
    @include font28;
  }

  &.--float {
    position: fixed;
  }

  &.--black {
    color: $green-black;
  }
}
</style>

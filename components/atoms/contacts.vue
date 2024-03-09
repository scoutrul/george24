<template>
  <ul
    class="contacts"
    :class="{ 'contacts--black': isBlack, 'contacts--float': isFloat }"
  >
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
  @include font18;
  @include screen-padding;

  list-style: none;
  padding: 0;
  position: absolute;
  z-index: 10;
  display: flex;
  gap: 40px;
  text-align: center;
  margin: 0;
  color: $brown;

  @media (min-width: $bp-tablet) {
    @include font28;

    justify-content: end;
  }

  &--float {
    position: fixed;
  }

  &--black {
    color: $green-black;
  }
}
</style>

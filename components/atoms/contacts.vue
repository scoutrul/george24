<template>
  <ul
    class="contacts"
    :class="{ 'contacts--dark': isDark, 'contacts--float': isFloat }"
  >
    <li>
      <a href="mailto:hello.geovo@gmail.com">
        <Link text="hello.geovo@gmail.com" />
      </a>
    </li>
    <li>
      <a href="https://t.me/meisdigital" target="_blank">
        <Link text="telegram" />
      </a>
    </li>
  </ul>
</template>

<script setup>
import Link from "./link.vue";

defineProps({
  isDark: Boolean,
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
  transition: 0.2s;

  @media (min-width: $bp-tablet) {
    @include font28;

    justify-content: flex-end;
  }

  &--float {
    position: fixed;
  }

  &--dark {
    color: $green-black;
  }
}
</style>

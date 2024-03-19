<template>
  <section class="footer">It’s time to plan, design, grow. Together.</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  @include font28-40;

  padding-top: 40px;

  @media (min-width: $bp-tablet) {
    padding-top: 80px;
  }

  @media (min-width: $bp-desktop) {
    @include font64;
    padding-top: 160px;
  }

  @media (min-width: $bp-full) {
    padding-top: 208px;
  }
}
</style>

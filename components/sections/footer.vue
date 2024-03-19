<template>
  <section class="footer">It’s time to plan, design, grow. Together.</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  color: $green-black;
  position: absolute;
  top: 120px;

  @include font28-40;

  @media (min-width: $bp-tablet) {
    top: 140px;
  }

  @media (min-width: $bp-desktop) {
    @include font64;
    top: 200px;
  }
}
</style>

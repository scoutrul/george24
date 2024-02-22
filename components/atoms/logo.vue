<template>
  <svg
    width="66"
    height="64"
    viewBox="0 0 66 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="logo"
    :class="{ 'logo--black': isBlack }"
  >
    <path
      d="M16.5201 31.7581H25.2246L32.4286 38.8367L39.6708 31.7823H65.2075L32.4191 64L0 32.1452L32.7146 0V8.55299L8.7045 32.1452L32.4191 55.447L50.348 37.8302H42.2046L32.4097 47.3711L16.5201 31.7581Z"
      fill="none"
    />
  </svg>
</template>

<script setup>
defineProps({
  isBlack: Boolean,
});
</script>

<style lang="scss" scoped>
.logo {
  path {
    fill: #f0ece3;
  }
  &--black {
    path {
      fill: #0f2e2f;
    }
  }
}
</style>

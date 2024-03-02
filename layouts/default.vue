<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/layout.scss";

.layout {
  background: $brown;
  position: relative;
}
</style>

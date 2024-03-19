<template>
  <section class="section">
    <div class="section__container">
      <slot></slot>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.section {
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  @include page-padding;

  &__container {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>

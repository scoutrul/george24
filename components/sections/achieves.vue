<template>
  <section class="achieves">
    <div class="achieves__value">32.6M</div>
    <div class="achieves__message">
      people interact with my solutions<br
        class="achieves_message-break"
      />monthly in over 30&nbsp;countries.
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.achieves {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  &__value {
    @include font96;

    @media (min-width: $bp-tablet) {
      @include font160;
    }
  }

  &__message {
    text-align: center;
    @include font28;

    @media (min-width: $bp-tablet) {
      @include font40;
    }
  }

  &__message-break {
    display: none;

    @media (min-width: $bp-tablet) {
      display: flex;
    }
  }
}
</style>

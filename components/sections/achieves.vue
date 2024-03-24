<template>
  <section class="achieves">
    <div class="achieves__chart">
      <svg
        class="achieves__chart-bg"
        viewBox="0 0 1920 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z"
          fill="#CED0C8"
        />
      </svg>
      <svg
        class="achieves__chart-bg achieves__chart-bg--flip"
        viewBox="0 0 1920 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z"
          fill="#CED0C8"
        />
      </svg>
    </div>
    <div class="achieves__value">32.6M</div>
    <div class="achieves__message">
      people&nbsp;interact&nbsp;with&nbsp;my
      <br class="achieves__message-break" />solutions<br
        class="achieves__message-break--desktop"
      />monthly in over
      <br class="achieves__message-break" />
      30&nbsp;countries.
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.achieves {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  position: static !important;

  &__chart {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
  }

  &__chart-bg {
    width: 100%;
    max-width: 100vw;

    &--flip {
      transform: scaleY(-1) translateY(2px);
    }
  }

  &__value {
    color: $green-black;
    @include font96;

    @media (min-width: $bp-tablet) {
      @include font160;
    }
  }

  &__message {
    text-align: center;
    color: $green-black;
    @include font18;

    @media (min-width: $bp-tablet) {
      @include font40;
    }
  }

  &__message-break {
    display: flex;

    @media (min-width: $bp-tablet) {
      display: none;
    }
  }

  &__message-break--desktop {
    display: none;

    @media (min-width: $bp-tablet) {
      display: flex;
    }
  }
}
</style>

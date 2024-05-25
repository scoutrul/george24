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
    <div class="achieves__value">
      <span ref="numbers" class="achieves__value-number"> 0 </span>
      M
    </div>
    <div class="achieves__message">
      people interact with&nbsp;my solutions<br />
      monthly in over 30&nbsp;countries.
    </div>
  </section>
</template>

<script setup>
const numbers = ref(null);
const targetIsVisible = useElementVisibility(numbers);
const isPlayed = ref(false);

watch(targetIsVisible, (value) => {
  if (value && !isPlayed.value) {
    useAnime({
      targets: numbers.value,
      innerHTML: [0, 32.6],
      easing: "cubicBezier(0,1,0,1)",
      round: 10,
      duration: 3000,
      delay: 500,
      direction: "normal",
    });
    isPlayed.value = true;
  }
});
</script>

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
    display: inline-flex;

    @include font96;

    @media (min-width: $bp-tablet) {
      @include font160;
    }

    &-numbers {
      display: inline-flex;
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
}
</style>

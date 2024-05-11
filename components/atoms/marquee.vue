<template>
  <NuxtMarquee
    :play="isMarqueeStarted"
    class="marquee"
    :class="{ marquee__slim: !isMarqueeStarted }"
    :auto-fill="isMarqueeStarted"
    speed="100"
  >
    <span
      :data-text="currentSlogan"
      class="glitch"
      :class="{ marquee__text: !isMarqueeStarted }"
      >{{ currentSlogan }}&nbsp;</span
    >
  </NuxtMarquee>
</template>

<script setup>
const isMarqueeStarted = ref(false);

const currentSlogan = ref("");

const changeText2 = (str) => {
  let iteration = 0;

  let interval = null;
  clearInterval(interval);

  interval = setInterval(() => {
    const changedText = str;

    currentSlogan.value = changedText
      .split("")
      .map((letter, index) => {
        if (index === iteration) {
          return changedText[index];
        }
      })
      .join("");

    iteration += 1;
    if (iteration >= str.length + 5) {
      clearInterval(interval);

      iteration = 0;
      //
      isMarqueeStarted.value = true;
      currentSlogan.value = "plan, design, grow,";
    }
  }, 100);
};

onMounted(() => {
  changeText2(`plandesigngrow`);
});
</script>

<style lang="scss">
.marquee {
  &__text {
    min-width: 100%;
    text-align: center;
    display: flex;
  }
  .vfm-marquee {
    justify-content: center;
    align-items: start;
  }

  &__slim {
    .vfm-marquee {
      display: none;

      &:nth-of-type(1) {
        display: flex;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.marquee {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  height: 400px;
  color: $brown;
  user-select: none;
  position: absolute;
  min-width: 100vw;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
  font-size: 300px;
  font-weight: 700;
  line-height: 300px;
  letter-spacing: -0.03em;
  text-align: center;
}

.glitch {
  position: relative;
  animation:
    glitch 3.3s 3.3s infinite,
    glitch 5.5s 5.5s infinite;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: 0;
  overflow: hidden;
  top: 0;
  animation:
    glitch 3.3s 3.35s infinite,
    glitch 5.5s 5.55s infinite;
}

@keyframes glitch {
  1% {
    transform: rotateX(50deg) skewX(70deg);
  }
  2% {
    @media (min-width: $bp-tablet) {
      transform: rotateX(0deg) skewX(0deg);
    }
  }
  3% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
</style>

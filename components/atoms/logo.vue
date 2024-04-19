<template>
  <svg
    ref="logo"
    :class="{ 'logo--black': isBlack }"
    width="214"
    height="214"
    viewBox="0 0 214 214"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="logo"
  >
    <path
      d="M70 107L107 144L134.5 116.5H189.5L107 199L15 107L107 15"
      stroke="#0f2e2f"
      stroke-width="20"
      stroke-linecap="square"
    />
  </svg>
</template>

<script setup>
defineProps({
  isBlack: Boolean,
});

const logo = ref(null);

onMounted(() => {
  useAnime({
    targets: ".logo path",
    strokeDashoffset: [useAnime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1500,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
});
</script>

<style lang="scss">
.logo {
  width: 64px;
  height: 64px;
  path {
    fill: $brown;
  }
  &--black {
    path {
      //fill: $green-black;
    }
  }
}
</style>

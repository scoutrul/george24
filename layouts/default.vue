<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script setup>
import { useTitle } from "@vueuse/core";

const title = useTitle();
const initialTitle = "plan, design, grow";
title.value = initialTitle;

const changeText = () => {
  title.value = initialTitle;
  const letters = "<";

  let interval = null;

  let iteration = 0;

  clearInterval(interval);

  const changedText = title.value;
  interval = setInterval(() => {
    title.value = changedText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return changedText[index];
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iteration >= changedText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 9;
  }, 8);
};

onMounted(() => {
  setInterval(() => {
    changeText();
  }, 5000);
});
</script>

<style lang="scss">
@import "@/assets/scss/layout.scss";

.layout {
  background: $brown;
  position: relative;
}
</style>

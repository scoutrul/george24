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
  let interval = null;
  let iteration = 0;

  clearInterval(interval);

  const changedText = initialTitle;
  interval = setInterval(() => {
    title.value = changedText
      .split("")
      .map((letter, index) => {
        if (index <= iteration) {
          return changedText[index];
        }

        return " ";
      })
      .join("")
      .concat(" |");

    if (iteration > changedText.length) {
      title.value = initialTitle;
      clearInterval(interval);
    }

    iteration += 1;
  }, 120);
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

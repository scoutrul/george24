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

useSeoMeta({
  ogTitle: initialTitle,
  description:
    "My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",
  ogDescription:
    "My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",
  ogImage: "/assets/bg_art_portrait.png",
});

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

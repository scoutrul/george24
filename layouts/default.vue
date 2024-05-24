<template>
  <NuxtPage class="layout">
    <slot />
  </NuxtPage>
</template>

<script setup>
import { useTitle } from "@vueuse/core";
const isWindowFocused = useWindowFocus();
const title = useTitle();

const initialTitle = "plan, design, grow";
title.value = initialTitle;

const changeTitleText = () => {
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

const {
  app: { baseURL },
} = useRuntimeConfig();

useServerHead({
  link: [
    {
      href: `${baseURL}assets/ABC_Diatype_Regular.woff2`,
      rel: "preload",
      type: "font/woff2",
      as: "font",
      crossorigin: true,
    },
  ],
});

useSeoMeta({
  ogTitle: initialTitle,
  description:
    "My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",
  ogDescription:
    "My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",
  ogImage: "/cover.webp",
});

onMounted(() => {
  setInterval(() => {
    if (!isWindowFocused.value) {
      title.value = initialTitle;
    } else {
      changeTitleText();
    }
  }, 5000);
});
</script>

<style lang="scss">
@import "@/assets/scss/layout.scss";

.layout {
  background: $brown;
  position: relative;

  &__loading {
    position: absolute;
    z-index: 1000;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  filter: grayscale(1) blur(100px);
}
</style>

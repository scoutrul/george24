<template>
  <span
    ref="content"
    class="link"
    :style="{ 'min-width': initialWidth, 'max-width': initialWidth }"
    @mouseover="changeText"
    >{{ text }}
  </span>
</template>

<script setup>
defineProps({
  text: { type: String, default: "" },
});

const content = ref();

const initialWidth = ref("initial");

const isPlaying = ref(false);

const REPEAT_TIME = 8;

const changeText = (event) => {
  if (isPlaying.value) return;
  const letters = "abcdefghijklmnopqrstuvwxyz";

  let interval = null;

  let iteration = 0;

  clearInterval(interval);

  const changedText = event.target.innerText;
  interval = setInterval(() => {
    isPlaying.value = true;
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return changedText[index];
        }

        const allChars = changedText + letters;
        return allChars[Math.floor(Math.random() * allChars.length)];
      })
      .join("");

    if (iteration >= changedText.length || iteration >= REPEAT_TIME) {
      clearInterval(interval);
      isPlaying.value = false;

      if (iteration >= REPEAT_TIME) {
        event.target.innerText = changedText;
      }
    }

    iteration += 1 / 3;
  }, 32);
};

onMounted(() => {
  initialWidth.value = content.value.offsetWidth + "px";
});
</script>

<style lang="scss" scoped>
.link {
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-align: left;
}
</style>

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
const props = defineProps({
  text: { type: String, default: "" },
  preStart: { type: Boolean, default: false },
});

const content = ref();

const initialWidth = ref("initial");

const isPlaying = ref(false);

const REPEAT_TIME = 8;

const changeText = () => {
  if (isPlaying.value) return;
  const letters = "abcdefghijklmnopqrstuvwxyz";

  let interval = null;

  let iteration = 0;

  clearInterval(interval);

  const changedText = content.value.innerText;
  interval = setInterval(() => {
    isPlaying.value = true;
    content.value.innerText = content.value.innerText
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
        content.value.innerText = changedText;
      }
    }

    iteration += 1 / 3;
  }, 32);
};

onMounted(() => {
  initialWidth.value = content.value.offsetWidth + "px";

  if (props.preStart) changeText();
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

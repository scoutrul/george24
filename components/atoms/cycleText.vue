<template>
  <span class="cycle-text">{{ currentSlogan }}</span>
</template>

<script setup>
const emit = defineEmits(["isAnimationEnd"]);
const props = defineProps({
  text: { type: String, default: "" },
  count: { type: Number, default: 0 },
  speed: { type: Number, default: 128 },
});

const currentSlogan = ref("");

const animateText = (str) => {
  let iteration = 0;
  let cycle = 0;

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
    if (iteration === str.length) {
      iteration = 0;
      cycle += 1;
    }
    if (cycle === props.count) {
      emit("isAnimationEnd");
      clearInterval(interval);
      cycle = 0;
    }
  }, props.speed);
};

onMounted(() => {
  animateText(props.text);
});
</script>

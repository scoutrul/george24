<template>
  <NuxtMarquee class="marquee" auto-fill :speed="speed">
    <span :data-text="text">{{ text }}&nbsp;</span>
  </NuxtMarquee>
</template>

<script setup>
defineProps({
  text: { type: String, default: "" },
  speed: { type: Number, default: 100 },
});
</script>

<style scoped>
.marquee {
  height: 100%;
}
</style>

<template>
  <div class="works">
    <div class="works__header">Works</div>
    <ul class="works__list">
      <li v-for="(item, index) in list" :key="index" class="works__item">
        <Work :header="item.header" :text="item.text" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Work from "../atoms/work.vue";

const props = defineProps({
  list: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped>
.works {
  &__item {
    padding: 16px 0;
    border-bottom: 1px solid $grey;
  }

  &__header {
    @include font40-64;
    margin-bottom: 36px;
    color: $green-black;
    margin-top: 120px;

    @media (min-width: $bp-tablet) {
      margin-top: 80px;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
  }
}
</style>

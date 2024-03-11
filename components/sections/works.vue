<template>
  <section class="works">
    <div class="works__header">Works</div>
    <ul class="works__list">
      <li v-for="(item, index) in list" :key="index" class="works__item">
        <div class="works__item-container">
          <div class="works__item-header">{{ item.header }}</div>
          <div class="works__item-text">
            {{ item.text }}
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  list: { type: Array, default: () => [] },
});
</script>

<style lang="scss" scoped>
.works {
  &__item {
    padding: 16px 0;
    border-bottom: 1px solid $grey;

    &:hover {
      @media (min-width: $bp-tablet) {
        .works__item-container {
          background: $brown-dark;
        }
      }
    }
  }

  &__item-container {
    padding: 28px 0 24px;
    display: flex;
    flex-direction: column;

    @media (min-width: $bp-tablet) {
      flex-direction: row;
      gap: 24px;
      padding: 32px 40px;
    }
  }

  &__header {
    margin-bottom: 80px;
    color: $green-black;
    @include font40-64;
  }

  &__list {
    list-style: none;
    padding: 0;
  }

  &__item-header {
    @include font28-40;
    color: $green-black;
    margin-bottom: 24px;

    @media (min-width: $bp-tablet) {
      flex: 1 0 50%;
    }
  }

  &__item-text {
    @include font18;
    color: $grey;
    margin-bottom: 32px;

    @media (min-width: $bp-tablet) {
      color: $green-black;
      @include font28;
    }
  }
}
</style>

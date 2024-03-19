<template>
  <section class="reviews">
    <div class="reviews__header">What people say</div>
    <ul class="reviews__list">
      <li v-for="(item, index) in list" :key="index" class="reviews__item">
        <div class="reviews__item-container">
          <div class="reviews__item-text">{{ item.text }}</div>
          <div class="reviews__item-author">
            <div class="reviews__item-name">
              {{ item.name }}
            </div>
            <div class="reviews__item-from">
              {{ item.from }}
            </div>
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
.reviews {
  overflow: hidden;

  &__header {
    margin-bottom: 80px;
    color: $green-black;
    @include font40-64;
  }

  &__list {
    overflow: scroll hidden;
    list-style: none;
    padding: 0;
    gap: 24px;
    display: flex;
    @include outline-horizontal-padding;

    @media (min-width: $bp-tablet) {
      gap: 32px;
    }
  }

  &__item {
    height: fit-content;
    align-self: end;
    border: 1px solid $grey;
    border-radius: 56px 56px 56px 0;
    flex: 1 0 330px;

    @media (min-width: $bp-tablet) {
      flex: 1 0 402px;
    }

    @media (min-width: $bp-desktop) {
      flex: 1 0 418px;
    }

    @media (min-width: $bp-full) {
      flex: 1 0 560px;
    }
  }

  &__item-container {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  &__item-text {
    @include font28-40;
    color: $green-black;

    @media (min-width: $bp-full) {
      @include font64;
    }
  }

  &__item-name {
    @include font18-28;
    color: $green-black;
  }

  &__item-from {
    @include font18-28;
    color: $grey;

    @media (min-width: $bp-tablet) {
      flex: 1 1 50%;
    }
  }
}
</style>

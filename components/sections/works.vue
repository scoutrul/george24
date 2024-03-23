<template>
  <section class="works">
    <div class="works__header">Works</div>
    <ul class="works__list">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="works__item"
        @mouseover="links[index] = true"
        @mouseout="links[index] = false"
      >
        <div class="works__item-container">
          <div class="works__item-header">
            <template v-if="!links[index]">
              {{ item.header }}
            </template>
            <Link v-else :text="item.header" :pre-start="true" />
          </div>
          <div class="works__item-text">
            {{ item.text }}
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import Link from "../atoms/link.vue";

const props = defineProps({
  list: { type: Array, default: () => [] },
});

const links = ref({});
links.value = props.list.map(() => {
  return false;
});
</script>

<style lang="scss" scoped>
.works {
  &__item {
    padding: 16px 0;
    border-bottom: 1px solid $grey;

    @media (min-width: $bp-tablet) {
      &:hover {
        cursor: pointer;

        .works__item-container {
          background: $brown-dark;
          border-radius: 8px;
        }
        .works__item-text {
          color: $green-black;
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

  &__item-header {
    @include font28-40;
    color: $green-black;
    margin-bottom: 24px;

    @media (min-width: $bp-tablet) {
      flex: 1 0 50%;
      margin-bottom: 0;
    }
  }

  &__item-text {
    @include font18;
    color: $grey;

    @media (min-width: $bp-tablet) {
      flex: 1 1 50%;
      @include font28;
    }
  }
}
</style>

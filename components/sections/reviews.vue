<template>
  <section class="reviews">
    <div class="reviews__header">What people say</div>
    <ul ref="listRef" class="reviews__list">
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
    isBlockInnerOffset {{ isBlockInnerOffset }}, listScrollX {{ listScrollX }}
  </section>
</template>

<script setup>
import {
  useMouseInElement,
  useWindowScroll,
  useWindowSize,
} from "@vueuse/core";

defineProps({
  list: Array,
});

const listRef = ref(null);

const { elementPositionY, elementHeight } = useMouseInElement(listRef);

const { y: windowScrollY } = useWindowScroll();

const { height: windowHeight } = useWindowSize();

const { x: listScrollX } = useScroll(listRef);

const isBlockReachedScreenTop = computed(() => {
  return windowScrollY.value > elementPositionY.value;
});

const isBlockReachedScreenBottom = computed(() => {
  return (
    windowScrollY.value >
    elementPositionY.value - windowHeight.value + elementHeight.value
  );
});

const isBlockInnerOffset = computed(() => {
  const bottom =
    elementPositionY.value - windowHeight.value + elementHeight.value;
  const top = elementPositionY.value;
  return top - bottom > elementHeight.value
    ? top - bottom
    : elementHeight.value;
});

watch(isBlockReachedScreenTop, (val) => {
  console.log("isBlockReachedScreenTop", val, windowScrollY.value);
});

watch(isBlockReachedScreenBottom, (val) => {
  console.log("isBlockReachedScreenBottom", val, windowScrollY.value);
});

watch(windowScrollY, (val) => {
  console.log("windowScrollY", val);
});

// windowScrollY watch if > isBlockReachedScreenBottom
// && windowScrollY < isBlockReachedScreenTop
// isBlockInnerOffset = 100% = listWidth => scroll
</script>

<style lang="scss" scoped>
.reviews {
  &__header {
    margin-bottom: 80px;
    color: $green-black;
    @include font40-64;
  }

  &__list {
    @include page-padding;
    position: absolute;
    left: 0;
    list-style: none;
    gap: 24px;
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: $bp-tablet) {
      gap: 32px;
    }
  }

  &__item {
    height: fit-content;
    align-self: end;
    border: 1px solid $grey;
    border-radius: 56px 56px 56px 0;
    flex: 0 0 330px;

    @media (min-width: $bp-tablet) {
      flex: 0 0 402px;
    }

    @media (min-width: $bp-desktop) {
      flex: 0 0 418px;
    }

    @media (min-width: $bp-full) {
      flex: 0 0 560px;
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

<template>
  <section class="reviews">
    <div
      class="frame"
      :style="{
        right: 0,
        top: 100 + 'px',
        position: 'fixed',
        border: '1px solid blue',
      }"
    >
      <div>windowScrollY {{ windowScrollY }}</div>
      <div>elementPositionY {{ elementPositionY }}</div>
      <div>windowHeight {{ windowHeight }}</div>
      <div>elementHeight {{ elementHeight }}</div>
      <div>listScrollX {{ listScrollX }} (max {{ listScrollXMax }})</div>
    </div>

    <div class="reviews__header">What people say</div>
    <div class="reviews__list-wrapper">
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
    </div>
  </section>
</template>

<script setup>
import {
  useMouseInElement,
  useWindowScroll,
  useWindowSize,
  useScroll,
} from "@vueuse/core";

defineProps({
  list: Array,
});

const listRef = ref(null);

const listScrollXMax = ref(null);

const { elementPositionY, elementHeight } = useMouseInElement(listRef);

const { y: windowScrollY } = useWindowScroll();

const { height: windowHeight, width: windowWidth } = useWindowSize();

const { x: listScrollX } = useScroll(listRef);

const elementBefore = computed(() => {
  return elementPositionY.value - windowHeight.value + elementHeight.value;
});

const elementAfter = computed(() => {
  const calc =
    elementPositionY.value + windowHeight.value - elementHeight.value;
  return calc < elementHeight.value ? elementHeight.value : calc;
});

const scrollView = computed(() => {
  return elementPositionY.value - elementBefore.value;
});

watch(windowScrollY, (ScrollY) => {
  listScrollX.value = ScrollY - elementPositionY.value + scrollView.value;
});

watch(windowWidth, () => {
  listScrollXMax.value = listRef.value.scrollWidth - listRef.value.clientWidth;
});

onMounted(() => {
  listScrollXMax.value = listRef.value.scrollWidth - listRef.value.clientWidth;
});
</script>

<style lang="scss" scoped>
.reviews {
  &__header {
    margin-bottom: 80px;
    color: $green-black;
    @include font40-64;
  }

  &__list-wrapper {
    height: 374px;

    @media (min-width: $bp-tablet) {
      height: 446px;
    }

    @media (min-width: $bp-desktop) {
      height: 594px;
    }
  }

  &__list {
    @include page-padding;

    @media (min-width: $bp-tablet) {
      position: absolute;
    }
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

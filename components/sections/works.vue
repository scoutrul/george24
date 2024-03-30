<template>
  <div id="works" class="works">
    <div class="works__header">Works</div>
    <ul class="works__list">
      <template v-for="(item, index) in data.body">
        <li v-if="isActiveWork(item)" :key="index" class="works__item">
          <Work :header="item.header" :text="item.text" :name="item.name" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import Work from "../atoms/work.vue";
const route = useRoute();

const { data } = await useAsyncData("works", () =>
  queryContent("/works").findOne(),
);

const isActiveWork = computed(() => (item) => item.name !== route.params.name);
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

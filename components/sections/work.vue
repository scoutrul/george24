<template>
  <div class="work">
    <div class="work__content">
      <div class="work__content-title">
        {{ data.content.info.title }}
      </div>
      <div class="work__content-info">
        {{ data.content.info.description }}
      </div>
    </div>
    <div class="work__sections">
      <div
        v-for="item in data.content.info.blocks"
        :key="item.title"
        class="work__section"
      >
        <div class="work__section-title">{{ item.title }}</div>
        <div class="work__section-description" v-html="item.description"></div>
        <div v-if="item.picture" class="work__section-picture">
          <img
            :src="getPreviewImage(item.picture)"
            class="work__section-picture-img"
          />
        </div>
      </div>
    </div>
    <div class="work__info">
      <div class="work__info-sticky">
        <div class="work__info-title">
          {{ data.content.side.title }}
        </div>
        <div
          v-for="item in data.content.side.blocks"
          :key="item.title"
          class="work__info-block"
        >
          <div class="work__info-block-title">{{ item.title }}</div>
          <div class="work__info-block-description">{{ item.description }}</div>
        </div>

        <NuxtLink class="work__next" :to="next" noPrefetch>
          <Link text="next&nbsp;work" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from "../atoms/link.vue";

defineProps({
  next: String,
  data: Object,
});

const getPreviewImage = computed(() => (src) => "/george24/projects/" + src);
</script>

<style lang="scss" scoped>
.work {
  --sticky-width: 420px;

  @media (min-width: $bp-full) {
    --sticky-width: 530px;
  }

  display: flex;
  flex-direction: column;
  color: $green-black;

  &__content {
    color: $green-black;
    min-height: calc(100vh - 215px);
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;

    @media (min-width: $bp-desktop) {
      min-height: calc(100vh - 230px);
      width: calc(100% - var(--sticky-width) - 130px);
    }
  }

  &__content-title {
    @include font40-64;
    margin-bottom: 64px;

    @media (min-width: $bp-tablet) {
      padding-top: 128px;
    }
  }

  &__content-info {
    @include font28-40;
    margin-top: auto;
  }

  &__sections {
    order: 3;

    @media (min-width: $bp-desktop) {
      width: calc(100% - var(--sticky-width) - 130px);
      border-top: 0 solid $grey;
    }
  }

  &__section {
    margin: 128px 0;
  }

  &__section-title {
    margin-bottom: 64px;
    @include font28-40;
  }

  &__section-description {
    @include font18-28;
  }

  &__section-picture {
    @media (max-width: $bp-desktop) {
      @include outline-horizontal-offset;
      width: calc(100vw - 15px);
    }

    margin: 128px auto;
    position: relative;

    @media (min-width: $bp-desktop) {
      width: calc(100% + 64px + 112px);
      left: -64px;
    }
  }

  &__section-picture-img {
    width: 100%;
    object-fit: cover;
  }

  &__info {
    width: 100%;
    position: relative;
    order: 2;
    border-top: 1px solid $grey;
    padding-top: 64px;
    display: flex;
    flex-direction: column;

    @media (min-width: $bp-desktop) {
      min-height: calc(100vh - 128px);
      border: none;
      width: var(--sticky-width);
      box-sizing: border-box;
      position: absolute;
      right: 0;
      height: 100%;
      border-left: 1px solid $grey;
      padding-left: 40px;
      padding-top: 128px;
    }
  }

  &__info-sticky {
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;

    @media (min-width: $bp-desktop) {
      height: calc(100vh - 128px);
    }
  }

  &__info-title {
    @include font28;
    color: $green-black;
    margin-bottom: 64px;
    display: none;

    @media (min-width: $bp-desktop) {
      display: flex;
    }
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 32px;
    @include font18;
  }

  &__info-block-title {
    color: $grey;
  }

  &__info-block-description {
    color: $green-black;
  }

  &__next {
    @include font28;
    color: $green-black;
    display: none;
    text-decoration: none;

    @media (min-width: $bp-desktop) {
      margin-top: auto;
      margin-bottom: 60px;
      display: flex;
    }
  }
}
</style>

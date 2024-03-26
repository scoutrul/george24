<template>
  <div class="works">
    <div class="works__header">Works</div>
    <ul class="works__list">
      <li v-for="(item, index) in list" :key="index" class="works__item">
        <Work :header="item.header" :text="item.text" :name="item.name" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Work from "../atoms/work.vue";

const list = [
  {
    header: "Athletic Greens",
    name: "athletic",
    text: "Original Foundational Nutrition drink to provide daily support where the body needs it most",
  },
  {
    header: "Futurebox",
    name: "futurebox",
    text: "Sell real estate under construction using AR/VR technologies",
  },
  {
    header: "AdGuard DNS",
    name: "adgourd",
    text: "DNS service to help people protect all web traffic on their devices from malicious content",
  },
  {
    header: "Exynex",
    name: "exynex",
    text: "Discover what services track your data online",
  },
  {
    header: "Superseed",
    name: "superseed",
    text: "Advanced cloud storage for geeks & gamers",
  },
  {
    header: "VCards",
    name: "vcards",
    text: "Mobile wallet for managing your virtual cards",
  },
];
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

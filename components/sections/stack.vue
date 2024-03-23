<template>
  <section class="stack">
    <div class="stack__container">
      <div class="stack__description">
        <div class="stack__title">All is about numbers.</div>
        <div class="stack__info">
          My main focus is achieving the target values of key metrics to help
          business grow and attract satisfied customers.
        </div>
      </div>
      <div class="stack__description">
        <div class="stack__title">
          All is about numbers. And people for sure.
        </div>
        <div class="stack__info">
          I do focus on creating an atmosphere and building a business process
          in design teams, making it possible for end users to get a perfect
          seamless experience.
        </div>
      </div>
    </div>
    <div class="stack__skills">
      <div class="stack__sticky">
        <div class="stack__skills-title">Skills</div>
        <ul class="stack__skills-list">
          <li v-for="item in skillList" :key="item" class="stack__skills-item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillList = [
  "User research",
  "Design thinking",
  "Leadership",
  "Figma",
  "Midjourney/ChatGPT",
  "Design systems",
  "UX patterns",
  "Adaptive design",
  "Material 3",
  "iOS 16",
  "Autolayouts",
  "Variants",
  "Animated prototypes",
  "HTML/CSS",
  "CJM",
  "GA/Amplitude",
  "Information architechture",
  "JIRA",
  "Notion/Confulence",
  "A/B testing",
  "Edge scenarios",
];
</script>

<style lang="scss" scoped>
.stack {
  display: flex;
  flex-direction: column;

  @media (min-width: $bp-tablet) {
    flex-direction: row;
  }

  &__container {
    flex: 1 1 50%;

    @media (min-width: $bp-tablet) {
      border-right: 1px solid $grey;
    }

    @media (min-width: $bp-desktop) {
      flex: 1 1 67%;
      padding-bottom: 120px;
    }
  }

  &__description {
    @include font28-40;
    display: flex;
    flex-direction: column;
    color: $green-black;
    margin-bottom: 80px;

    @media (min-width: $bp-tablet) {
      min-height: 980px;
      width: 294px;
      margin-bottom: 0;
    }

    @media (min-width: $bp-desktop) {
      width: 752px;
    }

    @media (min-width: $bp-full) {
      width: 1010px;
      padding-bottom: 190px;
    }
  }

  &__title {
    @include font40-64;
    color: $green-black;
    padding-top: 160px;
    margin-bottom: 64px;

    @media (min-width: $bp-desktop) {
      padding-top: 208px;
      margin-bottom: auto;
    }
  }

  &__sticky {
    position: sticky;
    top: 0;

    padding-top: 160px;

    @media (min-width: $bp-desktop) {
      padding-top: 208px;
    }
  }

  &__skills {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    padding-bottom: 92px;

    @media (min-width: $bp-tablet) {
      margin-left: 24px;
    }

    @media (min-width: $bp-desktop) {
      margin-left: 40px;
      flex: 1 1 33%;
      padding-top: 208px;
    }
  }

  &__skills-title {
    @include font18;
    color: $grey;
    margin-bottom: 16px;
  }

  &__skills-list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  &__skills-item {
    @include font18;
    color: $green-black;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 11px 20px 11px 20px;
    border: 1px solid $grey;
    border-radius: 16px 16px 16px 0;
  }
}
</style>

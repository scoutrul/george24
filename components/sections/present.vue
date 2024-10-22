<template>
  <div class="present">
    <div class="present__specialist">
      My name is George, and for 10 years now I drive digital product design
      teams to deliver complex end-to-end solutions for SaaS companies in the
      most cutting-edge industries.
    </div>
    <div class="present__line"></div>
    <div class="present__stack">
      Based in Tbilisi, Georgia. In spare time I make music, experiment with AI
      and travel.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.present {
  display: flex;
  flex-direction: column;
  color: $green-black;

  @media (min-width: $bp-tablet) {
    flex-direction: row;
  }

  &__specialist,
  &__stack {
    @media (min-width: $bp-tablet) {
      flex: 1 0 calc(50% - 53px);
    }

    @media (min-width: $bp-desktop) {
      flex: 1 0 calc(33% - 75px);
    }
  }

  &__specialist {
    @include font40-64;
    padding: 100px 0 0;

    @media (min-width: $bp-tablet) {
      padding: 10% 0 0;
    }

    @media (min-width: $bp-desktop) {
      flex: 1 0 calc(67% - 75px);
    }
  }

  &__line {
    margin-top: 40px;
    margin-bottom: 40px;
    position: relative;
    height: 1px;
    background: $grey;
    min-width: calc(100% + 32px);
    left: -16px;

    @media (min-width: $bp-tablet) {
      @include outline-horizontal-offset;
      min-width: 1px;
      height: 80vh;
      min-height: 600px;
      margin: 0 24px 0 106px;
      left: 0;
    }
    @media (min-width: $bp-desktop) {
      min-width: 1px;
      margin: 0 32px 0 110px;
      min-height: 820px;
    }
  }

  &__stack {
    @include font28-40;

    @media (min-width: $bp-tablet) {
      padding: 0 0 10%;
      align-self: end;
    }
  }
}
</style>

<template>
  <section class="present">
    <div class="present__specialist">
      My name is George, and for 10 years now I have been making a user-centered
      and data-driven design that helped tens of industry leaders and startups
      to reach new heights.
    </div>
    <div class="present__line"></div>
    <div class="present__stack">
      Proficient in leadership, UX/UI, design systems. Based in Tbilisi,
      Georgia. In spare time I make music, experiment with AI and travel.
    </div>
  </section>
</template>

<style lang="scss" scoped>
.present {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  color: $green-black;

  @media (min-width: $bp-tablet) {
    flex-direction: row;
    padding: 250px 0;
  }

  @media (min-width: $bp-desktop) {
    padding: 80px 0;
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
    padding: 100px 0;

    @media (min-width: $bp-tablet) {
      padding: 124px 0;
    }

    @media (min-width: $bp-desktop) {
      padding: 80px 0;
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
      min-width: 1px;
      height: 820px;
      @include outline-horizontal-padding;
      margin: 0 24px 0 106px;
      left: 0;
    }
    @media (min-width: $bp-desktop) {
      height: 980px;
      min-width: 1px;
      margin: 0 32px 0 110px;
    }

    @media (min-width: $bp-full) {
      height: 1400px;
    }
  }

  &__stack {
    @include font28-40;

    @media (min-width: $bp-tablet) {
      padding: 120px 0;
      align-self: end;
    }

    @media (min-width: $bp-desktop) {
      padding-top: 208px;
    }
  }
}
</style>

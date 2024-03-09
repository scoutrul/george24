<template>
  <section class="present">
    <div class="present__specialist">
      My name is George, and for 10 years now I have been making a user-centered
      and data-driven design for enterprise and startups that helped them to
      reach new heights.
    </div>
    <div class="present__line">
      <div class="present__line-inner"></div>
    </div>
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
  padding: 40px;
  color: $green-black;

  @media (min-width: $bp-desktop) {
    padding: 80px;
  }

  @media (min-width: $bp-tablet) {
    flex-direction: row;
    padding: 250px;
  }

  &__specialist {
    @include font40;
    padding: 100px 0;

    @media (min-width: $bp-tablet) {
      padding: 124px 0;
    }

    @media (min-width: $bp-desktop) {
      @include font64;
      padding: 80px 0;
    }
  }

  &__stack {
    @include font28;

    @media (min-width: $bp-tablet) {
      padding: 120px 0;
      align-self: end;
    }

    @media (min-width: $bp-desktop) {
      @include font40;
      padding-top: 208px;
    }
  }

  &__line {
    margin-top: 40px;
    margin-bottom: 40px;
    position: relative;
    height: 1px;
    width: calc(100% + 32px);

    @media (max-width: $bp-tablet) {
      @include outline-horizontal-padding;
    }

    @media (min-width: $bp-tablet) {
      margin: 0 24px 0 106px;
      height: 680px;
      width: 1px;
    }

    @media (min-width: $bp-desktop) {
      margin: 0 32px 0 110px;
      height: 820px;
    }

    &-inner {
      background: $grey;
      width: 100%;
      position: absolute;
      height: 100%;
    }
  }
}
</style>

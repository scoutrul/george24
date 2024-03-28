<template>
  <div class="work">
    <div class="work__content">
      <div class="work__title">
        Athletic Greens is Original Foundational Nutrition drink to provide
        daily support where the body needs it most.
      </div>
      <div class="work__info">
        This is a non-profit project proposed to me by one of my colleagues. The
        main idea is to transfer the experience of a board game into an
        application. That was what attracted me to take up this idea.
      </div>
      <div class="work__section">
        <div class="work__title">Background</div>
        <div class="work__description">
          At the first stage, the main problem turned out to be the transfer of
          the desktop game experience to the application plane. In the original
          game, the player paints over the dropped figure on the map. We focused
          on finding references for similar types of interaction.
        </div>
      </div>
      <div class="work__section">
        <div class="work__title">Opportunities</div>
        <div class="work__description">
          At this stage, we worked out our hypotheses on the interaction with
          the playing field and the modalities that surround it. We tried
          several options in search of the most obvious way to interact with the
          blocks.
        </div>
        <div class="work__picture"></div>
      </div>
      <div class="work__section">
        <div class="work__title">User interface</div>
        <div class="work__description">
          Also, during the testing process, we came across the fact that the
          rules of the game are far from obvious to users unfamiliar with the
          original game. As a solution, we added the rules of the game as a
          separate step of onboarding.
        </div>
        <div class="work__picture"></div>
      </div>
      <div class="work__section">
        <div class="work__title">Impact</div>
        <div class="work__description">
          The project is currently under development. The planned release date
          is at the end of 2024.
        </div>
      </div>
    </div>
    <div class="work__line"></div>
    <div class="work__info">
      <div class="work__sticky">
        <div class="work__info-title">
          Athletic Greens is nutrition drink to provide daily support for body
        </div>
        <div class="work__info-block">
          <div class="work__info-block-title">Role</div>
          <div class="work__info-block-description">Lead product designer</div>
        </div>
        <div class="work__info-block">
          <div class="work__info-block-title">Scope</div>
          <div class="work__info-block-description">
            Product design, design systems, branding
          </div>
        </div>
        <div class="work__info-block">
          <div class="work__info-block-title">Platform</div>
          <div class="work__info-block-description">Web, iOS</div>
        </div>
        <div class="work__next">next work</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work {
  display: flex;
  flex-direction: column;
  color: $green-black;

  @media (min-width: $bp-tablet) {
    flex-direction: row;
  }

  &__sticky {
    position: sticky;
    top: 40px;
  }
  &__content {
    color: $green-black;
  }

  &__title {
    @include font64;
  }

  &__info {
    @include font40;
  }

  &__description {
    @include font28;
  }

  &__section {
    margin: 128px 0;
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
      @include outline-horizontal-padding;
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

  &__info-title {
    @include font28;
    color: $green-black;
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    @include font18;
  }

  &__info-block-title {
    color: $grey;
  }

  &__info-block-description {
    color: $green-black;
  }

  &__next {
    color: $green-black;
    @include font28;
  }
}
</style>
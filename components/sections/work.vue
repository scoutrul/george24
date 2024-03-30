<template>
  <div class="work">
    <div class="work__content">
      <div class="work__content-title">
        Athletic Greens is Original Foundational Nutrition drink to provide
        daily support where the body needs it most.
      </div>
      <div class="work__content-info">
        This is a non-profit project proposed to me by one of my colleagues. The
        main idea is to transfer the experience of a board game into an
        application. That was what attracted me to take up this idea.
      </div>
    </div>
    <div class="work__sections">
      <div class="work__section">
        <div class="work__section-title">Background</div>
        <div class="work__section-description">
          At the first stage, the main problem turned out to be the transfer of
          the desktop game experience to the application plane. In the original
          game, the player paints over the dropped figure on the map. We focused
          on finding references for similar types of interaction.
        </div>
      </div>
      <div class="work__section">
        <div class="work__section-title">Opportunities</div>
        <div class="work__section-description">
          At this stage, we worked out our hypotheses on the interaction with
          the playing field and the modalities that surround it. We tried
          several options in search of the most obvious way to interact with the
          blocks.
        </div>
        <div class="work__section-picture"></div>
      </div>
      <div class="work__section">
        <div class="work__section-title">User interface</div>
        <div class="work__section-description">
          Also, during the testing process, we came across the fact that the
          rules of the game are far from obvious to users unfamiliar with the
          original game. As a solution, we added the rules of the game as a
          separate step of onboarding.
        </div>
        <div class="work__section-picture"></div>
      </div>
      <div class="work__section">
        <div class="work__section-title">Impact</div>
        <div class="work__section-description">
          The project is currently under development. The planned release date
          is at the end of 2024.
        </div>
      </div>
    </div>
    <div class="work__info">
      <div class="work__info-sticky">
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
        <NuxtLink class="work__next" :to="'work-' + next"
          >next work {{ next }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  next: String,
});
</script>

<style lang="scss" scoped>
.work {
  --sticky-width: 512px;
  --sticky-padding: 40px;

  @media (min-width: $bp-full) {
    --sticky-width: 530px;
  }

  display: flex;
  flex-direction: column;
  color: $green-black;

  &__content {
    color: $green-black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;

    @media (min-width: $bp-desktop) {
      width: calc(100% - var(--sticky-width) - var(--sticky-padding) - 130px);
    }
  }

  &__content-title {
    @include font40-64;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  &__content-info {
    @include font28-40;
    margin-top: auto;
  }

  &__sections {
    order: 3;

    @media (min-width: $bp-desktop) {
      width: calc(100% - var(--sticky-width) - var(--sticky-padding) - 130px);
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

    height: 100vh;
    min-height: 600px;
    background: $green-black;
    margin: 128px auto;
    position: relative;

    @media (min-width: $bp-desktop) {
      width: calc(100% + 64px + 112px);
      left: -64px;
    }
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
      width: 530px;
      position: absolute;
      right: 0;
      height: 100%;
      border-left: 1px solid $grey;
      padding-left: var(--sticky-padding);
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
    color: $green-black;
    @include font28;
    display: none;

    @media (min-width: $bp-desktop) {
      margin-top: auto;
      margin-bottom: 120px;
      display: flex;
    }
  }
}
</style>

<template>
  <section class="intro">
    <Contacts is-black is-float />
    <NavMenu is-black is-float />
    <logo is-black class="intro__logo" />
    <div class="intro__slogan">plan, design, grow</div>
  </section>
</template>

<script>
import Logo from "../components/atoms/logo.vue";
import Contacts from "../components/atoms/contacts.vue";
import NavMenu from "../components/atoms/nav.vue";

export default {
  components: { Logo, Contacts, NavMenu },
};
</script>
<style lang="scss" scoped>
.intro {
  position: relative;

  &__logo {
    @media (min-width: $bp-tablet) {
      margin-left: -$padding-step;
    }
  }

  &__logo,
  &__slogan {
    position: fixed;
    z-index: 5;
    @include page-padding;
  }

  &__slogan {
    @include font28;
    color: $green-black;
    transform: translate(146px, 16px);
    display: none;

    @media (min-width: $bp-tablet) {
      display: flex;
    }
  }
}
</style>

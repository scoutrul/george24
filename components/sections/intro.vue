<template>
  <section class="intro">
    <Contacts is-black is-float />
    <NavMenu is-black is-float />
    <logo is-black class="intro__logo" />
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
  &__logo {
    position: fixed;
    z-index: 5;
    @include main-padding;
  }
}
</style>

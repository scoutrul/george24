<template>
  <section class="intro">
    <Contacts is-black is-float />
    <NavMenu is-black is-float />
    <logo is-black class="intro__logo" @click="logoClick" />
    <div class="intro__slogan">plan, design, grow</div>
  </section>
</template>

<script setup>
import Logo from "../atoms/logo.vue";
import Contacts from "../atoms/contacts.vue";
import NavMenu from "../atoms/nav.vue";

const { y } = useWindowScroll({ behavior: "smooth" });

const route = useRoute();
const router = useRouter();

const logoClick = () => {
  if (route.name === "index") {
    y.value = 0;
  } else {
    router.push({ name: "index" });
  }
};
</script>

<style lang="scss" scoped>
.intro {
  min-height: 96px;

  @media (min-width: $bp-tablet) {
    min-height: 128px;
  }

  &__logo {
    cursor: pointer;
  }

  &__logo,
  &__slogan {
    position: fixed;
    z-index: 5;
    @include page-margin-fix;
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

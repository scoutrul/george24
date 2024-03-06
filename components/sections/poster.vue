<template>
  <section class="poster">
    <div class="logo-white"></div>
    <NavMenu />
    <Contacts />

    <picture>
      <source
        media="(orientation: portrait)"
        srcset="@/assets/bg_art_portrait.png, @/assets/bg_art_portrait@2x.png"
      />
      <source
        media="(orientation: landscape)"
        srcset="@/assets/bg_landscape.png, @/assets/bg_landscape@2x.png"
      />
      <img src="@/assets/bg_art_mobile.png" alt="" class="george-pic" />
    </picture>

    <NuxtMarquee auto-fill class="marquee">
      <span data-text="plan, design, grow" class="glitch">
        plan,&nbsp;design,&nbsp;grow,&nbsp;
      </span>
    </NuxtMarquee>
  </section>
</template>

<script>
import NavMenu from "../components/atoms/nav.vue";
import Contacts from "../components/atoms/contacts.vue";

export default {
  components: { NavMenu, Contacts },
};
</script>

<style lang="scss" scoped>
.poster {
  background-color: $green-black;
  min-height: 440px;
  height: 100vh;
  box-sizing: border-box;
  z-index: 20;
  overflow: hidden;
  position: relative;

  @media (orientation: landscape) {
    min-height: 660px;
  }

  @media (min-width: $bp-tablet) {
    max-height: 1094px;
  }
}

.george-pic {
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 1;
  position: absolute;
  min-width: 360px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.marquee {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  font-size: 300px;
  font-weight: 700;
  line-height: 300px;
  height: 400px;
  letter-spacing: -0.03em;
  color: $brown;
  user-select: none;
  position: absolute;
  min-width: 100vw;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
}

.logo-white {
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  background-image: url("@/assets/logo-white.svg");
  background-size: 64px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: $padding-min $padding-min;

  @media (min-width: $bp-tablet) {
    background-position: $padding-mid $padding-mid;
  }

  @media (min-width: $bp-desktop) {
    background-position: $padding-large $padding-mid;
  }

  @media (min-width: $bp-full) {
    background-position: $padding-extra $padding-mid;
  }
}

.glitch {
  position: relative;
  animation:
    glitch 5s 5s infinite,
    glitch 7s 7s infinite;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: 0;
  overflow: hidden;
  top: 0;
  animation:
    glitch 5s 5.05s infinite,
    glitch 7s 7.05s infinite;
}

@keyframes glitch {
  1% {
    transform: rotateX(50deg) skewX(70deg);
  }
  2% {
    @media (min-width: $bp-tablet) {
      transform: rotateX(0deg) skewX(0deg);
    }
  }
  3% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
</style>

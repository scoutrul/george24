<template>
  <section class="poster">
    <div class="logo-white"></div>
    <NavMenu />

    <picture>
      <source
        media="(max-width: 360px) and (orientation: portrait)"
        srcset="@/assets/bg_art_mobile.png, @/assets/bg_art_mobile@2x.png"
      />
      <source
        media="(min-width: 361px) and (max-width: 903px) and (orientation: portrait)"
        srcset="@/assets/bg_art_tablet.png, @/assets/bg_art_tablet@2x.png"
      />
      <source
        media="(max-width: 904px) and (orientation: landscape)"
        srcset="@/assets/bg_art_desktop.png, @/assets/bg_art_desktop@2x.png"
      />
      <img src="@/assets/bg_art_mobile.png" alt="Georgy" class="george-pic" />
    </picture>

    <NuxtMarquee auto-fill class="marquee">
      <span data-text="plan, design, grow" class="glitch">
        plan,&nbsp;design,&nbsp;grow,&nbsp;
      </span>
    </NuxtMarquee>

    <ul class="contacts">
      <li>hello.geovo@gmail.com</li>
      <li>telegram</li>
    </ul>
  </section>
</template>

<script>
import NavMenu from "../components/atoms/nav.vue";

export default {
  components: { NavMenu },
};
</script>

<style lang="scss" scoped>
.poster {
  background-color: $green-black;
  height: 740px;
  z-index: 4;
  overflow: hidden;
  position: relative;

  @media (min-width: $bp-tablet) {
    height: 1094px;
  }
}

.contacts {
  list-style: none;
  padding: 0;
  position: absolute;
  z-index: 10;
  bottom: $padding-v-min;
  right: $padding-min;
  left: $padding-min;
  display: flex;
  gap: 40px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0;
  font-family: "ABC Diatype Light", sans-serif;

  @media (min-width: $bp-tablet) {
    font-family: "ABC Diatype Regular", sans-serif;
    justify-content: end;
    right: $padding-mobile;
    left: $padding-mobile;
    bottom: $padding-mobile;
  }

  @media (min-width: $bp-desktop) {
    right: $padding-tablet;
    left: $padding-tablet;
    font-size: 28px;
    line-height: 34px;
    bottom: $padding-desktop;
  }

  @media (min-width: $bp-full) {
    right: $padding-desktop;
    left: $padding-desktop;
  }

  li {
    color: $brown;
  }
}

.marquee {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  font-size: 300px;
  font-weight: 700;
  line-height: 300px;
  letter-spacing: -0.03em;
  color: $brown;
  user-select: none;
  position: absolute;
  min-width: 100vw;
  left: 0;
  height: 100%;
  top: -172px;
  z-index: 0;

  @media (min-width: $bp-tablet) {
    top: 0;
  }
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

.george-pic {
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 1;
  position: absolute;
  //width: 360px;
  //height: 820px;
  //
  //@media (min-width: 360px) and (max-width: 904px) and (orientation: portrait) {
  //  width: 904px;
  //  height: 1091px;
  //}
  //
  //@media (orientation: landscape) {
  //  width: 1920px;
  //  height: 1091px;
  //}
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

<template>
  <section class="poster">
    <div class="logo-white"></div>
    <ul class="nav">
      <li>works</li>
      <li>get cv</li>
    </ul>

    <picture>
      <source
        media="(max-width: 360px)"
        srcset="@/assets/bg_art_mobile.png, @/assets/bg_art_mobile@2x.png"
      />
      <source
        media="(min-width: 361px) and (max-width: 900px)"
        srcset="@/assets/bg_art_tablet.png, @/assets/bg_art_tablet@2x.png"
      />
      <source
        media="(min-width: 900px) and (max-width: 1299px)"
        srcset="@/assets/bg_art_desktop.png, @/assets/bg_art_desktop@2x.png"
      />
      <source
        media="(min-width: 1300px)"
        srcset="@/assets/bg_art_desktop2x.png"
      />
      <img
        src="@/assets/bg_art_desktop2x.png"
        alt="Georgy"
        class="george-pic"
      />
    </picture>

    <NuxtMarquee auto-fill class="marquee">
      <div class="glitch" data-text="plan, ">plan,&nbsp;</div>
      <div class="glitch" data-text="design, ">design,&nbsp;</div>
      <div class="glitch" data-text="grow, ">grow,&nbsp;</div>
    </NuxtMarquee>
  </section>
</template>

<style lang="scss" scoped>
.poster {
  background-color: $green-black;
  min-height: 820px;
  z-index: 4;
  overflow: hidden;

  @media (min-width: $bp-tablet) {
    min-height: 1094px;
  }

  @media (min-width: $bp-desktop) {
    min-height: 980px;
  }

  @media (min-width: $bp-full) {
    min-height: 1091px;
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
  top: 0;
  z-index: 0;
}

.nav {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  padding: 0;
  display: flex;
  list-style: none;
  height: 64px;
  margin: 0 0 0 auto;
  align-items: center;
  width: fit-content;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: $brown;

  li {
    margin-left: 24px;
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
  height: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 1;
  position: absolute;
}

.glitch {
  position: relative;
  animation: glitch 5s 5s infinite;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: 0;
  overflow: hidden;
  top: 0;
  animation: glitch 5s 5.05s infinite;
}

@keyframes glitch {
  1% {
    transform: rotateX(10deg) skewX(90deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
  70% {
    transform: rotateX(0deg) skewX(0deg);
  }
  71% {
    transform: rotateX(10deg) skewX(70deg);
  }
  72% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
</style>

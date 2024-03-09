<template>
  <NuxtMarquee auto-fill class="marquee">
    <span data-text="plan, design, grow" class="glitch">
      plan,&nbsp;design,&nbsp;grow,&nbsp;
    </span>
  </NuxtMarquee>
</template>

<style lang="scss" scoped>
.marquee {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  height: 400px;
  color: $brown;
  user-select: none;
  position: absolute;
  min-width: 100vw;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
  font-size: 300px;
  font-weight: 700;
  line-height: 300px;
  letter-spacing: -0.03em;
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

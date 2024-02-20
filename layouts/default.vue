<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "ABC Diatype";
  src: url("@/assets/font.woff2") format("woff2");
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: "ABC Diatype", sans-serif;
}

.layout {
  background: #f0ece3;
  position: relative;
}
</style>

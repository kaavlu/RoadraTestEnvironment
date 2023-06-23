<template>
  <router-link
    class="main-logo-wrapper"
    :style="`min-width: ${width}px; max-width: ${width}px; padding-top: calc(${
      (362 / 898) * width
    }px`"
    :to="link"
    :target="target"
  >
    <img
      v-if="white"
      class="main-logo"
      :style="`min-width: ${width}px;`"
      src="@/assets/img/media/logo-white.png"
      alt="Roadra"
    />
    <img
      v-else-if="black"
      class="main-logo"
      :style="`min-width: ${width}px;`"
      src="@/assets/img/media/logo-black.png"
      alt="Roadra"
    />
    <img
      v-else
      class="main-logo"
      :style="`min-width: ${width}px;`"
      src="@/assets/img/media/logo.png"
      alt="Roadra"
    />
  </router-link>
</template>

<script>
export default {
  name: "Logo",
  props: {
    width: {
      type: Number,
      default: 90,
    },
    white: {
      type: Boolean,
      default: false,
    },
    black: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: "/",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
  methods: {
    newLogoRoute() {
      window.open(process.env.VUE_APP_URL, "_blank");
    },
  },
};
</script>

<style scoped>
.main-logo-wrapper {
  position: relative;
  display: flex;
  height: 0;
  min-width: 90px;
  max-width: 90px;
  padding-top: calc(362 / 898 * 90px);
  cursor: pointer !important;
  transition: all 200ms ease;
  /* Offsets space in roadra logo */
  margin-right: -3px;
}
.main-logo-wrapper:active {
  transform: scale(0.95);
}
.main-logo {
  position: absolute;
  z-index: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  max-width: 90px;
  height: auto;
}
</style>

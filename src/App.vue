<template>
  <div id="app">
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import MainHeader from "@/components/header/MainHeader.vue"
export default {
  components: {
    MainHeader
  },
};
</script>

<style>
  @import "./assets/styles/general.css";
</style>

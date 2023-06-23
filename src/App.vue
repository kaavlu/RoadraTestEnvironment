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
  mounted() {
    // console.log(this.$router.currentRoute)
    // if (this.$router.currentRoute.path == '/') {
    //   this.$store.commit("generalModal", "HomeWelcomeModal")
    // }
  }
};
</script>

<style>
  @import "./assets/styles/general.css";
</style>

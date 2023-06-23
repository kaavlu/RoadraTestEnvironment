<template>
  <div class="page-container">
    <!-- Components here -->
    <HomeHero />
    <HomeLinks />
  </div>
</template>

<script>
import HomeHero from '@/components/home/HomeHero.vue'
import HomeLinks from '@/components/home/HomeLinks.vue'

export default {
  name: "HomeVIew",
  components: {
    HomeHero,
    HomeLinks
  },
}
</script>

<style scoped>
.page-container {
  max-width: var(--home-desktop-max-width);
  margin: 0px auto;
}
</style>
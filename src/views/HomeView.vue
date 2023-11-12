<template>
  <div class="home-container">
    <HomeHero />
    <HomeLinks />
  </div>
</template>

<script>
import HomeHero from '@/components/home/hero/HomeHero.vue'
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
.home-container {
  max-width: var(--home-desktop-max-width);
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
</style>

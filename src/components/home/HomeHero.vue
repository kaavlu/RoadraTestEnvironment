<template>
  <div class="home-hero">
    <h1>Roadra Test Environment</h1>
  </div>
</template>

<script>
export default {
  name: "HomeHero"
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 28px;
}


@media (max-width: 768px) {
  .home-hero {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    padding: 24px;
  }
}
</style>
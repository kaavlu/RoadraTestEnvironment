<template>
  <div>
    <div class="links-container">
      <div v-for="(link, i) in homePageLinks" :key="i" class="link">
        <MainButton :content="link.name" @submit="$router.push(link.path)" />
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import MainButton from "@/components/general/styleComponents/MainButton.vue"

export default {
  name: "HomeHero",  
  components: {
    MainButton
  },
  computed: {
    ...mapGetters(['homePageLinks'])
  }
}
</script>

<style scoped>
.links-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: center;
  margin-top: 48px;
}
.link {
  width: 300px;
  max-width: calc(100vw - 48px);
}
</style>
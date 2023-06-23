<template>
  <div class="links-wrapper">
    <div class="links-container">
      <h1>Projects</h1>
      <MainButton
        class="link-button"
        v-for="(link, i) in homePageLinks"
        :key="i"
        :content="link.name"
        @submit="$router.push(link.path)"
      />
      <MainButton
        content="A cool modal"
        class="link-button"
        @submit="$store.commit('generalModal', 'CoolModal')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MainButton from "@/components/general/styleComponents/MainButton.vue";

export default {
  name: "HomeHero",
  components: {
    MainButton,
  },
  computed: {
    ...mapGetters(["homePageLinks"]),
  },
};
</script>

<style scoped>
.links-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 48px;
}
.links-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: center;
}
.link-button {
  width: 100%;
  max-width: 300px;
}

h1 {
  font-size: 18px;
  font-weight: 700;
}
</style>

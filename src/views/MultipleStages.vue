<!-- PostListingScreen.vue -->
<template>
  <div>
    <h1>Hello Vue.js!</h1>
    <p>Status: {{ sellAppListing.status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "MultipleStages",
  computed: {
    ...mapGetters(['sellAppListing']),
  },
  methods: {
    ...mapMutations(['updateSellAppListingStatus']),
    changeStatus() {
      const statuses = ['created', 'documents checked', 'auction', 'post-auction/sold'];
      const currentStatusIndex = statuses.indexOf(this.sellAppListing.status);
      const nextStatusIndex = (currentStatusIndex + 1) % statuses.length;
      this.updateSellAppListingStatus(statuses[nextStatusIndex]);
    },
  },
};
</script>

<style scoped>
</style>

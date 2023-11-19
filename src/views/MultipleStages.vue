<!-- PostListingScreen.vue -->
<template>
  <div>
    <Timeline :currentStatus="sellAppListing.status" 
    @changeStatus="updateStatus" />
    <h1>Hello Vue.js!</h1>
    <p>Status: {{ sellAppListing.status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Timeline from './Timeline.vue';

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
    updateStatus(newStatus) {
      this.updateSellAppListingStatus(newStatus);
    },
  },
  components: {
    Timeline,
  },
};
</script>

<style scoped>
</style>

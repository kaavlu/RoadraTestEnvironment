<!-- Timeline.vue -->
<template>
  <div>
    <div v-for="(status, index) in statuses" :key="index" class="timeline-bubble" :class="{ 'active': index === currentStatusIndex }">
      <span class="bubble-text">{{ status }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentStatus: String,
  },
  data() {
    return {
      statuses: ['created', 'documents checked', 'auction', 'post-auction/sold'],
    };
  },
  computed: {
    currentStatusIndex() {
      return this.statuses.findIndex(status => status === this.currentStatus);
    },
  },

};
</script>
  
  <style scoped>
  .timeline-bubble {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ccc;
  display: inline-block;
  margin-right: 80px;
  margin-left: 80px;
  margin-top: 100px;
  margin-bottom: 100px;
  position: relative;
  text-align: center;
  line-height: 80px;
} 
.timeline-bubble .bubble-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 15px;
}

.timeline-bubble.active {
  background-color: #ed1d58;
}

.timeline-bubble:before {
  content: '';
  position: absolute;
  top: 50%;
  left: -160px;
  height: 2px;
  width: 160px;
  background-color: #ccc;
}

.timeline-bubble:first-child:before {
  display: none;
}
</style>

<template>
  <div>
    <GeneralModal v-if="$store.getters.generalModal" />
    <!-- <SideModal v-if="$store.getters.sideModal" />
    <FullscreenLoader v-if="$store.getters.fullScreenLoader" /> -->
  </div>
</template>

<script>
import GeneralModal from "@/components/general/modals/GeneralModal.vue"
export default {
  name: "Modals",
  components: {
    GeneralModal
  },
  props: {
    route: String,
  },
};
</script>

<style scoped></style>

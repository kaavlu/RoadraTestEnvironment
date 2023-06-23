<template>
  <div class="header-wrapper">
    <div class="header-container">
      <Logo />
    </div>
    <Modals />
  </div>
</template>

<script>
import Logo from "@/components/general/styleComponents/Logo.vue";
import Modals from "@/components/header/Modals.vue";

export default {
  name: 'MainHeader',
  components: { Logo, Modals },
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  margin-bottom: 24px;
}
.header-container {
  display: flex;
  justify-content: center;
  margin: 24px auto;
}

@media (max-width: 768px) {
  .header-container {
    padding: 0px 24px;
  }
}
</style>

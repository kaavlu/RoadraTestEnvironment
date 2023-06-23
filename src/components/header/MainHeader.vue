<template>
  <div class="header-wrapper">
    <div class="header-container">
      <Logo />
    </div>

  </div>
</template>

<script>
import Logo from "@/components/general/styleComponents/Logo.vue"
export default {
  components: { Logo },

}
</script>

<style scoped>

  .header-wrapper {
    width: 100%;
    border-bottom: 1px solid #d6d6d6;
    margin-bottom: 24px;
  }
  .header-container {
    max-width: var(--home-desktop-max-width);
    margin: 12px auto;
  }

  @media(max-width: 768px) {
    .header-container {
      padding: 0px 24px;
    }
  }
</style>
<template>
  <div class="signup-promo-wrapper">
    <div class="card-wrapper">
      <div class="cta-container">
        <h1>
          We help people <br />
          sell their {{window.windowWidth > 768 ? '👉' : 'cars'}}
        </h1>

        <div style="display: flex; gap: 3px; align-items: center">
          <h2>Where do we get inspired for design?</h2>
        </div>
        <BrandCards />

        <p>Ready to make amazing UX? Join us</p>
        <MainButton
          class="cta-button hidden"
          :chevron="true"
          content="Share my link"
          type="border"
          @submit="$router.push('/become-a-dealer')"
        />
      </div>
      <MovingBrands v-if="window.windowWidth > 768" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MainButton from "@/components/general/styleComponents/MainButton.vue";
import MovingBrands from "@/components/home/hero/MovingBrands.vue";
import BrandCards from "@/components/home/hero/BrandCards.vue";

export default {
  name: "HomeHero",
  components: {
    MainButton,
    MovingBrands,
    BrandCards,
  },
  computed: {
    ...mapGetters(["window"]),
  },
};
</script>

<style scoped>
.signup-promo-wrapper {
  width: 100%;
  /* margin-top: -12px; */
  box-sizing: border-box;
}

.card-wrapper {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: #e9e9e9;
  border-radius: 12px;
  padding: 24px;
  gap: 24px;
  height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.2;
}
h2 {
  font-size: 16px;
}
p {
  font-size: 13px;
  color: var(--grey);
  margin: 0;
}

.cta-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  gap: 24px;
}

.cta-button {
  font-size: 15px;
  width: 180px;
}

@media (max-width: 768px) {
  .card-wrapper {
    height: 400px;
  }
  .cta-container {
    gap: 12px;
  }
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 12px;
  }
}
</style>

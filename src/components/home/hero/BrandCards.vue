<template>
  <div class="card-container">
    <div class="aspect-ratio">
      <div class="flip-card">
        <div class="flip-card-inner" :key="currentIndex">
          <div
            class="flip-card-front"
            :style="{ backgroundColor: logoColors[currentIndex].color }"
          >
            <component
              class="logo"
              :is="logoColors[currentIndex].logo"
              :style="{ width: logoColors[currentIndex].width }"
            ></component>
          </div>
          <div
            class="flip-card-back"
            :style="{ backgroundColor: logoColors[nextIndex].color }"
          >
            <component
              class="logo"
              :is="logoColors[nextIndex].logo"
              :style="{ width: logoColors[nextIndex].width }"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppleLogo from "@/components/general/icons/logos/AppleLogo.vue";
import AirbnbLogo from "@/components/general/icons/logos/AirbnbLogo.vue";
import AmazonLogo from "@/components/general/icons/logos/AmazonLogo.vue";
import DoordashLogo from "@/components/general/icons/logos/DoordashLogo.vue";
import UberLogo from "@/components/general/icons/logos/UberLogo.vue";
import StarbucksLogo from "@/components/general/icons/logos/StarbucksLogo.vue";

export default {
  name: "LogoCards",
  components: {
    AppleLogo,
    AirbnbLogo,
    AmazonLogo,
    DoordashLogo,
    UberLogo,
    StarbucksLogo,
  },
  data() {
    return {
      currentIndex: 0,
      logoColors: [
        {
          color: "#fff",
          logo: "AppleLogo",
          width: "40px !important",
          nameColor: "var(--grey)",
        },
        {
          color: "#fafafa ",
          logo: "AirbnbLogo",
          width: "80px !important",
          nameColor: "var(--grey)",
        },
        {
          color: "#fafafa",
          logo: "DoordashLogo",
          width: "110px !important",
          nameColor: "var(--grey)",
        },
      ],
    };
  },
  computed: {
    nextIndex() {
      return (this.currentIndex + 1) % this.logoColors.length;
    },
  },
  methods: {
    cycleLogos() {
      const flipCardInner = this.$el.querySelector(".flip-card-inner");
      flipCardInner.style.transform = "rotateY(180deg)";
      setTimeout(() => {
        this.currentIndex = this.nextIndex;
        flipCardInner.style.transform = "rotateY(0deg)";
      }, 1000);
    },
  },
  mounted() {
    setInterval(() => {
      this.cycleLogos();
    }, 8000);
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
}

.aspect-ratio {
  position: relative;
  width: 100%;
  padding-top: calc(0.63 * 100%); /* 2:3 aspect ratio */
}

.flip-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  border-radius: 12px;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: inherit;
}

.flip-card-front {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
}

.name {
  position: absolute;
  bottom: 24px;
  right: 24px;
  font-size: 10px;
  color: var(--grey);
}
</style>

<template>
  <div class="aspect-ratio">
    <div class="tile-container">
      <div class="columns-wrapper">
        <div
          class="images-column"
          v-for="n in 3"
          :key="n"
          :style="`animation-delay: ${(n - 1) * 5000}ms`"
        >
          <div
            class="image"
            v-for="brand in currentColumns[n - 1]"
            :key="brand"
          >
            <GenImage
              :type="'local'"
              :source="`brandLogos/${brand.toLowerCase()}-logo.png`"
              :w="240"
              :h="180"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GenImage from "@/components/general/styleComponents/GenImage.vue";
import brands from "@/assets/data/brands";
import chunk from "lodash.chunk";

export default {
  name: "Brands",
  components: {
    GenImage,
  },
  props: {
    shown: Boolean,
  },
  data() {
    return {
      interval1: 0,
      interval2: 0,
      interval3: 0,
      loaded: 0,
      brandsShown: [],
      shown2: false,
      shown3: false,
    };
  },
  computed: {
    brandSets() {
      let sets = chunk(brands, 3);
      return sets.filter((set) => {
        return set.length == 3;
      });
    },
    currentColumns() {
      // Uses the timing intervals to switch what is shown in each column
      let column1;
      let column2;
      let column3;

      let columnCount = this.brandSets.length - 1;

      column1 = (0 + this.interval1 * 3) % columnCount;
      column2 = (1 + this.interval2 * 3) % columnCount;
      column3 = (2 + this.interval3 * 3) % columnCount;

      column1 = this.brandSets[column1];
      column2 = this.brandSets[column2];
      column3 = this.brandSets[column3];

      return [column1, column2, column3];
    },
  },
  mounted() {
    // Updated what each column will show every 15 seconds (the length of the animation)
    setInterval(() => {
      this.interval1++;
      setTimeout(() => {
        this.interval2++;
      }, 5000);
      setTimeout(() => {
        this.interval3++;
      }, 10000);
    }, 15000);
  },
};
</script>

<style scoped>
.aspect-ratio {
  content: "";
  display: block;
  height: 400px;
  width: 80%;
  overflow: hidden !important;
  border-radius: 12px;
}

.tile-container {
  border-radius: inherit;
  background: #fafafa;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden !important;
}

.columns-wrapper {
  height: 100%;
  width: auto;
  position: relative;
  overflow: visible;
  display: flex;
  flex-wrap: nowrap;
}

.images-column {
  width: 100%;
  animation: diagonal 15s infinite linear;
  position: absolute;
  display: grid;
  min-width: 33%;
  row-gap: 5%;
  height: 100%;
  transform: translatex(100%) translatey(100%);
}
.image {
  width: 30%;
  height: 100%;
  padding: 12px;
}

/* 
To pitch angle to the right (more up), reduce initial Y and increase then second Y by the same amount
You want all angle changes to be equal and opposite, so that the overall gaps/spacing does not change
as it is now suddenly moving MORE overall
*/
@-webkit-keyframes diagonal {
  0% {
    transform: translatex(100%) translatey(40%);
  }
  100% {
    transform: translatex(-33%) translatey(-60%);
  }
}

@media (max-width: 768px) {
  .aspect-ratio {
    /* H / W ratio * width*/
    padding-top: calc(331 / 468 * 100%);
  }
  .tile-container {
    position: absolute;
    top: 0px;
    left: 0px;
  }
}
</style>

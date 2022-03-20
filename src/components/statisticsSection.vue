<template>
  <section class="statistics-section">
    <div class="container-lg">
      <div class="statistics-section__wrapper">
        <div
          class="statistics-section__wrapper__card"
          v-for="(item, index) in statistics"
          :key="index"
        >
          <h2>{{ item.count }}</h2>
          <h4>{{ item.description }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "statiscticsSection",
  computed: mapGetters(["statistics"]),
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.statistics-section {
  padding: 100px 0 50px 0;
  width: 100%;
  clip-path: polygon(
    50% 0%,
    83% 12%,
    100% 43%,
    100% 100%,
    68% 100%,
    32% 100%,
    0 100%,
    0% 43%,
    17% 12%
  );
  background: linear-gradient(-45deg, #f4ca16, #23a6d5, #cc397b);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    &__card {
      text-align: center;
      h2 {
        font-size: 45px;
        font-weight: bold;
      }
      h4 {
        font-size: 19px;
      }
      &:nth-child(1n) {
        h2 {
          color: $red;
        }
      }
      &:nth-child(2n) {
        h2 {
          color: $orange;
        }
      }
      &:nth-child(3n) {
        h2 {
          color: $green;
        }
      }
    }
  }
  @media (max-width: $media-md) {
    padding-top: 50px;
    &__wrapper {
      flex-direction: column;
      align-items: center;
      &__card {
        margin-bottom: 25px;
      }
    }
  }
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

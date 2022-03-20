<template>
  <section class="section-card">
    <div class="container-lg">
      <div class="section-card__wrapper">
        <div
          class="section-card__wrapper__item"
          v-for="(item, index) in info"
          :key="index"
        >
          <img :src="item.path" alt="" draggable="false" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cardSection",
  computed: mapGetters(["info"]),
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.section-card {
  width: 100%;
  z-index: -1;
  margin-top: -90px;
  padding-top: 150px;
  padding-bottom: 90px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    &__item {
      width: 30%;
      user-select: none;
      margin: 0 20px;
      background-color: $light-purple;
      text-align: center;
      color: $black;
      border-radius: 20px;
      transition: all 0.5s ease;
      box-shadow: 0 0 10px $green;
      img {
        height: 100px;
        width: auto;
        display: block;
        margin: 15px auto 15px auto;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: $media-sm) {
    padding-top: 120px;
    &__wrapper {
      flex-direction: column;
      align-items: center;
      &__item {
        width: 50%;
        min-width: 280px;
        padding: 10px 20px;
        margin-bottom: 20px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
}
</style>

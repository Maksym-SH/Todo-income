<template>
  <section class="main-section">
    <div class="container-lg">
      <div class="main-section__wrapper">
        <h1>
          Для заметок и отслеживания
          своих заданий
        </h1>
        <div class="main-section__wrapper__animation">
          <todoAnimation />
        </div>
        <div class="main-section__wrapper__info">
          <h5>
            Повышение ефективности работы при помощи контроля своих заданий и
            созданных заметок
            <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import todoAnimation from "./todoAnimation.vue";
export default {
  name: "infoSection",
  components: {
    todoAnimation,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.main-section {
  width: 100%;
  height: 100vh;
  max-height: 1500px;
  min-height: 600px;
  padding-top: 150px;
  border-radius: 2510px/200px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background: linear-gradient(-45deg, #50c878, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  &__wrapper {
    h1 {
      font-family: $apple;
      max-width: 50%;
    }
    &__animation {
      display: block;
      margin-left: auto;
      max-width: 300px;
      margin-top: 100px;
      position: relative;
    }
    &__info {
      font-size: 20px;
      max-width: 400px;
      margin-top: 250px;
      @media (max-width: $media-md) {
        h5 {
          font-size: 19px;
          max-width: 100%;
        }
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

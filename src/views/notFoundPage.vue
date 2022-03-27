<template>
  <section class="not-found-page">
    <div class="container">
      <h1 class="not-found-page__info">Сторінка не знайдена</h1>
      <div class="not-found-page__come-back">
        <h4>Перейти до головної сторінки:</h4>
        <router-link to="/">
          <b-button variant="success">
            <b-icon icon="files" scale="1" variant="light"></b-icon>
          </b-button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.not-found-page {
  background: linear-gradient(0deg, $dark-grey 40%, $dark-orange);
  background-size: 400% 400%;
  animation: gradient 1s ease infinite;
  padding-top: 150px;
  height: 100vh;
  &__info {
    text-align: center;
  }
  &__come-back {
    margin-top: 50px;
    text-align: center;
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

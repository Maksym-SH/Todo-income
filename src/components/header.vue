<template>
  <header class="header">
    <div class="container-lg">
      <b-navbar toggleable="lg" type="dark" class="d-flex align-items-center">
        <b-navbar-brand href="#" class="header__logo">
          <img :src="logoPath" alt="Logo" />
          <p>{{ logoName }}</p>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="header__list">
            <li
              class="header__list__item"
              v-for="(item, index) in navLinks"
              :key="index"
            >
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderComponent",
  computed: {
    ...mapGetters(["logoName", "logoPath", "navLinks"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba($black, 0.8);
  &__logo {
    display: flex;
    margin-bottom: -20px;
    align-items: center;
    img {
      width: 35px;
      margin: -25px 20px 0 0;
    }
    p {
      font-family: $oswald;
      font-size: 30px;
    }
  }
  &__list {
    padding: 0;
    margin: 0 0 0 auto;
    display: flex;
    &__item {
      margin-right: 20px;
      list-style: none;
      &:last-child {
        margin-right: 0;
      }
    }
    @media (max-width: $media-md) {
      display: block;
      &__item {
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: $media-sm) {
    &__logo {
      img {
        margin-right: 15px;
      }
      p {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

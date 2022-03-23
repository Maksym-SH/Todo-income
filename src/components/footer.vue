<template>
  <footer class="footer">
    <div class="container-lg">
      <div class="footer__wrapper">
        <div class="footer__wrapper__logo">
          <img :src="footerLogo" alt="Logo" />
          <p>{{ logoName }}</p>
        </div>
        <div class="footer__wrapper__contact-us">
          <h4>Зв`язатися з нами</h4>
          <div class="footer__wrapper__contact-us_icon">
            <a
              v-for="(item, index) in contact"
              :key="index"
              :href="item.link"
              :title="item.title"
              target="_blank"
            >
              <img :src="item.image" :alt="item.name" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__end-line">&copy; Усі права захищені</div>
  </footer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "footerComponent",
  computed: {
    ...mapGetters(["logoName", "logoPath", "footerLogo", "contact"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.footer {
  width: 100%;
  padding-top: 50px;
  margin-top: auto;
  background-color: $dark-grey;
  color: $white;
  z-index: 10;
  &__end-line {
    width: 100%;
    border-top: 1px solid $white;
    padding: 10px 0;
    text-align: center;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 40px;
    &__logo {
      display: flex;
      align-items: flex-start;
      img {
        width: 35px;
        margin: -5px 20px 0 0;
      }
      p {
        font-size: 25px;
      }
    }
    &__contact-us {
      margin-bottom: -40px;
      h4 {
        font-size: 22px;
      }
      &_icon {
        display: flex;
        flex-wrap: wrap;
        a {
          img {
            width: 40px;
            height: 40px;
            margin-right: 20px;
            margin-bottom: 10px;
            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
    }
    @media (max-width: $media-xs) {
      flex-direction: column;
      align-items: center;
      &__contact-us {
        padding-top: 20px;
        &_icon {
          padding-left: 10px;
        }
      }
    }
  }
}
</style>

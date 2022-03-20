<template>
  <footer
    class="footer"
    :style="{ color: textColor, backgroundColor: bgColor }"
  >
    <div class="container-lg">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <img :src="footerLogo" alt="Logo" />
          <p>{{ logoName }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "footerComponent",
  props: {
    page: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: mapGetters([
    "logoName",
    "logoPath",
    "textColor",
    "bgColor",
    "footerLogo",
  ]),
  methods: mapActions(["callCheckParams"]),
  mounted() {
    this.page === "home"
      ? this.callCheckParams(["#F6EFDB", "#000000"])
      : this.page === "aboutUs"
      ? this.callCheckParams(["transparent", "#ffffff"])
      : this.page === "calculate" || this.page === "todoList"
      ? this.callCheckParams(["#000000", "#ffffff"])
      : this.page === "notFound"
      ? this.callCheckParams(["#006262", "#ffffff"])
      : null;
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding-top: 50px;
  margin-top: auto;
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
}
</style>

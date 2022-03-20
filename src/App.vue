<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/variables.scss";
#app {
  font-family: $nunito;
  color: $white;
}
a {
  color: $white !important;
  text-decoration: none !important;
}
</style>

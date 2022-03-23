<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/header";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/variables.scss";
#app {
  font-family: $nunito;
  color: $white;
  background-color: $dark-grey;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
::-webkit-scrollbar-button {
  background-repeat: no-repeat;
  width: 10px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: #000;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  background-color: $green;
}

::-webkit-scrollbar {
  width: 10px;
}
a {
  color: $white !important;
  text-decoration: none !important;
}
</style>

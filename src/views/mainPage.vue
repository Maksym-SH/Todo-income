<template>
  <div class="main-page">
    <infoSection></infoSection>
    <cardSection></cardSection>
    <statistics></statistics>
  </div>
</template>

<script>
import infoSection from "@/components/infoSection.vue";
import cardSection from "@/components/cardSection.vue";
import statistics from "@/components/statisticsSection.vue";
export default {
  name: "mainPage",
  components: {
    infoSection,
    cardSection,
    statistics,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.main-page {
  background-color: $dark-grey;
}
</style>

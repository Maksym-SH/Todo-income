<template>
  <div>
    <todo-section></todo-section>
  </div>
</template>

<script>
import todoSection from "@/components/todoSection.vue";
export default {
  components: {
    "todo-section": todoSection,
  },
};
</script>

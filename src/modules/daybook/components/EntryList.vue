<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="buscar entradas" />
    </div>
    <div class="entry-scroll-area">
      <entry v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>
<style lang="scss" scoped>
.entry-scroll-area {
  height: calc(100vh - 120px);
  overflow: scroll;
}
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
input {
  height: 50px;
  margin-bottom: 4px;
}
</style>

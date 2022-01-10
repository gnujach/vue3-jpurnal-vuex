<template>
  <div class="entry-selected d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">miercoles 21</span>
      <span class="mx-1 fs-3 fw-bold">diciembre</span>
      <span class="mx-1 fs-3 fw-bold">2022</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
    </div>
    <div>
      <button class="btn btn-primary mx-2">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-5">
    <textarea cols="30" rows="4" placeholder="¿Que pasó hoy?"></textarea>
  </div>
  <fab icon="fa-save" />
  <img
    src="https://images.unsplash.com/photo-1641197408799-262f1f343cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    class="img-thumbnail"
    alt="picture of the post"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-selected {
  font-family: "Courier New", Courier, monospace;
}
textarea {
  font: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>

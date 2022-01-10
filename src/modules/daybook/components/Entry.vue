<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry-selected', params: { id: 10 } })"
  >
    <!--titulo-->
    <div class="entry-style d-flex">
      <span class="text-success fs-5 fw-bold"> jueves 15 </span>
      <span class="mx-1 fs-5"> de enero </span>
      <span class="mx-2 fs-5"> de 2022 </span>
    </div>
    <!-- content -->
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum, dolor
      quisquam facilis reprehenderit quibusdam cupiditate consequuntur delectus
      deleniti aliquid dicta autem a, nam recusandae et iste iure dolorum
      doloremque?
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
  }
  .entry-description {
    font-size: 14px;
    text-align: left;
  }
}
</style>

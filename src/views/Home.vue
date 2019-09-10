<template>
  <div class="home">
    <div class="row mx-3">
      <h1 class="col bg-dark">
        <img alt="This is an A trust me" src="../assets/logo.png" />
        POD
      </h1>
    </div>
    <div class="row">
      <div class="col">
        <Apod class="my-3 mx-5 px-5" />
        <Search class="mx-5" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Apod from "../components/Apod";
import Search from "../components/Search";

export default {
  name: "home",
  components: {
    Apod,
    Search
  }
};
</script>

<style scoped>
img {
  transform: rotate(180deg);
  height: 100px;
}
div {
  color: #41b883;
}
h1 {
  font-weight: bold;
  border: 5px solid #41b883;
}
</style>
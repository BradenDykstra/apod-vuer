<template>
  <div class="home">
    <h1>
      <img alt="This is an A trust me" src="../assets/logo.png" />
      POD
    </h1>
    <Apod />
  </div>
</template>

<script>
// @ is an alias to /src
import Apod from "../components/Apod";

export default {
  name: "home",
  components: {
    Apod
  }
};
</script>

<style>
img {
  transform: rotate(180deg);
  height: 100px;
}
</style>
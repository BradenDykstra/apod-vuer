<template>
  <div class="search text-light">
    <div class="input-group my-3">
      <input type="date" class="form-control" v-model="query" />
      <div class="input-group-append">
        <button
          class="btn btn-success"
          type="button"
          id="query-apod"
          @click="getApod()"
        >Get the Apod</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "search",
  data() {
    return {
      query: ""
    };
  },
  mounted() {
    this.getApod();
  },
  computed: {},
  methods: {
    getApod() {
      this.$store.dispatch("getApod", this.query);
    }
  },
  components: {}
};
</script>


<style scoped>
.btn {
  background-color: #41b883;
  border: 2px solid #35495e;
}
</style>
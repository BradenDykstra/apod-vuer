<template>
  <div class="apod">
    <h2>Here's the APOD:</h2>
    <h3>{{ apod.title }}</h3>
    <button type="button" data-toggle="modal" data-target="#bigimg" class="btn">
      <img :src="apod.url" class="rounded mb-2 smolimg" />
    </button>
    <br />
    <small>Click to Enlarge</small>
    <h5>{{ apod.date }}</h5>
    <p class="mx-md-5">{{ apod.explanation }}</p>

    <div class="modal fade" id="bigimg" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-body d-flex justify-content-center">
            <img :src="apod.hdurl" class="bigimg rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "apod",
  data() {
    return {};
  },
  computed: {
    apod() {
      return this.$store.state.activeApod;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
h2 {
  color: #35495e;
}
p {
  color: #010101;
}
.smolimg {
  max-height: 40%;
  max-width: 40%;
}
.bigimg {
  max-height: 100%;
  max-width: 100%;
}
.modal-content {
  background-color: #000000;
}
</style>
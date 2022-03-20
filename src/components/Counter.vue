<template>
  <h1>{{ count }}</h1>
  <button @click="addCount">
    count + 1 (immediately)
  </button>
  <button @click="addCountWait">
    count + 1 (wait 500 ms)
  </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit("increment", 1);
    },
    addCountWait() {
      this.$store.dispatch("increment", 1);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>

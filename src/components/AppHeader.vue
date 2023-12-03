<script>
// import { storeFilm } from "../store";
// import { storeSeries } from "../store";
import { store } from "../store";

export default {
  data() {
    return {
      // storeFilm,
      // storeSeries,
      store,
    };
  },
  emits: ["performSearch"]
};
</script>

<template>
  <div class="head-container">
    <h1>BOOLFLIX</h1>
    <div>
      <button @click="$emit('performSearch')">Cerca</button>
      <!-- <input type="search" placeholder="cerca film e serie" v-model.trim:films="storeFilm.searchText"
        v-model.trim:series="storeSeries.searchText" /> -->
        <input type="search" placeholder="cerca film e serie" v-model.trim:films="store.searchText"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: black;
  width: 100%;

  h1 {
    color: crimson;
  }

  button {
    height: 2rem;
    width: 3rem;
  }

  input {
    height: 2rem;
    width: 12rem;
    padding-left: 0.5rem;
  }
}</style>